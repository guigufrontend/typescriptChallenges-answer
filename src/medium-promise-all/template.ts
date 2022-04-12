

type AA<T extends  unknown[], K  extends unknown[]=[]>=
    T extends [infer First, ...infer Rest]
    ?T extends []
        ?K
        :First extends Promise<infer P>?AA<[P, ...Rest], K>:AA<[...Rest],[...K, First]>
    :K
declare function PromiseAll<T extends  any []>(values: readonly[...T]): 
    Promise<AA<T>>

  
// 这个方法好
// declare function PromiseAll<T extends unknown[]>(values: readonly [...T])
//     :Promise<{[k in keyof T]: T[k] extends  Promise<infer R> ? R : T[k]}>
