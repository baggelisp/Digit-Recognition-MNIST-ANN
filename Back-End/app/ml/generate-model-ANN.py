#import the packages / dependecies
import numpy as np 
import mnist # Get data set from
from keras.models import Sequential #ANN architecture
from keras. layers import Dense # The layers in the ANN
from keras.utils import to_categorical
import matplotlib.pyplot as plt # Graph
#from keras.models import model_from_json


#Load the data set
train_images = mnist.train_images() # training data of images
train_labels = mnist.train_labels() # training data of the labels
test_images = mnist. test_images()  # testing data images
test_labels = mnist.test_labels()   # testing data labels


#Normalize the images 
#Normalize the pixel values from [0, 255] to [-0.5 to 0.5]
#This make the network easier to train
train_images = (train_images / 255) - 0.5
test_images = (test_images/ 255) - 0.5

#Flatten the images. Flatten each 28 x 28 image into a 784= 28^2 
#dimensional vector and pass into the neural network
train_images = train_images.reshape((-1, 784))
test_images = test_images.reshape((-1,784))
#print the new image shape
print(train_images.shape) #60,000 rows and 784 cols
print(test_images.shape)  #10,000 rows and 784 cols


#Build the ANN model
#With 3 layers, 2 with 64 neurons and activation function = relu
#    and  1 layer with 10 neurons with activation function= softmax
model = Sequential()
model.add(Dense(64, activation='relu', input_dim=784))
model.add(Dense(64, activation='relu'))
model.add(Dense(10, activation='softmax'))

#Compile the model
# loss measures how well the model did on training, and then tries to improve on
# it using the optimizer
model.compile(
  optimizer= 'adam',
    loss = 'categorical_crossentropy', #loss function for classes > 2
    metrics = ['accuracy']
)


#Train the model
model.fit(
    train_images, #The training data images
    to_categorical(train_labels),#The trainind data labels, label data only returns a single digit representing the class of each label Ex: train_labels = 2,to_categorical(2)= [0,0,1,0,0,0,0,0,0,0]
    epochs=5, #Number of iterations over the entire data set to train on
    batch_size = 3 #The number of samples per gradient update for training
)

#Evaluate the model
# model.evaluate(
#   test_images,
#   to_categorical(test_labels)
# )

#save the model to disk
model.save_weights('../model/model.h5')


# serialize model to JSON
# model_json = model.to_json()
# with open("model.json", "w") as json_file:
#     json_file.write(model_json)
# # serialize weights to HDF5
# model.save_weights("model.h5")
# print("Saved model to disk")

# load json and create model
# json_file = open('model.json', 'r')
# loaded_model_json = json_file.read()
# json_file.close()
# loaded_model = model_from_json(loaded_model_json)
# # load weights into new model
# loaded_model.load_weights("model.h5")
# print("Loaded model from disk")

#Make predictions
# Predict on the first 5 test images.
# Keep in mind that the output of our network is 10 probabilities, 
#   so we'll use np.argmax()to turn those into actual digits
np.set_printoptions(suppress=True)
print ('Predictttttttttttttttttttttttttttt')
print (test_images[:1])
predictions = model.predict(test_images[:1])
print(predictions)
print (np.argmax(predictions, axis =1))
print(test_labels[:5])


# import matplotlib.pyplot as plt
# for i in range(0,5):
#   first_image = test_images[i]
#   first_image = np.array(first_image, dtype='float')
#   pixels = first_image.reshape((28, 28))
#   plt.imshow(pixels, cmap='gray')
#   plt.show()