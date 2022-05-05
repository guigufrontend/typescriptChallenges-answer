import type { Equal, Expect } from '@type-challenges/utils'

type IsIncludes<T extends any[], W> = T extends [infer F, ...infer R] 
  ? Equal<F, W> extends true
    ? true
    : IsIncludes<R, W>
  : false;

type Unique<T extends any[], S extends any[] = []> = 
  T extends [infer F, ...infer R] 
    ? IsIncludes<S, F> extends false
      ? Unique<R, [...S, F]>
      : Unique<R, S>
    : S;
