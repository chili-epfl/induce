import numpy as np
import utils as U

rd = np.random.random


def rddist(size):
    arr = [rd()**3 for _ in range(size)]
    return np.array(arr) / sum(arr)


def clip(x):
    assertIsProbability(x)
    return max(1e-5, min(1-1e-5, x))


def assertIsProbability(x):
    assert x >= 0 and x <= 1, "This is not a probability: %.6f" % x


def assertIsDistribution(x):
    assert len([y for y in x if y < 0]
               ) == 0, "The probability has negative values"
    assert np.abs(
        sum(x) - 1.0) < 1e-5, "The probability distribution does not sum to 1."


class Model:

    def __init__(self, nHiddenStates):
        self.name = "Bayesian"
        self.nHiddenStates = nHiddenStates
        self.STATES = [[rd() for _ in range(9)] for _ in range(nHiddenStates)]
        self.TRANSITIONS = {q: [np.array([1. if i == j else 0. for i in range(
            nHiddenStates)]) for j in range(nHiddenStates)] for q in U.question_types}
        self.DISTRIBUTION = {}
        self.PRIOR = rddist(nHiddenStates)

        assertIsDistribution(self.PRIOR)
        assertIsDistribution(list(self.TRANSITIONS.values())[0][0])
        assertIsDistribution(list(self.TRANSITIONS.values())[1][0])
        assertIsProbability(self.STATES[0][0])

    def train(self, train_data):
        print("Evaluating fit ...")
        self.evaluate(train_data)
        for i in range(4):
            print("#" * 39)
            print("ITERATION %d" % (i+1))
            print("#" * 39)

            print("\n" * 3)
            print("Updating DISTRIBUTION ...")
            self.updateDistribution(train_data)
            print("Computing PRIOR ...")
            self.computePrior()
            print("- " * 20)
            self.displayDISTRIBUTION()
            self.evaluate(train_data)

            print("\n" * 3)
            print("Updating STATES ...")
            self.updateStates(train_data)
            print("- " * 20)
            self.displaySTATES()
            self.evaluate(train_data)

            # print("\n" * 3)
            # print("Updating TRANSITIONS ...")
            # self.updateTransitions(train_data)
            # print("- " * 20)
            # self.displayTRANSITIONS()
            # self.evaluate(train_data)

    def displaySTATES(self):
        for i, s in enumerate(self.STATES):
            print("STATE" + (" " if i < 10 else ""), i, end="| ")
            for x in s:
                print("%.4f" % x, end=" | ")
            print()

    def displayDISTRIBUTION(self):
        for u in list(self.DISTRIBUTION.keys())[:20]:
            print("USER", u, end="| ")
            for x in self.DISTRIBUTION[u]:
                print("%.5f" % x, end=" | ")
            print()

    def displayTRANSITIONS(self):
        for t in self.TRANSITIONS:
            print("QUESTION", t)
            for i, l in enumerate(self.TRANSITIONS[t]):
                print("From STATE", i, ":", end="| ")
                for x in l:
                    print("%.2f" % x, end=" | ")
                print()
            print()

    def getProbability(self, state, question):
        [topic, _, _, features] = question.question.split("_")
        probaIndex = U.question_types.index(topic + "_" + features)
        p = clip(state[probaIndex])
        return p if U.answers[probaIndex] == question.result else (1 - p)

    def applyTransitions(self, distribution, transitions):
        newDistribution = np.array([0. for _ in range(self.nHiddenStates)])
        for i, t in enumerate(transitions):
            newDistribution += distribution[i] * t
        return newDistribution

    def updateDistribution(self, train_data):
        TRAIN_DATA = train_data[train_data.step > 17]

        for u in TRAIN_DATA.user.unique():
            _loglikelihoods = [0 for _ in range(self.nHiddenStates)]
            _d = [[1 if i == j else 0 for i in range(
                self.nHiddenStates)] for j in range(self.nHiddenStates)]

            userData = TRAIN_DATA[TRAIN_DATA.user == u]
            userSequence = [x for _, x in userData.iterrows()]
            for q in userSequence:
                [topic, _, _, features] = q.question.split("_")
                qType = topic + "_" + features

                for i in range(self.nHiddenStates):
                    currentStates = self.applyTransitions(
                        _d[i], self.TRANSITIONS[qType]) if (q.type == "FLEX") else _d[i]

                    assertIsDistribution(currentStates)

                    _obsProbability = sum(
                        [currentStates[j] * self.getProbability(s, q) for j, s in enumerate(self.STATES)])
                    _loglikelihoods[i] += np.log(clip(_obsProbability))

            x = np.exp(_loglikelihoods)
            self.DISTRIBUTION[u] = x / sum(x)
            assertIsDistribution(self.DISTRIBUTION[u])

    def updateStates(self, train_data):
        TRAIN_DATA = train_data[train_data.step > 17]

        for s in range(self.nHiddenStates):
            self.STATES[s] = [{"r": 0, "c": 0} for _ in range(9)]

        for u in TRAIN_DATA.user.unique():
            userData = TRAIN_DATA[TRAIN_DATA.user == u]
            userSequence = [x for _, x in userData.iterrows()]

            _d = [p for p in self.DISTRIBUTION[u]
                  ] if u in self.DISTRIBUTION else [p for p in self.PRIOR]
            for q in userSequence:
                [topic, _, _, features] = q.question.split("_")
                qType = topic + "_" + features
                probaIndex = U.question_types.index(qType)

                currentStates = self.applyTransitions(
                    _d, self.TRANSITIONS[qType]) if (q.type == "FLEX") else _d

                assertIsDistribution(currentStates)

                for i, s in enumerate(self.STATES):
                    s[probaIndex]["r"] += currentStates[i] if q.result == U.answers[probaIndex] else 0
                    s[probaIndex]["c"] += currentStates[i]

        def _p(x): return clip(x["r"] / x["c"]) if x["c"] > 0 else 0.5
        for s in range(self.nHiddenStates):
            self.STATES[s] = [_p(x) for x in self.STATES[s]]

    def updateTransitions(self, train_data):
        TRAIN_DATA = train_data[train_data.step > 17]

        transitions = {q: [np.array([0. for _ in range(self.nHiddenStates)]) for _ in range(
            self.nHiddenStates)] for q in U.question_types}

        for u in TRAIN_DATA.user.unique():
            userData = TRAIN_DATA[TRAIN_DATA.user == u]
            userSequence = [x for _, x in userData.iterrows()]

            _d = [p for p in self.DISTRIBUTION[u]]
            for q in userSequence:
                assertIsDistribution(_d)

                [topic, _, _, features] = q.question.split("_")
                qType = topic + "_" + features

                if (q.type == "FLEX"):
                    _obs = [self.getProbability(s, q) for s in self.STATES]
                    _obs = np.array(_obs) / sum(_obs)

                    assertIsDistribution(_obs)

                    for i in range(self.nHiddenStates):
                        transitions[qType][i] += _d[i] * _obs

        for q in U.question_types:
            for i in range(self.nHiddenStates):
                transitions[q][i] /= sum(transitions[q][i])

        self.TRANSITIONS = transitions

    def computePrior(self):
        _prior = np.array([0. for _ in self.STATES])
        for _p in self.DISTRIBUTION.values():
            _prior += _p
        _prior /= sum(_prior)
        self.PRIOR = _prior

    def evaluate(self, train_data):
        print("- " * 20)

        TRAIN_DATA = train_data[train_data.step > 17]

        loglikelihood = 0
        for u in TRAIN_DATA.user.unique():
            userData = TRAIN_DATA[TRAIN_DATA.user == u]
            userSequence = [x for _, x in userData.iterrows()]

            _d = [p for p in self.DISTRIBUTION[u]
                  ] if u in self.DISTRIBUTION else [p for p in self.PRIOR]

            for q in userSequence:
                [topic, _, _, features] = q.question.split("_")
                qType = topic + "_" + features

                currentStates = self.applyTransitions(
                    _d, self.TRANSITIONS[qType]) if (q.type == "FLEX") else _d

                assertIsDistribution(currentStates)

                obs = [self.getProbability(s, q) for s in self.STATES]
                _probas = [currentStates[i] * obs[i]
                           for i in range(self.nHiddenStates)]
                _p = sum(_probas)

                assertIsProbability(_p)

                loglikelihood -= np.log(_p)

                if (q.type != "FLEX"):
                    _d = np.array(_probas) / _p

        print('LOGLIKELIHOOD = %.2f' % loglikelihood)
        print("- " * 20)

    def predict(self, sequence, question):
        return [0.5, ""]
