# from flask import Flask,request,jsonify
# from flask_cors import CORS
# from app.service.services import predictDigitNumber
# from app.service.services import transformData
# from app.service.services import transformData2
# import numpy as np 

# app = Flask(__name__)
# CORS(app)
# app.config["DEBUG"] = True


# @app.route('/', methods=['GET'])
# def home():
#     return 'Get Request'
    
# @app.route('/', methods=['POST'])
# def canvasArray():
#     req_data = request.get_json()
#     blackArray = req_data['data']
#     #tranformedData = transformData(blackArray)
#     tranformedData = transformData2(blackArray)

#     predictedValue = predictDigitNumber(tranformedData)
#     #return str(predictedValue)
#     return jsonify(
#         predictedValue=str(predictedValue),
#         tranformedData=np.array(tranformedData).reshape((28, 28)).tolist()
#     )




from app import app

if __name__=="__main__":
    print('Server Running...')
    #app.run(host='0.0.0.0',port=5000)
    app.run()