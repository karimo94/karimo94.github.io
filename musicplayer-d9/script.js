const { Howl } = require("howler");

var sound = new Howl({
    src: ["DJ Premier - Classic.mp3"],
    html5: true
});
sound.on('end', function() {
    _this.textContent = "play_arrow";
});
// https://github.com/goldfire/howler.js#documentation
function playPause(_this) {
    if (_this.textContent === "play_arrow") {
        _this.textContent = "pause";
        sound.play();
    } else {
        _this.textContent = "play_arrow";
        sound.pause();
    }
}

function getNextSong() {
    //grab the next song from spotify api
    alert("feature not supported! only 1 song...");
}

function getPrevSong() {
    //grab the previous song from spotify api
    alert("feature not supported! only 1 song...");
}

function initProgressBar() {
    var player = document.getElementById('player');
    var length = player.duration
    var current_time = player.currentTime;

    // calculate total length of value
    var totalLength = calculateTotalValue(length)
    jQuery(".end-time").html(totalLength);

    // calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    jQuery(".start-time").html(currentTime);

    var progressbar = document.getElementById('seekObj');
    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    if (player.currentTime == player.duration) {
        $('#playpause').removeClass('pause');
    }

    function seek(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        progressbar.value = percent / 100;
    }
};