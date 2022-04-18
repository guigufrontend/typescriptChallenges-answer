type RemoveIndexSignature<T extends Record<string, any>> = {
    [Key in keyof T as Key extends `${infer Str}` ? Str : never]: T[Key]
  }
//   type RemoveIndexSignature<T extends Record<string, any>> = {
//     [
//       K in keyof T as [T[K]] extends [undefined] ? never : K
//     ]: T[K]
//   }
