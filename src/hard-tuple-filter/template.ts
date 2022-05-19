type FilterOut<T extends any[], F, Res extends any[] = []> 
  = T extends [infer L, ...infer Rest]
    ? [L] extends [F]
      ? FilterOut<Rest, F, Res>
      : FilterOut<Rest, F, [...Res, L]>
    : Res