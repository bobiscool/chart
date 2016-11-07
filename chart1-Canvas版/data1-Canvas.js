/**
 * Created by wuyiping on 16/11/6.
 */
var OLD_DATA = [{
    name: '河南营业厅',
    x:0,
    Wcc: '10',
    Zll: '20',
    Cc: '60',
    Wccpx: 0,
    Zllpx: 0,
    Ccpx: 0,
    tgWcc: 0,
    tgZll: 0,
    tgCc: 0
},
    {
        name: '河北营业厅',
        x:0,
        Wcc: '14',
        Zll: '25',
        Cc: '45',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '南昌营业厅',
        x:0,
        Wcc: '14',
        Zll: '13',
        Cc: '23',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '广西营业厅',
        x:0,
        Wcc: '19',
        Zll: '22',
        Cc: '58',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '广东营业厅',
        x:0,
        Wcc: '9',
        Zll: '20',
        Cc: '67',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '福建营业厅',
        x:0,
        Wcc: '8',
        Zll: '27',
        Cc: '45',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '青海营业厅',
        x:0,
        Wcc: '23',
        Zll: '10',
        Cc: '25',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '宁夏营业厅',
        x:0,
        Wcc: '9',
        Zll: '10',
        Cc: '30',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '西藏营业厅',
        x:0,
        Wcc: '9',
        Zll: '20',
        Cc: '31',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '新疆营业厅',
        x:0,
        Wcc: '25',
        Zll: '26',
        Cc: '27',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '湖北营业厅',
        x:0,
        Wcc: '16',
        Zll: '24',
        Cc: '49',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '四川营业厅',
        x:0,
        Wcc: '10',
        Zll: '20',
        Cc: '50',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '山东营业厅',
        x:0,
        Wcc: '4',
        Zll: '21',
        Cc: '60',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '安徽营业厅',
        x:0,
        Wcc: '11',
        Zll: '22',
        Cc: '40',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    },
    {
        name: '湖南营业厅',
        x:0,
        Wcc: '17',
        Zll: '18',
        Cc: '56',
        Wccpx: 0,
        Zllpx: 0,
        Ccpx: 0,
        tgWcc: 0,
        tgZll: 0,
        tgCc: 0
    }];


var data1 = [{
    name: '河南营业厅',
    x:0,
    Wcc: '10',
    Zll: '20',
    Cc: '60'
},
    {
        name: '河北营业厅',
        x:0,
        Wcc: '14',
        Zll: '25',
        Cc: '45'

    },
    {
        name: '南昌营业厅',
        x:0,
        Wcc: '14',
        Zll: '13',
        Cc: '23'
    },
    {
        name: '广西营业厅',
        x:0,
        Wcc: '19',
        Zll: '22',
        Cc: '58'
    },
    {
        name: '广东营业厅',
        x:0,
        Wcc: '9',
        Zll: '20',
        Cc: '67'
    },
    {
        name: '福建营业厅',
        x:0,
        Wcc: '8',
        Zll: '27',
        Cc: '45'
    },
    {
        name: '青海营业厅',
        x:0,
        Wcc: '23',
        Zll: '10',
        Cc: '25'
    },
    {
        name: '宁夏营业厅',
        x:0,
        Wcc: '9',
        Zll: '10',
        Cc: '30'
    },
    {
        name: '西藏营业厅',
        x:0,
        Wcc: '9',
        Zll: '20',
        Cc: '31'
    },
    {
        name: '新疆营业厅',
        x:0,
        Wcc: '25',
        Zll: '26',
        Cc: '27'
    },
    {
        name: '湖北营业厅',
        x:0,
        Wcc: '16',
        Zll: '24',
        Cc: '49'
    },
    {
        name: '四川营业厅',
        x:0,
        Wcc: '10',
        Zll: '20',
        Cc: '50'
    },
    {
        name: '山东营业厅',
        x:0,
        Wcc: '4',
        Zll: '21',
        Cc: '60'
    },
    {
        name: '安徽营业厅',
        x:0,
        Wcc: '11',
        Zll: '22',
        Cc: '40'
    },
    {
        name: '湖南营业厅',
        x:0,
        Wcc: '17',
        Zll: '18',
        Cc: '56'
    }];


var data2 = [{
    name: '河南营业厅',
    x:0,
    Wcc: '20',
    Zll: '10',
    Cc: '30'
},
    {
        name: '河北营业厅',
        x:0,
        Wcc: '10',
        Zll: '1',
        Cc: '24'

    },
    {
        name: '南昌营业厅',
        x:0,
        Wcc: '4',
        Zll: '18',
        Cc: '36'
    },
    {
        name: '广西营业厅',
        x:0,
        Wcc: '28',
        Zll: '34',
        Cc: '19'
    },
    {
        name: '广东营业厅',
        x:0,
        Wcc: '21',
        Zll: '27',
        Cc: '46'
    },
    {
        name: '福建营业厅',
        x:0,
        Wcc: '8',
        Zll: '12',
        Cc: '25'
    },
    {
        name: '青海营业厅',
        x:0,
        Wcc: '24',
        Zll: '18',
        Cc: '19'
    },
    {
        name: '宁夏营业厅',
        x:0,
        Wcc: '10',
        Zll: '2',
        Cc: '10'
    },
    {
        name: '西藏营业厅',
        x:0,
        Wcc: '18',
        Zll: '20',
        Cc: '25'
    },
    {
        name: '新疆营业厅',
        x:0,
        Wcc: '5',
        Zll: '76',
        Cc: '17'
    },
    {
        name: '湖北营业厅',
        x:0,
        Wcc: '34',
        Zll: '29',
        Cc: '24'
    },
    {
        name: '四川营业厅',
        x:0,
        Wcc: '5',
        Zll: '19',
        Cc: '59'
    },
    {
        name: '山东营业厅',
        x:0,
        Wcc: '14',
        Zll: '1',
        Cc: '23'
    },
    {
        name: '安徽营业厅',
        x:0,
        Wcc: '78',
        Zll: '2',
        Cc: '13'
    },
    {
        name: '湖南营业厅',
        x:0,
        Wcc: '7',
        Zll: '8',
        Cc: '68'
    }];


var data3 = [
    {
        name:'长春营业厅',
        Wcc:'11',
        Zll:'2',
        Cc:'30'
    },
    {
        name:'沈阳营业厅',
        Wcc:'10',
        Zll:'31',
        Cc:'15'
    },
    {
        name:'南京营业厅',
        Wcc:'10',
        Zll:'10',
        Cc:'34'
    },
    {
        name:'黑龙江',
        Wcc:'21',
        Zll:'13',
        Cc:'32'
    },
    {
        name:'北京营业厅',
        Wcc:'10',
        Zll:'20',
        Cc:'40'
    },
    {
        name:'郑州营业厅',
        Wcc:'8',
        Zll:'7',
        Cc:'25'
    },
    {
        name:'济南营业厅',
        Wcc:'2',
        Zll:'14',
        Cc:'54'
    },
    {
        name:'太原营业厅',
        Wcc:'17',
        Zll:'12',
        Cc:'30'
    },
    {
        name:'西安营业厅',
        Wcc:'19',
        Zll:'10',
        Cc:'15'
    },
    {
        name:'武汉营业厅',
        Wcc:'2',
        Zll:'26',
        Cc:'30'
    },
    {
        name:'汉口营业厅',
        Wcc:'12',
        Zll:'14',
        Cc:'19'
    },
    {
        name:'成都营业厅',
        Wcc:'10',
        Zll:'10',
        Cc:'36'
    },
    {
        name:'绵阳营业厅',
        Wcc:'1',
        Zll:'11',
        Cc:'20'
    },
    {
        name:'合肥营业厅',
        Wcc:'5',
        Zll:'12',
        Cc:'30'
    },
    {
        name:'长沙营业厅',
        Wcc:'10',
        Zll:'5',
        Cc:'23'
    }
];