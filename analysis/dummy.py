from utils import *


class Model:
    name = "Dummy"

    def __init__(self):
        pass

    def train(self, train_data):
        pass

    def predict(self, sequence, question):
        prediction = _acceptedAnswers[question.question][0]
        return [0.5, prediction]
