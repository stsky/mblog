/*
var aaa = [{
  a: 1,
  b: 2,
  c: 3,
  d: [{
    a: 44,
    b: 55,
    c: 66,
    d: [{
    a: 70,
    b: 80,
    c: 90,
    d: [{
    a: 71,
    b: 81,
    c: 91,
    d: []
  }]
  }]
  },{
    a: 77,
    b: 88,
    c: 99,
    d: []
  }]
},{
  a: 11,
  b: 22,
  c: 33,
  d: []
}];

// var res = aaa.map(function(q) {
//   var d = [];
//   if (q.d) d = mp(q.d);
//   return {
//     a1: q.a,
//     a2: q.b,
//     a3: q.c,
//     a4: d
//   };
// });

function mp(dd) {
  return dd.map(function (m) {
    var d = [];
    if (m.d) d = mp(m.d);
    return {
      a1: m.a,
      a2: m.b,
      a3: m.c,
      d4: d
    };
  });
}
var res = mp(aaa);
console.log(res[0].d4[0].d4[0]);
*/
// var str = '1'.split(',');
// console.log(str);

// var str = '第1集 齐天大圣（一）话说在一千五百年前，在三十三重天天外天的地方，有一座灵山。如来佛祖就住在灵山上的大雷音寺，每一年佛祖都会举行一次唱经大会。有一年，如来座下大弟子金蝉子在唱经大会睡着，因而被贬下凡历三三之劫，九九之难，重读我经，遇千艰万难，方能重归本位。西游记故事由此展开；二郎神和李靖、哪吒带领十万天兵天将前往花果山抓拿妖猴。二郎神和悟空斗法好几个回合也不能伤悟空分毫，但是托塔李天王趁悟空和二郎神斗法之时将花果山的猴子猴孙皆收到了玲珑宝塔之中。孙悟空只好跟随他们上天宫受罚；太上老君把孙悟空关进了八卦丹炉想要将他和其他仙丹一起炼，没想到弄巧成拙让孙悟空吃了太上老君炼了三百年的太白金丹还让他炼成了火眼金睛。悟空开始大闹天宫；悟空前去找寻玉帝遇到如来，没想到被如来佛祖挥掌一拍，压在了五指山下。悟空在五指山下回想起自己小时候的事...在东胜神州有一块仙石，吸收日月精华天地灵气变成仙胎。终于，在一个日月交辉的日子里，悟空出世了。巨猴四处破坏，天蓬元帅下凡斩妖猴。天蓬元帅斩下悟空的尾巴，悟空变回一只小猴，天蓬元帅正欲杀之，观音大士前来告知巨猴已被消除戾气，不会再为祸人间，而且天蓬元帅和悟空还有一段宿世缘分。天蓬元帅被封为天河元帅，掌管十万天兵。悟空变成小猴后四处跑四处跳，带领一众猴子来到水帘洞内并成为大王。悟空目睹一只老猴子的死去想要找到神仙学习长生不老之术；天蓬元帅获封天河元帅，一众仙人前来元帅府祝贺，突然有一女子仓皇逃到元帅府，后有弓箭追赶，吴刚救下此女。王母娘娘驾到询问事情缘由，原来此女叫嫦娥，是洛阳人士。天生神力的后羿射下天上九个太阳被拥立为皇帝，后羿荒淫无道，硬抢嫦娥作为妃嫔。嫦娥为了逃离后羿的魔爪只好偷吃下两颗仙丹升天。王母赦免嫦娥，并使其位列仙班；回到花果山这边，悟空想到用椰壳作舟来到对岸。悟空把变法戏的街头卖艺者当成是神仙想要学习仙术，卖艺者发现悟空能学人们说话把悟空带到集市上表演。众人都想得到悟空，悟空被人们追赶。观音显灵，令一只驴驮着悟空飞天离去。';

// console.log(str.substring(0, 310)+'……');
/*
var markdown = require( "markdown-it" )();
md_content = "```js \nvar a = 2, b = 3;\nvar c = a + b;\n```";
html_content = markdown.render( md_content );

console.log(html_content);*/


/*
var s=['192.168.1.1','192.168.1.2','192.168.1.3'];
var u=s.indexOf('192.168.1.2');
var d=s.indexOf('192.168.1.5');
console.log(u);
console.log(d);*/



/*var s=['192.168.1.1','192.168.1.2','192.168.1.3'];
var u=s.shift();
console.log(s);*/
// var ret = [{
//   name: '全部',
//   id: null,
//   children: [{
//       name: 'a',
//       id: 1,
//       pid: null,
//       children: [{
//         name: 'a1',
//         id: 11,
//         pid: 1,
//         children: null
//       }]
//     },{
//       name: 'b',
//       id: 2,
//       pid: null,
//       children: null
//     }
//   ]
// }];
// var list = [
//   {
//     id:1,
//     name : 'a',
//     pid : null
//   },
//   {
//     id:2,
//     name : 'b',
//     pid : null
//   },
//   {
//     id:11,
//     name : 'a1',
//     pid : 1
//   },
//   {
//     id:12,
//     name : 'b1',
//     pid : 2
//   }
// ];


// var ret = [{
//   name: '全部',
//   id: null,
//   children: recursion(list)
// }];
// console.log(ret);


// function recursion(list,children) {
//   if (arguments.length === 1) {
//     var rets = [];
//     list.forEach(function (li) {
//       if (li.pid === null) {
//         li.children = [];
//         rets.push(li);
//       } else {
//         recursion(rets,li);
//       }
//     });
//     return rets;
//   }
//   for (var i = 0; i < list.length; i++) if (list[i].id === children.pid) return list[i].children.push(children);
// }






