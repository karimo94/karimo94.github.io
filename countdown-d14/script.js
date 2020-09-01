var audio = new Audio('xylo.wav');
var running = true;
var totalTimeSet = 0;
$(document).ready(function() {

    document.getElementById("timeDisplay").value = "00:00:00";
});

function startCountdown() {
    document.getElementById('timeDisplay').readOnly = true;
    // Set the time we're counting down to
    var timeSet = document.getElementById('timeDisplay').value.split(':');
    //just take the input string and break it up using colon delim
    //get your hours, mins, secs easy
    var hrsSet = parseInt(timeSet[0]);
    var minSet = parseInt(timeSet[1]);
    var secSet = parseInt(timeSet[2]);
    totalTimeSet = (secSet * 1000) + (minSet * 60000) + (hrsSet * 3600000); //everything in ms

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Time calculations for hours, minutes and seconds
        var hours = Math.floor((totalTimeSet % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((totalTimeSet % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((totalTimeSet % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("hrs").innerHTML = ('0' + hours).slice(-2);
        document.getElementById("mins").innerHTML = ('0' + minutes).slice(-2);
        document.getElementById("secs").innerHTML = ('0' + seconds).slice(-2);

        if (running) {

            totalTimeSet -= 1000; //subtract time
        }
        // If the count down is over, play the sound
        if (totalTimeSet < 0) {
            clearInterval(x); //stop the interval
            document.getElementById("hrs").innerHTML = '00';
            document.getElementById("mins").innerHTML = '00';
            document.getElementById("secs").innerHTML = '00';
            audio.play();
            document.getElementById('timeDisplay').readOnly = false;
        }
    }, 1000);
}

function stopCountdown() {
    //this stops and resets
    location.reload();
}

function pauseCountdown() {
    if (!running) {
        document.getElementById('pauseBtn').innerHTML = 'Pause';
        running = true;
        startCountdown().x.setInterval(1000);
    }
    if (running) {
        document.getElementById('pauseBtn').innerHTML = 'Resume';
        running = false;
        startCountdown().x.setInterval(0);
    }
}