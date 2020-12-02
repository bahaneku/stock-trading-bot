var stocks = new Stocks('FUMKANBPH5ZNJD8J');

function getData() {
  var hourly = document.querySelector("#hourly");
  var daily = document.querySelector("#daily");
  var monthly = document.querySelector("#monthly");

  if (hourly.classList.contains("active")) {
    console.log("Hourly")
    var options = {
      symbol: 'SPY',
      interval: '60min',
      amount: 20
    };
  } else if (daily.classList.contains("active")) {
      console.log("daily")
      var options = {
        symbol: 'SPY',
        interval: 'daily',
        amount: 10
      };
  } else if (monthly.classList.contains("active")) {
      console.log("monthly")
      var options = {
        symbol: 'SPY',
        interval: 'monthly',
        amount: 12
    }
  }

  // var options = {
  //     symbol: 'SPY',
  //     interval: 'daily',
  //     amount: 10
  //   };

  // ========================================================================
  // ========================================================================

  function buildSpyPlot() {
      stocks.timeSeries(options).then(stockData => {

      // Grab values from the data json object to build the plots
      var time = stockData.map(day => day.date)
      var close = stockData.map(day => day.close)

      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "Actual",
        x: time,
        y: close,
        line: {
          color: "#e14eca"
        }
      };

      // var trace2 = {
      //     type: "scatter",
      //     mode: "lines",
      //     name: "Predicted",
      //     x: time,
      //     y: close,
      //     line: {
      //       color: "#17CFBE"
      //     }
      // }; 

      var data = [trace1];

      var layout = {
        title: `SPY closing prices`,
        xaxis: {
          autorange: true,
          type: "date",
          showgrid: false
        },
        yaxis: {
          autorange: true,
          type: "linear",
          showgrid: false
        },
        plot_bgcolor:"rgba(0,0,0,0)",
        paper_bgcolor:"rgba(0,0,0,0)",
        font: {
          color: '#ffffff'
        }
      };

      var config = {responsive: true}

      Plotly.newPlot("plot", data, layout, config);
    });
  };

  // ========================================================================
  // ========================================================================

  function buildEquityPlot() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var today = new Date().toISOString().slice(0, 10)
    var TwoDaysAgo = new Date();
    TwoDaysAgo.setDate(TwoDaysAgo.getDate() - 2);
    var ThreeDaysAgo = new Date();
    ThreeDaysAgo.setDate(ThreeDaysAgo.getDate() - 3);
    // Grab values from the data json object to build the plots
    var time = [ThreeDaysAgo,TwoDaysAgo,yesterday, today]
    var close = [100000, 100000, 100000, 100000]

    var trace1 = {
      type: "bar",
      name: "Equity",
      x: time,
      y: close,
      marker: {
        color: '#e14eca',
        opacity: 0.6,
        line: {
          color: '#e14eca',
          width: 1.5
        }
      }
    };

    var data = [trace1];

    var layout = {
      // title: `Total Account Equity`,
      xaxis: {
        autorange: true,
        type: "date",
        showgrid: false
      },
      yaxis: {
        autorange: true,
        type: "linear",
        showgrid: false
      },
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      font: {
        color: '#ffffff'
      }
    };

    var config = {responsive: true}

    Plotly.newPlot("equity-chart", data, layout, config);
  };

  // ========================================================================
  // ========================================================================

  function buildBuyingPowerPlot() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var today = new Date().toISOString().slice(0, 10)
    var TwoDaysAgo = new Date();
    TwoDaysAgo.setDate(TwoDaysAgo.getDate() - 2);
    var ThreeDaysAgo = new Date();
    ThreeDaysAgo.setDate(ThreeDaysAgo.getDate() - 3);
    // Grab values from the data json object to build the plots
    var time = [ThreeDaysAgo,TwoDaysAgo,yesterday, today]
    var close = [400000, 400000, 400000, 400000]

    var trace1 = {
      type: "bar",
      name: "Equity",
      x: time,
      y: close,
      marker: {
        color: '#e14eca',
        opacity: 0.6,
        line: {
          color: '#e14eca',
          width: 1.5
        }
      }
    };

    var data = [trace1];

    var layout = {
      // title: `Total Account Equity`,
      xaxis: {
        autorange: true,
        type: "date",
        showgrid: false
      },
      yaxis: {
        autorange: true,
        type: "linear",
        showgrid: false
      },
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      font: {
        color: '#ffffff'
      }
    };

    var config = {responsive: true}

    Plotly.newPlot("buying-power-chart", data, layout, config);
  };

  // ========================================================================
  // ========================================================================

  function percentChangechart() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var today = new Date().toISOString().slice(0, 10)
    var TwoDaysAgo = new Date();
    TwoDaysAgo.setDate(TwoDaysAgo.getDate() - 2);
    var ThreeDaysAgo = new Date();
    ThreeDaysAgo.setDate(ThreeDaysAgo.getDate() - 3);
    // Grab values from the data json object to build the plots
    var time = [ThreeDaysAgo,TwoDaysAgo,yesterday, today]
    var close = [0.0, 0.0, 0.0, 0.0]


    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Actual",
      x: time,
      y: close,
      line: {
        color: "#e14eca"
      }
    };

    var data = [trace1];

    var layout = {
      // title: `SPY closing prices`,
      xaxis: {
        autorange: true,
        type: "date",
        showgrid: false
      },
      yaxis: {
        autorange: true,
        type: "linear",
        showgrid: false
      },
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      font: {
        color: '#ffffff'
      }
    };

    var config = {responsive: true}

    Plotly.newPlot("percent-change", data, layout), config;
  // });
  };

  percentChangechart()
  buildBuyingPowerPlot()
  buildEquityPlot()
  buildSpyPlot()

}

getData()
