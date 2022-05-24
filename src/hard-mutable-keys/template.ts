// 可变的键
// type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
// type MutableKeys<T> = {
//   [K in keyof Required<T>]: IsEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? never : K
// }[keyof T];

import { Equal } from "@type-challenges/utils";

type MutableKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never