'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');  //???
    // ctx.translate(250, 250);  //迁移重心的位置（物体中心）
    //  ctx.rect(-100, -100, 200, 200); // 物体的四个点
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;  //用 1个 pix 的话很细，导致显色不均。
    var left = 10;
    var top = 10;

    var s0, s1, s2, s3, s4;

    spiral_0();
    function spiral_0() {
        ctx.moveTo(left, top); // sup gauche    第一个点排除之后，以后每一圈 都为4个参数
        ctx.stroke();
        s0 = setTimeout(spiral_1, 400)
    }

    function spiral_1() {
        ctx.lineTo(500 - left, top); // sup droite
        ctx.stroke();
        s1 = setTimeout(spiral_2, 400)
    }

    function spiral_2() {
        ctx.lineTo(500 - left, 500 - top); // inf droit
        ctx.stroke();
        s2 = setTimeout(spiral_3, 400);
    }

    function spiral_3() {
        ctx.lineTo(left, 500 - top); // inf gauche
        ctx.stroke();
        s3 = setTimeout(spiral_4, 400);

        if (left >= 250) {
            console.log('done');
            arreter();
        }
    }

    function spiral_4() {
        ctx.lineTo(left, top + 10); // sup gauche
        ctx.stroke();

        left += 10;
        top += 10;
        s4 = setTimeout(spiral_1, 400);
    }

    function arreter() {
        //clearTimeout(s0);
        // clearTimeout(s1);
        // clearTimeout(s2);
        clearTimeout(s3);
        // clearTimeout(s4);
    }
});