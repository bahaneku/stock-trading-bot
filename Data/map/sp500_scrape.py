from bs4 import BeautifulSoup as bs
from splinter import Browser
import pandas as pd
import requests
import pymongo
import time
from pymongo import MongoClient
import time

data = {}

def locations():
    sp500loc_url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
    locations_table = pd.read_html(sp500loc_url)
    sp500_table = locations_table[0]
    sp500_table_transposed = sp500_table.transpose()

    sp500_table_html = sp500_table_transposed.to_html(index=False, header=False, classes=["table", "table-striped"])

    html_table_file = open("table.html", "w")
    html_table_file.write(sp500_table_html)
    html_table_file.close()

    print(sp500_table_html)

    data.update({"sp500_location_table":sp500_table_html})

def scrape():
    locations()
    print(data)
    return(data)