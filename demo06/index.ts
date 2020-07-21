// 数组的类型

// 「类型 + 方括号」表示法,数组的项中不允许出现其他类型。
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
let fibonacci:number[] = [1,2,3,4,5];

// 数组泛型
// 使用数组泛型（Array Generic） Array<elemType> 来表示数组
let fibonacci2: Array<number> = [1,2,3,4,5]

// any 在数组中的应用
let list: any[] = ["demo", 25, {name: 'kevin'}]