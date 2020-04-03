from app import app
from flask import Flask,request,jsonify
import app.controller.predict_controller as predict_controller


@app.route('/predict', methods=['POST'])
def predictArray():
    return predict_controller.predict_array(request)
    