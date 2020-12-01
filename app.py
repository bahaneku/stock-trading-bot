from flask import Flask, render_template, jsonify
from flask.json import dumps, loads
import pandas as pd
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
    for index, row in data.iterrows():
        # longitude = row['Longitude']
        # latitude = row['Latitude']
        # symbol = row['Symbol']
        # security = row['Security']
        # GICS_Sector = row['GICS_Sector']
        # GICS_Sub_Industry = row['GICS_Sub_Industry']
        # city = row['City']
        # state = row['State']
        # date_added = row['Date_Added']
        # CIK = row['CIK']

        point = Point((row['Latitude'], row['Longitude']))
        print(row['Latitude'])
        properties = {
            "Symbol": row['Symbol'],
            "Security": row['Security'],
            "GICS_Sector": row['GICS_Sector'],
            "GICS_Sub_Industry": row['GICS_Sub_Industry'],
            "City": row['City'],
            "State": row['State'],
            "Date_Added": row['Date_Added'],
            "CIK": row['CIK']
        }

        features.append(Feature(geometry=point, properties=properties))
    feature_collection = FeatureCollection(features)

    dump = dumps(feature_collection)
    geojson = loads(dump)

    return geojson


if __name__=="__main__":
    app.run(debug=True)
