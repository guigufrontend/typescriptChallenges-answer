type ConstructTuple<L extends number, N extends unknown[] = []> 
  = L extends N['length']?N:ConstructTuple<L, [...N,unknown]>