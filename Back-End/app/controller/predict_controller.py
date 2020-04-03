from flask import jsonify
import app.service.predict_service as predict_service
import numpy as np 


def predict_array(request):
    req_data = request.get_json()
    blackArray = req_data['data']
    tranformedData = predict_service.transformData(blackArray)
    predictedValue = predict_service.predictDigitNumber(tranformedData)
    return jsonify(
        predictedValue=str(predictedValue),
        tranformedData=np.array(tranformedData).reshape((28, 28)).tolist()
    )