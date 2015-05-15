/**
 * Created by mxue on 2015-05-06.
 */
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');  //???
    ctx.translate(250, 250);  //迁移重心的位置（物体中心）

    ctx.rect(-100, -100, 200, 200); // 物体的四个点
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    var nb_fig = 25;
    var timmer;
    //ctx.stroke();  //或者用 fill,表示可以开始画了？
    //ctx.fillStyle = 'rgba(255,0,0,0.5)';
    //ctx.fill();
    //ctx.closePath(); //表示以下结束，下面重新开始


    // ctx.rotate(Math.PI / 4); //表示四十五度
    // ctx.rect(-100, -100, 200, 200); // 物体的四个点
    // ctx.stroke();  //或者用 fill,表示可以开始画了？

    //ctx.strokeStyle = "green";
    //ctx.stroke();

   // 使用循环来做：
    /*  for (var i = 0; i < nb_fig; i++) {
     ctx.rect(-100, -100, 200, 200); // 物体的四个点
     ctx.rotate(2 * Math.PI / nb_fig); //表示1/nb_fig分之一个圆周，也可写成 Math.PI 表示180度
     ctx.stroke();
     }*/


    //用定时器来画：
    var count = 0;
    function tracer_tourner() {
        ctx.beginPath();//画图开始
        ctx.rect(-100, -100, 200, 200); // 物体的四个点
        ctx.rotate(2 * Math.PI / nb_fig); //表示1/nb_fig分之一个圆周，也可写成 Math.PI 表示180度
        ctx.closePath(); //画图结束
        ctx.stroke();

        count++;
        if (count == nb_fig) {
            clearInterval(timmer);
        }
    }
    timmer = setInterval(tracer_tourner, 100);
});
