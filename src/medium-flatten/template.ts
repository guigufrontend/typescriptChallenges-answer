// type Flatten<T extends any[]> = 
//     T extends []?[]
//     :T extends [infer First, ...infer Rest]
//     ? First extends any[]?Flatten<[...First, ...Rest]>:[First,...Flatten<Rest> ]
//     :never
// 方法2
type Flatten<T> = 
    T extends []? []
	: T extends [infer A, ...infer B]
	? [...Flatten<A>, ...Flatten<B>]
	: [T];