// N 是一个计数看有没有到达S
// D 是总结果
// SD是子结果， 每次N到达S之后 ，总结果D就添加一个子结果SD
type Chunk<T extends unknown[], S extends number, N extends any[]=[], D extends any[]=[],  SD extends any[]=[]> 
  = N['length'] extends S
    ? Chunk<T, S, [], [...D,SD], []>
    :T extends [infer F, ...infer R]
      ? Chunk<R, S, [...N, 1], D, [...SD, F]>
      :SD['length'] extends 0?D :[...D, SD]