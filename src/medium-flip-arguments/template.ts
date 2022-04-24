
type Reverse<T> = T extends [...infer R, infer L]?[L, ... Reverse<R>]:[]

type FlipArguments<T>
     = T extends (...argument:infer A)=>infer V
        ?(...argument:Reverse<A>)=>V
        :any