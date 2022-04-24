type StrToArr<S extends string>= S extends `${infer F}${infer R}`?[F, ...StrToArr<R>]:[]
    
type AllCombinations<
    S extends string, 
    T extends StrToArr<S>[number] = StrToArr<S>[number] , 
    Res extends string = '', 
    Type = '', 
    B extends T = T> 
= 
S extends '' 
? ''
:T extends T 
    ? Exclude<B, T> extends [never]
        ? Type | `${Res}${T}` 
        : AllCombinations<S, Exclude<B,T>, `${Res}${T}`,Type | `${Res}${T}` >
    : never

// 明白是明白了，但是还是写不出来啊阿啊