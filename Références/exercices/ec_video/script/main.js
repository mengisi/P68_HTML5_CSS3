/*
window.onload(...
window.addEventListener('load',...
C'est quand toutes les ressources sont chargées
*/
/**
 * DOMContentLoaded c'est quand le document (HTML) est chargé dans le DOM
 * MAIS PAS LES RESSOURCES
 */
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
    // L'élément video
    var video = document.getElementById("video");
    // L'élément input checkbox
    var video_play_pause = document.getElementById("video_play_pause");
    // L'élément input range
    var video_pos_range = document.getElementById("video_pos_range");
    /**
     * Faire jouer ou pauser la video
     */
    video_play_pause.addEventListener('change', function() {
        if (this.checked) {
            video.play();
            update_progress();
            console.log('La vidéo joue.');
        } else {
            video.pause();
            console.log('La vidéo est en pause.');
        }
    });

    /**
     * Se synchroniser sur le chargement de la ressource video pour savoir sa durée
     */
    video.addEventListener('durationchange', function(){
        console.log('Durée video : ' + video.duration + ' s');
        video_pos_range.max = video.duration;
    });

    /**
     * Repositionner la video à la position fixée par le range
     */
    video_pos_range.addEventListener('change', function(){
        console.log('Pos video : ' + video.currentTime + ' s');
        console.log('Video duration: ' + video.duration + ' s');
        console.log('Range value: ' + this.value);
        video.currentTime = this.value;
    });

    /**
     * Mettre à jour la position du range avec celle de la video
     */
    function update_progress() {
        video_pos_range.value = video.currentTime;
        if (video.currentTime < video.duration) {
            // Relancer la fonction d'affichage toutes les 1s
            setTimeout(update_progress, 1000);
        }
    };
});

