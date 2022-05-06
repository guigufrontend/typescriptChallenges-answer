type Curr<P extends any[], R>
  =P extends [infer F, ...infer Rest]
  ?(params:F)=>Curr<Rest,R>
  :R
declare function Currying<T>(
fn: T
): T extends (...argv: infer A) => infer R ? Curr<A, R> : never