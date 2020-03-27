from flask import Flask,request,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return 'Get Request'
    
@app.route('/', methods=['POST'])
def canvasArray():
    data = jsonify(request.json)
    print (data)
    return data


app.run()