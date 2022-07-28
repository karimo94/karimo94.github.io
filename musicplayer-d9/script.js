var sound = new Howl({
    src: ["Freddie Joachim - Waves.mp3"],
    html5: true,
    onplay: isPlaying
});
sound.on('end', function() {
    _this.textContent = "play_arrow";
});
sound.on('load', function() {
    //load song data: title, artist, album
    var songFile = new Audio(sound._src);
    console.log('karimo songFile: ', songFile);
    //getSongMetadata(songFile);
    //console.log('karimo song duration: ', songFile);
    //configure the seek bar attributes
    var seekBar = document.getElementById('seekBar');
    seekBar.max = sound._duration;
    seekBar.value = 0;
});
// is there a resume event...?
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

function updateVolume(value) {
    Howler.volume(value / 100);
}

function seek(value) {
    sound.seek(value);
}

function isPlaying() {
    setInterval(function() {
        if (sound.playing()) {
            updateProgressBar();
        }
    }, 1000);
}

function updateProgressBar() {
    //increment the seekbar while state is playing
    document.getElementById('seekBar').stepUp(1);
}

function getSongMetadata(data) {
    //https://ericbidelman.tumblr.com/post/8343485440/reading-mp3-id3-tags-in-javascript
    var reader = new FileReader();
    //get the song title, artist, album
    //get the song total duration
    var artist = undefined;
    var album = undefined;
    var title = undefined;
    var maxDuration = sound.duration;
    var endTime = document.getElementsByClassName('end-time');
}

function convertDuration() {
    //https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    var seconds = sound._duration - minutes * 60;

}