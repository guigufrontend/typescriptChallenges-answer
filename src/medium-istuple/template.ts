type IsTuple<T> = T extends readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false;


  // 注意下边的例子，number extends number 是true， number extends 1 是false
  type aa = 1 extends number?true:false

  type bb = number extends 1?true:false

  type c<T extends any[]> = T['length']
  type dd = c<[1]>