type MyGetRequired<T> = {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? K : never]: T[K] 
}
type RequiredKeys<T> = keyof MyGetRequired<T>