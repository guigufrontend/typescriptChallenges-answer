
type Subsequence<T extends any[], Res extends any[] = []> 
    = T extends [infer Start, ...infer End] ? Subsequence<End,  Res | [...Res,Start]> : Res