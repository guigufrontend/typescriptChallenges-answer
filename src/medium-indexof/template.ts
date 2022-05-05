
type IndexOf<T extends unknown[], U, N extends 1[] = []> 
  = T extends [infer F, ...infer R]
    ? F extends U 
      ? N['length']
      : IndexOf<R, U, [...N, 1]>
    :-1