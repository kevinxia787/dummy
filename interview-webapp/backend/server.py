from flask import Flask 
from flask_cors import CORS
import datetime as dt
app = Flask(__name__)
cors = CORS(app)
@app.route("/")
def root():
  return {"Message": "Flask app is working."}


@app.route("/time")
def time():
  return {"Message": dt.datetime.now()}