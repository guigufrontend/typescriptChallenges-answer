// 解法1
// type First<T extends any[]> = T extends []?never:T[0]

// 解法2
// type First<T extends any[]> = T['length'] extends 0?never:T[0]

// 解法3
// type First<T extends any[]> = T[0] extends T[number]?T[0]:never

// 解法4 推断
type First<T extends any[]> = T extends [infer First, ...infer Rest]?First:never
