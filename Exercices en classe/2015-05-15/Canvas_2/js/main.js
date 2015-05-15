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

    ctx.beginPath();
    ctx.moveTo(0,0);  //画笔开始处
    ctx.lineTo(100,0);  // 从0画到100处
    ctx.lineTo(100,175);
    ctx.lineTo(0,0);
    ctx.stroke();
});