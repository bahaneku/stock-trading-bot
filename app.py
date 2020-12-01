from flask import Flask, render_template, jsonify
import pandas as pd
import json
from geojson import Feature, FeatureCollection, Point, dumps, loads
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
    for index, row in data.iterrows():
        properties = {
            "Symbol": row['Symbol'],
            "Security": row['Security'],
            "GICS_Sector": row['GICS_Sector'],
            "GICS_Sub_Industry": row['GICS_Sub_Industry'],
            "City": row['City'],
            "State": row['State'],
            "CIK": row['CIK']
        }
        point = Point((row['Longitude'], row['Latitude']))
       
        features.append(Feature(properties=properties, geometry=point))
    feature_collection = FeatureCollection(features)

    dump = dumps(feature_collection)
    geojson = loads(dump)
    return geojson

if __name__=="__main__":
    app.run(debug=True)
