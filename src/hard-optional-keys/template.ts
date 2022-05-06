type MyGetOptional<T> = {
  [K in keyof T as K extends string
    ?Pick<T,K>extends Required<Pick<T,K>>?never:K
    :never]:T[K]
}
type OptionalKeys<T> = keyof MyGetOptional<T>