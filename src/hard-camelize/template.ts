
type Camelcase<S> = S extends `${infer L}_${infer R}` ? `${L}${Capitalize<Camelcase<R>>}` : S;

type Camelize<T> =
  T extends { [key in string]: unknown }
    ? { [K in keyof T as Camelcase<K> ]: Camelize<T[K]> }
  : T extends any[]
    ? { [K in keyof T]: Camelize<T[K]> }
    : T;