/*
 * @Author: your name
 * @Date: 2020-05-26 15:08:26
 * @LastEditTime: 2020-05-26 16:37:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/demo/alpha-interview3.js
 */
// 3.工作证问题
function duplicates(arr) {
    var newArr=[];
    arr.sort();
    for(var i =0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            newArr.push(arr[i]);
            i++;
        }
    }

    return newArr;
}

var d = new Date()
console.log(duplicates(ar))
console.log(new Date() - d)
// 给出当前 n 个号码，请找出里面重复的数字。
// 1.首先数组sort排序，遍历数组，arr[i]==arr[i+1]。目前我能想到的这种方法效率较好
// 2.遍历数组中再套用一个遍历，进行比较。这种方法效率最低
// 3.还有其他方法，但与2大同小异，效率不高