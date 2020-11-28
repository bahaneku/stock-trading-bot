import pandas as pd
import numpy as np
from sklearn import preprocessing
from keras.models import load_model
from y_scaler import y_scaler

# Loading ML model
model = load_model("predict_next_day_close.h5")

# Loading historical data
data = pd.read_csv("S&P_daily.csv")
X = data[["open","high","low","close","volume"]]

# Newest closing data must be used in prediction
# Will need to add that data to the database before making prediction or just add in the script

def make_prediction(X, model, y_scaler):
    # Predicting Tomorrows Close
    MinMaxScaler = preprocessing.MinMaxScaler()
    normalized_data = MinMaxScaler.fit_transform(X)
    normalized_data = normalized_data[-50:]
    predicted_close = model.predict(np.expand_dims(normalized_data, 0))
    predicted_actual_close = y_scaler.inverse_transform(predicted_close)
    return float(predicted_actual_close[0][0])

def last_prediction(data, model, y_norm):
    MinMaxScaler = preprocessing.MinMaxScaler()
    normalized_data = MinMaxScaler.fit_transform(data)
    normalized_data = normalized_data[-51:-1]
    # Predict next day's close
    predicted_close=model.predict(np.expand_dims(normalized_data, 0))
    # Convert the close to real terms
    last_predicted_close=y_norm.inverse_transform(predicted_close)
    return float(last_predicted_close[0][0])

# Make prediction for tomorrow
prediction = make_prediction(X, model, y_scaler)
# Get yesterday's prediction
last_prediction = last_prediction(X, model, y_scaler)
# Get percent change predicted
percent_change_predicted = ((prediction-last_prediction)/last_prediction) *100
print(percent_change_predicted)