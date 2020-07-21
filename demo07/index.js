// 函数的类型
// 声明一个函数，参数和返回值都必须为number类型。
function sum(x, y) {
    return x + y;
}
// 函数表达式写法
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source == subString;
};
// 可选参数 ?
// 可选参数后面不允许再出现必需参数了：
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + '' + lastName;
    }
    else {
        return firstName;
    }
}
// 参数默认值
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + lastName;
}
// 剩余参数  rest 参数只能是最后一个参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
    console.log(array);
}
;
var a = [];
push(a, 1, 2, 3, 4, 5);
