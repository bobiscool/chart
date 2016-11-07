/**
 * Created by wuyiping on 16/11/6.
 */

/*
* 动画的绘制
*
* 首先是
* title的布置动画
* 以及 柱状图
* 横向title的布置动画
*
* 数据 方面 还是 以一种 新数据 与旧数据的对比的形式
* 那么需要绘制的地方 有
 * 各自的小彩条
*
*
* */


function DrawXYaxis(context) {
    // 绘制坐标轴
    context.fillStyle = '#201111';
    context.fillRect(0, 0, 800, 600);//画出背景
    context.fillStyle = '#102031';
    context.fillRect(160, 100, 600, 400);
    context.fillStyle = 'rgba(0,129,251,0.5)';
    for (var i = 1; i <= 20; i++) {
        context.fillRect(160 + 30 * i, 100, 1, 400);//画Y
    }

    for (i = 0; i <= 20; i++) {
        context.fillRect(160, 100 + 20 * i, 600, 1);//画X
    }

    //开始画 五个小圆点
    context.beginPath();
    context.fillStyle = '#F88863';
    for (i = 0; i < 5; i++) {
        context.arc(150, 100 + i * 100, 3, 0, 360);
        context.fill();
    }

}



function DrawHistoAnimation(Datapx,func,Ymax) {
    /*执行动画函数*/

    ANIMATION_TIMER1 = setInterval(function () {

        func(Datapx,Ymax);
        if (HOW_MANY_I_DRAW.length == 15) {//如果全部绘制完毕  就 关闭定时器
            console.log('绘制完毕');
            Obutton2.disabled = false;
            Obutton1.disabled = false;
            clearInterval(ANIMATION_TIMER1);
        }

    }, 50);

}


function HistoStart(Arr,Ymax) {
    /*根据数据 柱状图*/
    HOW_MANY_I_DRAW =[];
    frontContext.save();
    frontContext.clearRect(0, 0, 800, 600);
    DrawTtile(frontContext,Ymax,Arr);
    frontContext.restore();

}


function DrawHisto(x,y,context,h,color) {

     // console.log(x);
    context.fillStyle = color;
    context.fillRect(x,y,30,h);
    context.fill();
}

function DrawAllHisto(Arr) {

    for (var i = 0; i < Arr.length; i++) {

        var speedCc = EqualsOne((Arr[i].Ccpx - Arr[i].tgCc)/5);
        var speedWcc = EqualsOne((Arr[i].Wccpx - Arr[i].tgWcc)/5);
        var speedZll =EqualsOne((Arr[i].Zllpx - Arr[i].tgZll)/5);
        if(speedCc==0&&speedWcc==0&&speedZll==0){
            OLD_DATA[i].Ccpx = Arr[i].Ccpx;
            OLD_DATA[i].Wccpx = Arr[i].Wccpx;
            OLD_DATA[i].Zllpx = Arr[i].Zllpx;
            HOW_MANY_I_DRAW.push(Arr[i]);
            console.log('OK');
        }

        Arr[i].tgCc +=speedCc;
        Arr[i].tgWcc +=speedWcc;
        Arr[i].tgZll +=speedZll;
        DrawHisto(Arr[i].x,500-Arr[i].tgCc,frontContext,Arr[i].tgCc,"#F0FFC9");
        DrawHisto(Arr[i].x,500-Arr[i].tgCc-Arr[i].tgWcc,frontContext,Arr[i].tgWcc,"#A9DA88");
        DrawHisto(Arr[i].x,500-Arr[i].tgCc-Arr[i].tgWcc-Arr[i].tgZll,frontContext,Arr[i].tgZll,"#62997A");

    }
}

function DrawTtile(context,Ymax,Arr) {
    // 绘制标题 动画
    if((TITLE_TICK.n<=50)&&!TITLE_TICK.onoff){
        for(var i =0;i<5;i++){
            context.beginPath();
            context.font="20px bold";
            context.fillStyle = "#0081FB";
            context.fillText((Ymax*i)/4+'万M',80,500-(TITLE_TICK.n*((100*i)/50)));

        }
        context.save();
        for(i=0;i<Arr.length;i++){

            context.font="20px";
            context.fillStyle = "rgba(255,255,255,"+ TITLE_TICK.n/50+")";//逐渐显示出来
            for(var j =0;j<Arr[i].name.length;j++){
                context.fillText(Arr[i].name.charAt(j),160+TITLE_TICK.n*((40*i)/50),520+20*j);// 保证竖向绘制字体
            }

            Arr[i].x = 160+TITLE_TICK.n*((40*i)/50);

        }
        context.restore();
        context.save();
        for(i=0;i<3;i++){
            context.font="20px bold";
            context.fillStyle = "rgba(255,255,255,"+ TITLE_TICK.n/50+")";//逐渐显示出来
            context.fillText(LABEL[i].name,240+TITLE_TICK.n*((150*i)/50),30);
            context.fillStyle = LABEL[i].color+ TITLE_TICK.n/50+")";//逐渐显示出来
            context.fillRect(190+TITLE_TICK.n*((150*i)/50),15,40,20);
        }
        context.restore();

        TITLE_TICK.n+=2;

        context.stroke();
    }else{
        TITLE_TICK.onoff = true;
        for( i =0;i<5;i++){
            context.beginPath();
            context.font="20px bold";
            context.fillStyle = "#0081FB";
            context.fillText((Ymax*i)/4+'万M',80,500-100*i);
        }
        context.save();
        for(i=0;i<Arr.length;i++){
            context.font="20px";
            context.fillStyle = 'rgba(255,255,255,1)';
            for( j =0;j<Arr[i].name.length;j++){
                context.fillText(Arr[i].name.charAt(j),160+40*i,520+20*j);// 保证竖向绘制字体
            }
            Arr[i].x = 160+40*i;
        }
        context.save();
        for(i=0;i<3;i++){
            context.font="20px bold";
            context.fillStyle = "rgba(255,255,255,"+ TITLE_TICK.n/50+")";//逐渐显示出来
            context.fillText(LABEL[i].name,240+(150*i),30);
            context.fillStyle = LABEL[i].color+ TITLE_TICK.n/50+")";//逐渐显示出来
            context.fillRect(190+(150*i),15,40,20);

        }
        context.restore();

        DrawAllHisto(Arr);
        context.restore();
        context.stroke();
    }



}


function Calculate(data,Ymax) {
    /**
     * 其实Y不用计算 只是在点击按钮的时候 布置到 那个位置上
     * 需要计算的 首先拿到数据之后 然后 数据的个数
     * 算出每一个数据 需要 布置的位置
     * 然后 每一个数据 对应的 里面的小数据 继续计算出小数句对应的 宽高
     *
     * data 格式 {
     *    name: 名字
     *    Wcc:  未出仓
     *    Zll: 滞留量
     *    Cc:  出仓
     *
     * }
     */

var temArr =[];


    for(var i in data){
        var temObj = {};
        temObj.name=data[i].name;
        temObj.Wcc = data[i].Wcc;
        temObj.Zll = data[i].Zll;
        temObj.Cc = data[i].Cc;
        temObj.Wccpx = data[i].Wcc/Ymax*400;
        temObj.Zllpx = data[i].Zll/Ymax*400;
        temObj.Ccpx = data[i].Cc/Ymax*400;
        temObj.tgWcc = OLD_DATA[i].Wccpx;
        temObj.tgZll = OLD_DATA[i].Zllpx;
        temObj.tgCc= OLD_DATA[i].Ccpx;
        temArr.push(temObj);
    }

    // console.log(temArr);
    return temArr;
}


function EqualsOne(a) {// 误差判断  如果很接近了 那就直接停止运动
    if(a<0&&a>-1&&a<-0.1){
        a=-1;
    }

    if(a<0&&a>-1&&a>=-0.1){
        a=0;
    }

    if(a>0&&a<1&&a>0.1){
        a=1;
    }

    if(a>0&&a<1&&a<=0.1){
        a=0;
    }
    return a;
}

