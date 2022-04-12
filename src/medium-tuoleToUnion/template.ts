// type TupleToUnion<T extends any[]> 
// = T extends [infer First, ...infer Rest]? First|TupleToUnion<Rest>
// : null

// 我居然忘了这个、、、、
type TupleToUnion<T extends any[]> =T[number]
