#import the packages / dependecies
import numpy as np 
import mnist # Get data set from
from keras.models import Sequential #ANN architecture
from keras. layers import Dense # The layers in the ANN
from keras.utils import to_categorical
import matplotlib.pyplot as plt # Graph
import statistics
from keras.models import load_model
from keras import backend as K

#imageToPredict is an array [728]
def predictDigitNumber(imageToPredict):
    K.clear_session()
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
    return predictions[0] # return all predicts

def transformData(input_data):
    step = len(input_data)//784
    tranformedData = []
    for i in range(0, len(input_data), step):
        tempList = input_data[i:i+step]
        meanValue = statistics.mean(tempList) 
        tranformedData.append(meanValue * 255)
    return tranformedData

def transformData2(input_data):
    fullList = []
    for i in range(0, len(input_data), 420):
        fullList.append(input_data[i:i+420])
    fullArray = np.asarray(fullList)
    tempArray = []
    for i in range (0, fullArray.shape[0], 15):
        for j in range (0,fullArray.shape[1], 15):
            tempArray.append(fullArray[i,j].mean() * 255)  
    return tempArray