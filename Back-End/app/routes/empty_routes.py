from app import app

@app.route('/', methods=['GET'])
def home():
    #ret()
    return 'Get Request'