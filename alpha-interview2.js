/*
 * @Author: your name
 * @Date: 2020-05-26 14:25:26
 * @LastEditTime: 2020-05-26 16:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/demo/alpha-interview2.js
 */
// 2.正则表达式
const str = 'http://www.example.com/aa/name=testname&age=20&phone=8618518391866';
function parseQuery(url) {
    var queryObj={};
    // 1
    // var reg = /[&/]([^&]+)=([^&]*)/g;
    // 2
    var reg = /(\w+)=(\w+)/g;
    var querys = url.match(reg);
    for(var i in querys){
        var query = querys[i].split('=');
        // 1
        // var key=query[0].substr(1),
        // 2
        var key = query[0],
           value = query[1];
        value = value.replace(/86/g, "");
        queryObj[key]?queryObj[key] = [].concat(queryObj[key],value):queryObj[key] = value;
    }
    return queryObj;
}
console.log(parseQuery(str));
// 主要分析正则匹配
// 获取name k的正则先搁置 还没写出来，并不想用太暴力的方式获取 比如/n开始。2已解决
// 1.&/开始 kv对用=分割 86替换为空
// 2.利用=号做切入点，前后匹配字母或数字或下划线或汉字
