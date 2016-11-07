/**
 * Created by wuyiping on 16/11/4.
 */

// 函数应该 分为三个部分
/**
 * 第一个部分  获取数据生成图形 与坐标
 * 第二个部分  用动画的形式 去布置每一个 数据 并且让他们有动画
 * 第三个部分   跟新数据  继续演绎动画
 * 首选规定 数据格式
 *
 *  显示有 Y轴数据 这个数据 给定数据中最大那个来判定 要多他百分之20%
 *  然后 确定Y周之后
 *  就得开始算X 轴每一项 所占的高度
 *   整体 80万 那么 我占了多少  我有六十万 那么 所占高度 为Y周高度乘以 3/4然后再去研究
 *   长条内部的变化   算出总奥杜 然后根据比例个长条内部元素 高度
 *   给子有一个transation动画那就行了
 *
 *   这些都是提前计算出来
 *   然后在布置的时候
 *   先 将每一个  计算了他他们之间的间隔 然后 算出他们的位置
 *   然后 写一个运动函数 将他们各自运动到自己要去的那个位置 然后 callback 显示位置 设置高
 *
 *
 *   但是在点击测试之后 就不一样了
 *   测试 只需要 Y  然后立即布置到 桌面上
 *
 *   那么这里碰到一个问题
 *   那就是第一次的时候其实使用 动画效果的
 *   但是点级之后就没有动画效果了
 *
 *
 *   说明动画效果 要在第一次之后全部取消
 *
 *   而计算那一坨   是需要重新封装
 *
 *   也就是显示计算 动画  然后 点击之后是 计算 布置
 *   然后继续计算 布置
 *
 *   计算
 *   布置(名称)
 *   计算
 *   布置
 * @param arguments
 */

// var Ymax =100;//  Y轴最大值  单位万M

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

    var Obj = {};
    Obj.arr= [];
    Obj.Xlength = data&&data.length;

    for(var i in data){
        var temObj = {};
        temObj.name=makeTheWordsVertical(data[i].name);
        temObj.Wcc = data[i].Wcc;
        temObj.Zll = data[i].Zll;
        temObj.Cc = data[i].Cc;
        temObj.Wccpx = data[i].Wcc/Ymax*300;
        temObj.Zllpx = data[i].Zll/Ymax*300;
        temObj.Ccpx = data[i].Cc/Ymax*300;
        Obj.arr.push(temObj);
    }


    return Obj;
}


function setChart(Obj) {
    /*
     创建 X轴
     */
    var TheWidth = SetXtitle(Obj.Xlength);
    var temArr = [];

    for(var i=0;i<Obj.Xlength;i++){
        //创建X轴标题
        var Oxtitle = document.createElement('span');
        var Arr = CreateHisto();
        Arr.push(Oxtitle);
        temArr.push(Arr);
        Oxtitle.className = 'Oxtitle';
        Oxtitle.style.width = TheWidth+'px';
        Oxtitle.innerHTML = Obj.arr[i].name;
        Oib.appendChild(Oxtitle);
        var target1 = Oxtitle.offsetLeft+(5+TheWidth)*(i);
        var target2 = Arr[0].offsetLeft+(5+TheWidth)*(i);
        console.log(target1);
        Xmove(Oxtitle,target1,((5+TheWidth)/10),'');

        //创建柱状图
        Arr[0].style.width = TheWidth+'px';


        (function(Arr,i){Xmove(Arr[0],target2,((5+TheWidth)/10),function () {
             AnimateHisto(Arr,Obj.arr[i]);
         })})(Arr,i);

    }

    return temArr;
}

function SetXtitle(length) {
    return parseInt((550-5*length)/length);
}

function makeTheWordsVertical(string) {//让文字竖排
    return string.split('').join('<br>');
}


function Xmove(Obj,target,speed,callback) {//X轴方向上面的运动//有隐患
   var speed=  Obj.offsetLeft<target?speed:-speed;
    var TemTimer = setInterval(function(){
        if(Obj.offsetLeft<target&&speed>0){
            Obj.style.left =Obj.offsetLeft+ speed+'px';
        }else {
            console.log(target+'----'+Obj.style.left);
            Obj.style.opacity= 1;
            callback&&callback();
            clearInterval(TemTimer);
        }

    },10);
}

function CreateHisto(){
    var Bar = document.createElement('div');
    console.log(Bar);
    var Zll = document.createElement('div');
    var Wcc = document.createElement('div');
    var Cc = document.createElement('div');
    Bar.className = 'Bar';
    Cc.className = 'Cc';
    Wcc.className = 'Wcc';
    Zll.className = 'Zll';
    var Arr = [Bar,Cc,Zll,Wcc];
    Bar.appendChild(Zll);
    Bar.appendChild(Cc);
    Bar.appendChild(Wcc);
    Ogird.appendChild(Bar);

    return Arr;

}

function AnimateHisto(Arr,Obj) {
    console.log(Obj);
    Arr[1].style.height = Obj.Ccpx+'px';
    Arr[2].style.bottom = Obj.Ccpx+'px';
    Arr[2].style.height = Obj.Zllpx+'px';
    Arr[3].style.bottom = Obj.Ccpx+Obj.Zllpx+'px';
    Arr[3].style.height = Obj.Wccpx+'px';
}

function FlyY(Ymax) {
    //根据Ymax 来确定 坐标轴
    var temNum = Ymax/4;
    for(var i =0;i<5;i++){
        AYtitle[i].innerHTML = temNum*i+'万M';
        AYtitle[i].style.bottom = 70+75*i +'px';
        AYtitle[i].style.opacity = 1;
    }

}

function FlyLabel() {
      for(var i=0;i<3;i++){
          ALabel[i].style.left = 120+200*i+'px';
          ALabel[i].style.opacity = 1;
      }
}