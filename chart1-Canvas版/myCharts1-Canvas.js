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



function SevenAngleStart(Arr,Ymax) {
    /*根据数据 柱状图*/
    HOW_MANY_I_DRAW =[];
    frontContext.save();
    frontContext.clearRect(0, 0, 800, 600);
    for (var i = 0; i < Arr.length; i++) {
        //判断方向
       var DrecArr=WhoNeedToChange(OLD_DATA[i],Arr[i]);
        /*这个地方该怎么绘制
          各自绘制 各自的?
          那么这个地方应该是我修改参数的地方
        * */
        // console.log(DrecArr);
        if (DrecArr[0]==0&& DrecArr[1]==0&&DrecArr[2]==0) {
            DrawHisto(Arr[i], frontContext);
        } else {
           Arr[i].tgCc+=DrecArr[0];
           Arr[i].tgWcc+=DrecArr[1];
           Arr[i].tgZll+=DrecArr[2];
            DrawHisto(Arr[i], frontContext);
        }
    }

    DrawTtile(frontContext,Ymax,Arr);
    frontContext.restore();

}

function DrawHisto(histoData, context) {

    var tgWccpx = histoData.tgWcc;
    var tgZllpx = histoData.tgZll;
    var tgCcpx = histoData.tgCc;
    var x = histoData.x;
    context.beginPath();
    context.fillStyle = "#00C0E0";
    context.fillRect(x,500,40,tgCcpx);
    context.fillStyle = "#006091";
    context.fillRect(x,500+tgCcpx,40,tgZllpx);
    context.fillStyle = "#003050";
    context.fillRect(x,500+tgCcpx+tgZllpx,40,tgWccpx);

}


function DrawTtile(context,Ymax,Arr) {
    // 绘制标题 动画
    if((TITLE_TICK.n<50)&&!TITLE_TICK.onoff){
        for(var i =0;i<5;i++){
            context.beginPath();
            context.font="20px bold";
            context.fillStyle = "#0081FB";
            context.fillText((Ymax*i)/4+'万M',80,500-(TITLE_TICK.n*((100*i)/50)));

        }
        context.save();
        for(i=0;i<Arr.length;i++){

            context.font="20px";
            context.fillStyle = "rgba(255,255,255,"+ UseIandN(i,TITLE_TICK.n)+")";//逐渐显示出来
            for(var j =0;j<Arr[i].name.length;j++){
                context.fillText(Arr[i].name.charAt(j),160+TITLE_TICK.n*((40*i)/50),520+20*j);// 保证竖向绘制字体
            }

        }
        context.restore();

        TITLE_TICK.n++;

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

        }
        context.restore();
        context.stroke();
    }

}


function DrawTrangleAnimation(Datapx,func,Ymax) {
    /*执行动画函数*/

    ANIMATION_TIMER1 = setInterval(function () {

        func(Datapx,Ymax);
        if (HOW_MANY_I_DRAW.length == 7) {//如果全部绘制完毕  就 关闭定时器
            console.log('绘制完毕');
            Obutton2.disabled = false;
            Obutton1.disabled = false;
            clearInterval(ANIMATION_TIMER1);
        }

    }, 50);

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

function SevenAngleMove(Arr,Ymax) {
    /*根据数据 画出七个 三角形*/
    HOW_MANY_I_DRAW =[];
    frontContext.save();
    frontContext.clearRect(0, 0, 800, 600);

    for (var i = 0; i < Arr.length; i++) {
        //判断方向
        var Drec = DrawDirection(OLD_DATA[i].height,Arr[i].valuePx);
        var temNum = (OLD_DATA[i].n-Arr[i].valuePx)/10;
        if(Drec>0&&temNum>0){
            temNum = temNum<1?1:temNum;
            DrawTrangle(OLD_DATA[i], frontContext);
            OLD_DATA[i].n-=temNum;
        } else if(temNum<=0&&Drec<=0) {
            temNum = temNum>-1?-1:temNum;
            DrawTrangle(OLD_DATA[i], frontContext);
            OLD_DATA[i].n-=temNum;
        }else {
            HOW_MANY_I_DRAW.push(OLD_DATA[i]);
            DrawTrangle(OLD_DATA[i], frontContext);
            OLD_DATA[i].height = Arr[i].valuePx;

        }
    }


    DrawTtile(frontContext,Ymax);
    frontContext.restore();
}

function WhoNeedToChange(OLD,NEW) {
    var temArr = [];
    var temArr2 = ['Ccpx','Zllpx','Wccpx'];
    for(var i in temArr2){
        // console.log(OLD[temArr2[i]]-NEW[temArr2[i]]);
        if((OLD[temArr2[i]]-NEW[temArr2[i]])>0){
            temArr.push(-1);
        }

        if((OLD[temArr2[i]]-NEW[temArr2[i]])<0){
            temArr.push(1);
        }

        if((OLD[temArr2[i]]-NEW[temArr2[i]])==0){
            temArr.push(0);
        }
    }

    console.log(temArr);
    return temArr;
}


function UseIandN(i,n) {
    //使用 i和n计算当前 透明度
    var temNum=(n*(15-i))/50>1?1:0;
    return temNum;
}