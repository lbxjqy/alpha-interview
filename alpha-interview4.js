/*
 * @Author: your name
 * @Date: 2020-05-26 15:31:54
 * @LastEditTime: 2020-05-26 16:39:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg/Users/linboxuan/vscodeProjects/demo/alpha-interview4.js
 */
// 4.连续子序列
var m = 7;
var arr = [1, 2, 4, 5, 6, 8, 0, -2, -3, -5, 3];
var temp = []
var k;

function add (arr) {
        var list = []
        var left = 0;
        var right = arr.length-1;
        while (left < right) {
            console.log(left);
            console.log(right)
            if (arr[left]+arr[right]==m){
                list.push(arr[left]);
                list.push(arr[right]);
                return list;
            }
            if (arr[left]+arr[right]>m){
                console.log(11111)
                right--;
            }
            if (arr[right]+arr[left]<m){
                left++;
            }
        }
        return list;
}

const search = (arr, count, sum) => {
    // 计算某选择情况下有几个 `1`，也就是选择元素的个数
    const n = num => {
      let count = 0
      while(num) {
        num = (num - 1) & num
        count++
      }
    //   console.log('count',count)
      return count
    }

    let len = arr.length, bit = 1 << len, res = []
    console.log('bit',bit)
    // 遍历所有的选择情况
    for(let i = 1; i < bit; i++){
      // 满足选择的元素个数 === count
      if(n(i) === count){
        let s = 0, temp = []

        // 每一种满足个数为 N 的选择情况下，继续判断是否满足 和为 M
        for(let j = 0; j < len; j++){
          // 建立映射，找出选择位上的元素
          if((i & 1 << j) !== 0) {
            s += arr[j]
            temp.push(arr[j])
          }
        }

        // 如果这种选择情况满足和为 M
        if(s === sum) {
          res.push(temp)
        }
      }
    }

    return res
  }

// console.log(add(arr))
// console.log(search(arr, 3, m))
// 上面两个方法是从google搜的，并不满足需求，还没想到方法解决