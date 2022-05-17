type IsAny<T> = IsEqual<T, any>;

// 严格相等判断
type IsEqual<A,B> = (<T>()=>T extends A?1:2) extends (<T>()=>T extends B?1:2) ?true : false

// 骚操作，任何值 AA 会是any类型
// type IsAny<T> = 'AA' extends 1&T?true:false
