/**
 * Created by mxue on 2015-05-06.
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Start JS');
    document.getElementById('div1').addEventListener('animationend', finir);  //对于 chrome, 则为 webkitAnimationEnd。
});

function finir() {
    console.log('Animation est finie !');
     //   this.className='div_animation';
    this.classList.add('div_animation');
    console.log(this.className);
    document.getElementById('span1').innerHTML='Color changed by Javascript !!!';
}