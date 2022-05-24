type Merge<T> = {
  [K in keyof T]:T[K]
}

type Assign<
  T extends Record<string, unknown>, 
  U extends any[]
> = U extends [infer F,...infer L]
  ? F extends Record<string,unknown>
    ? Assign<Omit<T,keyof F>& F,L >
    : Assign<T,L>
  :Merge<T>