
type GetRequired<T> = {
  [K in keyof T as K extends string
    ?Pick<T,K>extends Required<Pick<T,K>>?K:never
    :never]:T[K]
}
