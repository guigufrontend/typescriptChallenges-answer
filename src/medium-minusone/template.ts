// type MinusOne<T extends number,Result extends number[] = []> 
//     = T extends Result['length'] 
//     ? Result extends [infer _F,...infer R] 
//         ? R['length'] 
//         : 0 
//     : MinusOne<T, [...Result, T]>

type MinusOne<T extends number> = `${T}` extends `-${infer _}` | 0
  ? never
  : HighToTuple<T> extends [infer _, ...infer R]
    ? R['length'] 
    : never

type Make10<T extends any[]> = [...T,...T,...T,...T,...T,...T,...T,...T,...T,...T]

type toTuple<T extends number | string, R extends any[] = []> =
`${T}` extends `${R['length']}` ? R : toTuple<T,[...R, 0]>

type HighToTuple<T extends number| string, Res extends any[] = []> = 
`${T}` extends `${infer L}${infer R}`
  ? HighToTuple<R, [...Make10<Res>, ...toTuple<L>]>
  : Res
type aa = MinusOne<1101>