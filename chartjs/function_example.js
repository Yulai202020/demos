function some_function(x) {
    return 2**x;
}

function function_example() {
    const ctx = document.querySelector('canvas').getContext("2d");

    let max = 10;
    let min = 0;

    let labels = [];
    let data = [];

    for (let i = min; i < max; i++) {
        labels.push(i.toString());
        data.push(some_function(i));
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "money",
                data: data,
                tension: 0.5
            }]
        }
    });
}

window.onload = function_example;