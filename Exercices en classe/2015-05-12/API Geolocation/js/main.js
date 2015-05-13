/**
 * Created by mxue on 2015-05-06.
 */

function trouve(pos_obj) {
    console.log('Navigateur géolocalisé');
    console.log('Latitude : ' + pos_obj.coords.latitude + ' et longitude : ' + pos_obj.coords.longitude);
    gererCarteGoogle(pos_obj);
}

function erreur(error) {
    console.log('Erreur de localisation');
}

function gererCarteGoogle(pos_obj) {
    console.log('Dessin sur une carte');
    console.log(pos_obj.coords.latitude, pos_obj.coords.longitude);
    var point = new google.maps.LatLng(pos_obj.coords.latitude, pos_obj.coords.longitude);
    var map_options = {
        zoom: 20,
        center: point,  //此处用逗号
        mapTypeId: google.maps.MaptypeId.ROADMAP,
        zoomControl: true  //此处 无标点
    };
    var map = new google.maps.Map(document.getElementById('carte'), map_options);
    var marker=new google.maps.Marker({
        position:point,
        map:map,
        title:"Bonjour à tous je suis cool comme gars mais au milieu de l'autoroute !!"
    });
}


document.addEventListener('DOMContentLoaded', function () {  //此处监听的是DOM下载完毕，不包括所有的src。
    document.getElementsByTagName('button')[0].addEventListener('click', function () {  //也可以在HTML中添加函数，但最好不要在HTML中出现javascript。
        if (null != navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(trouve, erreur); //此处该函数要使用两个函数,根据其位置，第一个默认为true,第二个为false
        }
    });
});