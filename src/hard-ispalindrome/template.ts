type StrReverse<T extends string, S extends string = ''> 
    =  T extends `${infer F}${infer R}` 
        ? StrReverse<R, `${F}${S}`> 
        : S;
type IsPalindrome<T extends number | string> = `${T}` extends StrReverse<`${T}`> ? true : false;