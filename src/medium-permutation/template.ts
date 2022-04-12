
type Permutation<T, U = T> = [T] extends [never] ? [] : T extends T ? [T, ...Permutation<Exclude<U, T>>] : never

type aa = Permutation<'A' | 'B' | 'C'>
// 这个很神奇，感觉应该捋一遍ts 文档丫的
// T extends T 实际上会循环T中的每个值，第一次循环T可能是A,后续再处理[A, ...Permutation<Exclude<U, A>>]，
//  这里面的Permutation<Exclude<U, A> 循环时可能是B， 那么结果就是【A，B，C】， 也可能先C 结果就是[A, C,B]
// 第一次循环也可能先B ，最终结果就是【B，A, C】或者[B, C, A]
// 第一次循环也可能先C ，最终结果就是【C，A, B】或者[C, B, A]
// 这样就循环出了9种结果， 还是tm的神奇