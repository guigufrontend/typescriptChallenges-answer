type StringToUnion<T extends string> 
    = T extends ''? never:T extends `${infer F}${infer R}`?F|StringToUnion<R>:never