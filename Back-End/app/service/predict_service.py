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
    model.load_weights('app/ml-model/model.h5') # running on localhost
    #model.load_weights('app/ml-model/model.h5') # running with docker
    imageToPredict = np.array([imageToPredict])
    # Make prediction
    predictions = model.predict(imageToPredict[:1])
    print(predictions)
    #return np.argmax(predictions, axis =1)[0]
    return predictions[0]


def transformData(input_data):
    np.set_printoptions(suppress=True)
    fullList = []
    for i in range(0, len(input_data), 420):
        fullList.append(input_data[i:i+420])
    fullArray = np.asarray(fullList)
    tempArray = []
    for i in range (0, fullArray.shape[0], 15):
        for j in range (0,fullArray.shape[1], 15):
            tempArray.append(fullArray[i:i+15,j:j+15].mean()) 

    scaledArray = list(map(lambda x: x-0.5 , tempArray)) 
    return scaledArray