type Copy<T> = {
    [P in keyof T]: T[P]
}
type RequiredByKeys<T, S = keyof T> = Copy<{
    [K in keyof T as K extends S?K:never]-?:T[K];
}&{
    [K in keyof T as K extends S?never:K]:T[K]; 
}>