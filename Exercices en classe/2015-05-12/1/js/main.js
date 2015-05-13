/**
 * Created by mxue on 2015-05-06.
 */
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video');
    var video_play_pause = document.getElementById('video_play_pause');
    video_play_pause.addEventListener('change', function () {
        if (this.checked) {
            video.play();
            console.log('video playing');
        } else {
            video.pause();
            console.log('video paused');
        }
    })
});