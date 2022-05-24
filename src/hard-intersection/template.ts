// 重复类型

// type getAllUnion<T> = T extends [infer L, ...infer R]
//   ? getAllUnion<L> | getAllUnion<R>
//   : T extends []
//     ? never
//     : T;

// type Intersection<T, K = getAllUnion<T>> = T extends [infer L, ...infer R]
//   ? Intersection<R, Extract<K, getAllUnion<L>>>
//   : K;


  type Intersection<T extends unknown[]> = T extends [infer F, ...infer R]
  ? (F extends unknown[] ? F[number] : F) & Intersection<R>
  : unknown