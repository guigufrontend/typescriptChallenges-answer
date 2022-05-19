type Merge<T> = {
  [P in keyof T]: T[P]
}
type DeepObjectToUniq<O extends object> = {
  [P in keyof O]: O[P] extends object
    ? DeepObjectToUniq<Merge<O[P] & { _xxx?: [O, P] }>>
    : O[P]
}