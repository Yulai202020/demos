function pie() {
    const ctx = document.querySelector('canvas').getContext("2d");

    new Chart(ctx, {
        type: "pie",

        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "money",
                data: [0, 1, 2, 4, 8],
                fill: true,
                backgroundColor: "blue",
                borderColor: "red",
                borderWidth: "10"
            }]
        }
    });
}

window.onload = pie;