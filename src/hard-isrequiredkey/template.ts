// type checkRequire<T, K extends keyof T> = {
//   [key in K]: T[key]
// } extends {
//   [key in Exclude<K, never>]: Exclude<T[key], undefined>
// } ? true : false

// type IsRequiredKey<T, K extends keyof T> = checkRequire<{
//   [key in keyof T]: 1
// }, K>


type IsRequiredKey<T, K extends keyof T> = T extends Required<Pick<T, K>> ? true : false   