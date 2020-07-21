// 原始数据类型


/**
 *  布尔值
 * 注意，使用构造函数 Boolean 创造的对象不是布尔值
 */
let isDone: boolean = false;
let isDone2: boolean = Boolean(1);
console.log(isDone, isDone2);


/**
 * 数值
 */
let decLiteral: number = 6;


/**
 * 字符串
 */
let myName: string = "kevin";
let myAge: number = 25;
let sentence = "hello my name is " + myName;


/**
 * 空值
 * 1. JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
 * 2. void 类型的变量只能将它赋值为 undefined 和 null
 */
function alertName(): void {
    alert("My name is kevin");
}
let unusable: void = undefined;


/**
 * null 和 undefined
 * 可以使用 null 和 undefined 来定义这两个原始数据类
 * 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
 */
let u: undefined = undefined;
let n: null = null;
let u_str: string = u;
let u_str1:number = undefined;