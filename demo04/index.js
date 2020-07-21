// 联合类型
// 表示取值可以为多种类型中的一种, | 分割每个类型
var myFavoriteNumber;
myFavoriteNumber = 'kevin';
myFavoriteNumber = 7;
// 联和类型只能访问他们共有的属性和方法，如toString
function getLength(something) {
    // return something.length;    // 类型number不存在属性
    return something.toString();
}
