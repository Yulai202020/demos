function mixed_example() {
    const ctx = document.querySelector('canvas').getContext("2d");

    new Chart(ctx, {
        type: "line",

        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "money",
                data: [3, 3.5, 4, 4.5, 5],
                tension: 0.5
            },
            {
                type: "bar",
                label: "another think",
                data: [1, 2, 3, 4, 5],
                tension: 0.5
            }]
        }
    });
}

window.onload = mixed_example;