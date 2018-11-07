const stockInfo = axios.create({
  baseURL: "http://api.coindesk.com/v1/bpi/historical/close.json"
});

document.getElementById("bpiBtn").onclick = function() {
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  console.log(startDate);
  stockInfo
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
    )
    .then(response => {
      const date = Object.keys(response.data.bpi);
      const price = Object.values(response.data.bpi);
      printTheChart(response.data.bpi);
    })
    .catch(error => {
      console.log(error);
    });
};

document.getElementById("bitcoinButton").onclick = function() {
  stockInfo
    .get()
    .then(response => {
      const date = Object.keys(response.data.bpi);
      const price = Object.values(response.data.bpi);
      printTheChart(response.data.bpi);
    })
    .catch(error => {
      console.log(error);
    });
};

let printTheChart = stockData => {
  const stockLabels = Object.keys(stockData);
  const stockPrice = Object.values(stockData);
  let ctx = document.getElementById("myChart").getContext("2d");
  let chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockLabels,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrice
        }
      ]
    }
  });
};
