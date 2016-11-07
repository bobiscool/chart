/**
 * Created by mac on 16/11/6.
 */
/**
 * Created by mac on 16/11/4.
 */

// 函数应该 分为三个部分
/**
 * 第一个部分  获取数据生成图形 与坐标
 * 第二个部分  用动画的形式 去布置每一个 数据 并且让他们有动画
 * 第三个部分   跟新数据  继续演绎动画
 * @param arguments
 *
 * 先是 画出舞台
 *
 * 然后出场动画
 *
 * 然后是根据数据 绘制图像  而且还要有动画
 *
 * 然后 是 canvas 点击事件
 *
 */
/*我的动画结构 就是
 显示 数据出场 动画
 一个定时器
 绘制图表
 如果其中一个 三角 绘制完成 那就开启 小标题 绘制模式
 这里有一个动画
 但这个动画 最好在同一个定时器下完成
 因为，如果这里冲开一个定时器
 就会一个小标题的绘制 就会clear 所有
 我如何记住，当时所有的状态
 所以，小标题的绘制必须属于全部的绘制当中
 也就是  当 绘制完三角之后 就开始 打开小标题绘                                  制开关，(其实在每次执行的时候,都回去判断小标题开关,只有小标题开关打开之后,才       会选择绘制,绘制完标题,才会绘制一个true,)
 但在这一次绘制完成后,标题就不再消失了,所以这里的标题绘制要有两种模式
 一种是出场模式,一种是跟随运动模式
 所以最好在原来的数据上,添加smallTitle:"0"   不绘制
 "1"   绘制出场动画
 "2"    绘制跟随动画
 那么即便是出场和跟随,动画里面必须的数据是,标题,所以各处的数据也必须要有标题
 绘制title
 绘制完成后
 关闭定时器
 */


function DrawXYaxis(context) {
    // 绘制坐标轴
    context.fillStyle = '#201111';
    context.fillRect(0, 0, 800, 600);//画出背景
    context.fillStyle = '#102031';
    context.fillRect(160, 100, 600, 400);
    context.fillStyle = '#201111';
    for (var i = 1; i <= 15; i++) {
        context.fillRect(160 + 50 * i, 100, 10, 400);//画栅栏
    }

    for (i = 0; i <= 20; i++) {
        context.fillRect(160, 100 + 20 * i, 600, 2);//画栅栏
    }

    var temArr = ['到达','发出','在场'];
    for (i = 0; i <3; i++) {
        context.save();
        context.font = "30px bold";
        context.fillStyle = "white";
        context.fillText(temArr[i],220+200*i,530);
        context.restore();
    }

    //开始画 五个小圆点
    context.beginPath();
    context.fillStyle = '#F88863';
    for (i = 0; i < 5; i++) {
        context.arc(150, 100 + i * 100, 3, 0, 360);
        context.fill();
    }
    //开始绘制标题  并且添加运动
}

function SevenAngle(Arr) {
    /*根据数据 画出七个 三角形*/
    HOW_MANY_I_DRAW =[];
    frontContext.save();
    frontContext.clearRect(0, 0, 800, 600);
    for (var i = 0; i < Arr.length; i++) {
        //判断方向
        var Drec = DrawDirection(OLD_DATA[i].height,Arr[i].height);


        if ((Arr[i].n < Arr[i].height) && !Arr[i].overDraw) {
            var temNum = ((Arr[i].height - Arr[i].n) / 10);
            temNum = temNum > 1 ? temNum : 1;
            DrawTrangle(Arr[i], frontContext);
            Arr[i].n += temNum;

        } else {
            // Arr[i].overDraw = true;
            Arr[i].smallTitle = 1;
            DrawTrangle(Arr[i], frontContext);
            // 如果 绘制完成  就 push
        }
    }



    DrawTtile(frontContext,100);
    frontContext.restore();

}

function DrawTrangle(TrangleData, context) {
    /**
     * 绘制 三角形 并且 运动
     * 三角 的颜色有三种  这个根据数据的不同 作区分
     * 大数据  三种   蓝 红  黄
     *
     * data
     *     dd:
     *     fc:
     *     zc:
     *
     *
     * Datapx [
     *     {
     *     x,
     *     height,
     *     color,
     *     n
     *     }
     *     {}
     *     {}
     *
     *     {}
     *     {}
     *     {}
     *
     *     {}
     *     ]
     *
     *
     * ]
     *
     *  数据给出之后 先计算 也是计算各自 与Ymax之间的像素比例
     *  然后 动态的绘制到 画布上面(不过这个地方有一个问题  我只是 三角形在变化  clearReact好像是清除 全部)
     */

    var x = TrangleData.x;
    var height = TrangleData.n;
    var color = TrangleData.color;
    context.save();
    context.fillStyle = color;
    context.strokeStyle = color.replace(/,0\.\d+/, ',0.9');
    context.lineWidth = 2;
    context.beginPath();
    context.lineTo(x, 500);
    context.lineTo(x + 100, 500);
    context.lineTo(x + 50, 500 - height);
    context.fill();
    context.closePath();
    context.stroke();

    // 画圆
    context.beginPath();
    context.strokeStyle = color.replace(/,0\.\d+/, '1');// 转译 颜色
    // console.log(color.replace(/,0\.\d+/,',1'));
    context.lineWidth = 1;
    context.arc(x + 50, 500 - height, 5, 0, 360);
    context.stroke();
    //我觉得 这里 可以 用于判断  是否可以绘画 tltle
    DrawTrangleTitle(TrangleData,context);
}
function DrawTtile(context,Ymax) {
    // 绘制标题 动画
    if((TITLE_TICK.n<50)&&!TITLE_TICK.onoff){
        for(var i =0;i<5;i++){
            context.beginPath();
            context.font="20px bold";
            context.fillStyle = "#0081FB";
            context.fillText((Ymax*i)/4+'万M',80,500-(TITLE_TICK.n*((100*i)/50)));
            TITLE_TICK.n++;
        }
        context.stroke();
    }else{
        TITLE_TICK.onoff = true;
        for( i =0;i<5;i++){
            context.beginPath();
            context.font="20px bold";
            context.fillStyle = "#0081FB";
            context.fillText((Ymax*i)/4+'万M',80,500-100*i);
        }
        context.stroke();
    }

}
function DrawTrangleAnimation(Datapx) {
    /*执行动画函数*/

    ANIMATION_TIMER1 = setInterval(function () {

        SevenAngle(Datapx);
        if (HOW_MANY_I_DRAW.length == 7) {//如果全部绘制完毕  就 关闭定时器
            console.log('绘制完毕');
            clearInterval(ANIMATION_TIMER1);

        }

    }, 50);

}


function DrawDirection(OldHeight, NewHeight) {
    //找到绘画方向
    var temNum = OldHeight > NewHeight ? -1 : 1;
    return temNum;
}


function DrawTrangleTitle(TrangleData,context) {
    var x = TrangleData.x;
    var height = TrangleData.height;

    if(TrangleData.smallTitle==0){
        return false;
    }

    if(TrangleData.smallTitle==1){
        // 绘制 标题出场
        TrangleData.ns+=5;
        context.lineWidth = 1;
        context.strokeStyle = '#8CDCFC';
        context.beginPath();
        context.lineTo(x+50,500-height);
        if(TrangleData.ns<20){
            context.lineTo(x+50+TrangleData.ns,500-height-TrangleData.ns);
        }else{
            TrangleData.ns=20;
            TrangleData.ns2++;
            context.lineTo(x+50+TrangleData.ns,500-height-TrangleData.ns);
            context.lineTo(x+100,500-height-20);
            //开始 画矩形title
            if(TrangleData.ns2>=10){
                TrangleData.ns2=10;
                context.save();
                context.font = "20px";
                context.fillStyle="white";
                context.fillText(TrangleData.name,x+110,500-height-15);
                context.restore();
                TrangleData.overDraw = true;
                TrangleData.smallTitle = 2;
                HOW_MANY_I_DRAW.push(TrangleData);
            }
            context.rect(x+100,500-height-30,TrangleData.ns2*8,TrangleData.ns2*2);
        }
        context.stroke();
        // 绘制完成 将OLD_ARRAY里面的smallTittle置为2  所以穿的之应该是obj
    }



    if(TrangleData.smallTitle==2){
        // 绘制 标题跟随运动
        context.save();
        context.font = "20px";
        context.fillStyle="white";
        context.fillText(TrangleData.name,x+110,500-height-15);
        context.restore();
        context.rect(x+100,500-height-30,TrangleData.ns2*8,TrangleData.ns2*2);

    }
}


function CalculateData(data,Ymax) {
    for(var i in data){
        data[i].valuePx  = (data[i].value/Ymax)*400;
    }
}

/*跟随动画 是跟 原来的数据从对比 如果 大于原来的 那么 就是 正向增加  如果下元原来的数据 那就是 反向 减少   首先 拿到 数据之后
 * 要先计算 比例 像素
 * 然后与原来的 作比较
 * 如果  如果小于他 就做向下运动
 * 如果大于他 就做向上运动
 * 由于此时牵扯到运动  所以肯定又会有
 * 运动
 * 其中  大家的时钟 是同一个  还是绘制完成之后 才关闭时钟
 * 其次 记录帧数的还是n 和ns
 *
 *
 *
 * */
