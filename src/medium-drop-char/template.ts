// type DropChar<S, C, K extends string=''> 
// 	= S extends ''
// 	?K
// 	: S extends `${infer F}${infer R}`
// 		?F extends C
// 			?DropChar<R, C, K>
// 			:DropChar<R, C, `${K}${F}`>
// 		:never
type DropChar<T extends string,K extends string> 
	= T extends `${infer S}${infer E}`
		? S extends K
		  ? DropChar<E, K>
		  : `${S}${DropChar<E, K>}`
		: T;