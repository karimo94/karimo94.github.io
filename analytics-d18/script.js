var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'Steps Taken',
            data: [3256, 6578, 1089, 548, 2647, 4179],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Cardio, Total Distance: 27km'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById('playerChart').getContext('2d');
var playerChart = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['Pace', 'Shooting', 'Defence', 'Physicality', 'Passing', 'Flair'],
        datasets: [{
            label: 'Performance in this category',
            data: [94, 85, 58, 75, 72, 79],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Player analysis'
        }
    }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'Hours slept',
            data: [9, 6.5, 7, 5.5, 6, 7, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, .7)',
                'rgba(255, 20, 0, .7)',
                'rgba(98, 64, 235, .7)',
                'rgba(42, 180, 164, .7)',
                'rgba(255, 255, 25, .7)',
                'rgba(255, 87, 33, .7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Hours Spent on Sleep'
        }
    }
});
var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'Weightlifting',
            data: [1, 0.5, 0.3, 0.2, .6, .75, 1.5],
            backgroundColor: [
                'red',
                'blue',
                'violet',
                'yellow',
                'grey',
                'orange',
                'green',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Hours Spent Weightlifting'
        }
    }
});