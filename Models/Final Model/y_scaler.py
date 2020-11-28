import pandas as pd
import numpy as np
from sklearn import preprocessing

data=pd.read_csv("S&P_daily.csv")
X=data[["open","high","low","close","volume"]]

# Number of datapoints to use in predictions
history_points=50
# Retriving the real next day open values
next_day_close_values = np.array([data.loc[:,"close"][i + history_points].copy() for i in range(len(X) - history_points)])
unscaled_y = np.expand_dims(next_day_close_values, -1)
# Creating y_scaler
y_scaler = preprocessing.MinMaxScaler().fit(unscaled_y)