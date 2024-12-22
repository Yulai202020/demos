function nice_example() {
    const ctx = document.querySelector('canvas').getContext("2d");

    new Chart(ctx, {
        type: "line",

        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "money",
                data: [0, 1, 2, 4, 8],
                fill: true,
                backgroundColor: "rgba(0, 255, 255, 0.5)",
                borderColor: "rgba(0, 255, 0, 0.5)",
                borderWidth: "5"
            }]
        }
    });
}

window.onload = nice_example;