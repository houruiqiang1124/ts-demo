// 对象的类型——接口

// 1. 对「对象的形状（Shape）」进行描述。接口一般首字母大

interface Person {
    name: string,
    age: number
}
let tom: Person = {     // tom 的形状必须和接口 Person 一致
    name: 'kevin',
    age: 25
}

// 2. 可选属性 ?,  这时仍然不允许添加未定义的属性：
interface Person2 {
    name: string,
    age?: number
}
let tom2: Person2 = {
    name: 'kevin'
}

// 3. 只读属性  readonly 
interface Person3 {
    readonly id: number,
    name: string
}
let tom3: Person3 = {
    id: 89757,
    name: 'kevin'
}
tom3.name = 'Jerry';
// tom3.id = 33;     id是只读属性，不可更改
