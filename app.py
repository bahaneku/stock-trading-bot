from flask import Flask, render_template, jsonify
from flask.json import dump
import pandas as pd
import geojson
from geojson import Feature, FeatureCollection, Point
from flask_cors import CORS, cross_origin

app=Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/dashboard")
def home():
    return render_template("dashboard.html")

@app.route("/user")
def user():
    return render_template("user.html")


@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/locations")
def locations():
    data = pd.read_csv("Data/map/sp500locations.csv")

    features = []
    for d in data:
        point = Point((d.Latitude, d.Longitude))
        print(d.Latitude)
        properties = {
            "Symbol": d.Symbol,
            "Security": d.Security,
            "GICS_Sector": d.GICS_Sector,
            "GICS_Sub_Industry": d.GICS_Sub_Industry,
            "City": d.City,
            "State": d.State,
            "Date_Added": d.Date_Added,
            "CIK": d.CIK
        }

        features.append(Feature(geometry=point, properties=properties))
    feature_collection = FeatureCollection(features)

    dump = dumps(feature_collection)
    geojson = loads(dump)

    return geojson



if __name__=="__main__":
    app.run(debug=True)
