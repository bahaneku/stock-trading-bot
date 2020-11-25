from config import Alpaca_key,Alpaca_secret_key,Alpaca_endpoint

import alpaca_trade_api as tradeapi

api = tradeapi.REST(Alpaca_key,Alpaca_secret_key,Alpaca_endpoint)

def buy_stock(symbol='SPY',qty=1,type='market',time_in_force='day'):
    api.submit_order(
        symbol=symbol,
        qty=qty,
        side='buy',
        type=type,
        time_in_force=time_in_force
        )

def sell_stock(symbol='SPY',qty=1,type='market',time_in_force='day'):
    api.submit_order(
        symbol=symbol,
        qty=qty,
        side='sell',
        type=type,
        time_in_force=time_in_force
    )

def sell_all():
    positions=api.list_positions()
    for i in positions:
        qty = i.qty
        symbol = i.symbol
        sell_stock(qty=qty,symbol=symbol)   
