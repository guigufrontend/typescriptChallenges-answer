// 注意默认值 = keyof T
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
  } & {
    [P in keyof T as P extends K? never: P]: T[P]
  }

// type MyExclude<T,K> = T extends K ? never : T
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     readonly [P in K ]: T[P]
// } & {
//     [P in MyExclude<keyof T, K>] : T[P]
// }
