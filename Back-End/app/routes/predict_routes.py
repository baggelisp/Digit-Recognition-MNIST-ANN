from app import app

@app.route('/predict', methods=['POST'])
def predictArray():
    req_data = request.get_json()
    blackArray = req_data['data']
    #tranformedData = transformData(blackArray)
    tranformedData = transformData2(blackArray)

    predictedValue = predictDigitNumber(tranformedData)
    #return str(predictedValue)
    return jsonify(
        predictedValue=str(predictedValue),
        tranformedData=np.array(tranformedData).reshape((28, 28)).tolist()
    )