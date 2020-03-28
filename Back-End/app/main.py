from flask import Flask,request,jsonify
from flask_cors import CORS
from service.services import predictDigitNumber
from service.services import transformData

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return 'Get Request'
    
@app.route('/', methods=['POST'])
def canvasArray():
    req_data = request.get_json()
    blackArray = req_data['data']
    tranformedData = transformData(blackArray)
    predictedValue = predictDigitNumber(tranformedData)
    return str(predictedValue)

app.run()