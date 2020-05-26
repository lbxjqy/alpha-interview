/*
 * @Author: your name
 * @Date: 2020-05-26 13:30:57
 * @LastEditTime: 2020-05-26 16:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Users/linboxuan/vscodeProjects/demo/alpha-interview.js
 */
// 1.对象中的循环引用
const obj = {
    a: {
    b: {
    c: {
    d: null, // 待会将指向 obj.a
    },
    },
    },
}
obj.a.b.c.d = obj.a // a->b->c->d->a 形成循环引用
// JSON.stringify(obj) // TypeError: Converting circular structure to JSON

function cycle(obj, parent) {
    // 2.1表示调用的父级数组。首次执行获取第一层对象数组，递归调用后获取父级的对象数组来做检测
    var parentArr = parent || [obj];
    // 遍历要检测的对象
    for (var i in obj) {
        // 3
        if (typeof obj[i] === "object") {
            // 4.1判断是否有循环引用，遍历父级数组与要检测的对象数组的每一项是否严格相等。
            parentArr.forEach((pObj) => {
                // 4.2如相等把值修改为equal
                if (pObj === obj[i]) {
                    obj[i] = "[eq obj]"
                }
            });
            // 5接上条注释，遍历检测完当前的对象数组，继续递归调用检测方法，并把对应取值链上的父级集合传递下去
            cycle(obj[i], [...parentArr, obj[i]])
        }
    }
    return obj;
}
console.log(cycle(obj.a));
// 1.关于对象的循环引用首先考虑到使用递归做检测
// 2.进入测试方法首先获取要检测的对象数组（2.1）
// 3.遍历要检测的对象，检测对象中每一项的类型是否为obj，意义为是否调用链最底层（3）
// 4.遍历父级数组，用父级数组的每一项与要检测的对象进行严格比较，如相等证明存在循环引用（4.1、4.2）
// 5.递归调用检测函数，判断下一级对象数组（5）