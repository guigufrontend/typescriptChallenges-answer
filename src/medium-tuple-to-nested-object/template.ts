
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? {
    [K in F as F extends string?F:never]:TupleToNestedObject<R,U>
  } 
  :U
