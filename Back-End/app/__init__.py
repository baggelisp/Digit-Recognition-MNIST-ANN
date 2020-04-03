from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

from app.routes import  empty_routes
from app.routes import  predict_routes
from app.controller import predict_controller
from app.service import  predict_service
# #from app.ml import generate_model_ANN


# # from app.routes import  empty_routes
# # from app.routes import  predict_routes
# # from app.controller.predict_controller import *
# from app.service.predict_service import  ret

# __all__ = ['routes', 'controller', 'service']

# from app.routes import routes
# from app import controller
# from app import  service
#from app.ml import generate_model_ANN