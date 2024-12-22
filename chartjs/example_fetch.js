function example_with_fetch_data() {
    const ctx = document.querySelector('canvas').getContext("2d");
    
    fetch("https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo")
    .then(response => response.json())
    .then(json => {
        let data = json["data"];
        let xData = [];
        let yData = [];
    
        data.forEach(item => {
            xData.push(item.date);
            yData.push(item.value);
        });
    
    
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xData,
                datasets: [{
                    label: "money",
                    data: yData,
                    fill: true,
                }]
            }
        });
    
    });
}

window.onload = example_with_fetch_data;