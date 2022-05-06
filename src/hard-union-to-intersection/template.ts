
type UnionToIntersection<U> 
= (U extends unknown 
  ? (arg: U) => unknown 
  : never) extends ((arg: infer P) => unknown) 
  ? P 
  : never;

  // 这个地方要借用函数，也就是推断出P的类型必须是U的每一种情况才能满足要求，也就是&的关系
  // 参考下面的例子，注意一个是string & number 一个是string | number
  // 当然string & number 是不可能的也就是never

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number

type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number