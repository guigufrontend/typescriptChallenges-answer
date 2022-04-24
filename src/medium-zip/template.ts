
   
type Zip<T extends any[], P extends any[]> 
    = T extends [infer F, ...infer R]
        ?P extends [infer PF, ...infer PR]
            ? [[F,PF],...Zip<R, PR>]
            :[]
        :[]