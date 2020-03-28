#import the packages / dependecies
import numpy as np 
import mnist # Get data set from
from keras.models import Sequential #ANN architecture
from keras. layers import Dense # The layers in the ANN
from keras.utils import to_categorical
import matplotlib.pyplot as plt # Graph
import statistics
from keras.models import load_model

#imageToPredict is an array [728]
def predictDigitNumber(imageToPredict):
    #import model
    # Load the model from disk later using:
    # Build the model.
    model = Sequential([
     Dense(64, activation='relu', input_shape=(784,)),
     Dense(64, activation='relu'),
     Dense(10, activation='softmax'),
    ])
    model.load_weights('model/model.h5')
    imageToPredict = np.array([imageToPredict])
    # Make prediction
    predictions = model.predict(imageToPredict[:1])
    return np.argmax(predictions, axis =1)[0]

def transformData(input_data):
    step = len(input_data)//784
    tranformedData = []
    for i in range(0, len(input_data), step):
        tempList = input_data[i:i+step]
        meanValue = statistics.mean(tempList) 
        tranformedData.append(meanValue * 255)
    return tranformedData
    