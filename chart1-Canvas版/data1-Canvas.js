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

