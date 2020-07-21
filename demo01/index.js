// 原始数据类型
/**
 *  布尔值
 * 注意，使用构造函数 Boolean 创造的对象不是布尔值
 */
var isDone = false;
var isDone2 = Boolean(1);
console.log(isDone, isDone2);
/**
 * 数值
 */
var decLiteral = 6;
/**
 * 字符串
 */
var myName = "kevin";
var myAge = 25;
var sentence = "hello my name is " + myName;
/**
 * 空值
 * 1. JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
 * 2. void 类型的变量只能将它赋值为 undefined 和 null
 */
function alertName() {
    alert("My name is kevin");
}
var unusable = undefined;
/**
 * null 和 undefined
 * 可以使用 null 和 undefined 来定义这两个原始数据类
 * 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
 */
var u = undefined;
var n = null;
var u_str = u;
var u_str1 = undefined;
