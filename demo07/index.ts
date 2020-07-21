// 函数的类型

// 声明一个函数，参数和返回值都必须为number类型。
function sum(x: number, y: number): number {
    return x + y;
}


// 函数表达式写法
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}


// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source == subString
}


// 可选参数 ?
// 可选参数后面不允许再出现必需参数了：
function buildName(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + '' + lastName;
    } else {
        return firstName;
    }
}



// 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat'):string {
    return firstName + lastName
}


// 剩余参数  rest 参数只能是最后一个参数
function push(array: any[], ...items:any[]) {
    items.forEach(item => {
        array.push(item);
    })
    console.log(array)
};
let a = [];
push(a, 1,2,3,4,5)