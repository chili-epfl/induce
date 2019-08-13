
class Model:
    name = "Baseline"
    AGG = {}

    def __init__(self):
        pass

    def train(self, train_data):
        self.AGG = {}
        _D = train_data.groupby(["uniqueQuestionID", "result"]).count()
        for idx, counts in _D.iterrows():
            uniqueQuestionID, result = idx
            count = counts.question
            self.AGG[uniqueQuestionID] = self.AGG.get(uniqueQuestionID, {})
            self.AGG[uniqueQuestionID][result] = count

    def predict(self, sequence, question):
        q = self.AGG[question.uniqueQuestionID]
        prediction = list(q.keys())[0]
        [a, b] = [q[k] for k in q.keys()]
        proba = a / (a+b)
        return [proba, prediction]
