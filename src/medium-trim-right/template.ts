
// type Reverse<S extends string, D extends string = ''> 
//     = S extends `${infer F}${infer R}`
//         ?Reverse<R,`${F}${D}`>
//         :D
// type TrimLeft<S extends string> = S extends `${' '|'\n'|'\t'}${infer Rest}`?TrimLeft<Rest>:S
// type TrimRight<S extends string, D extends string=''> 
//     = Reverse<TrimLeft<Reverse<S>> >

    type TrimRight<S extends string> = S extends `${infer L}${' ' | '\t' | '\n'}` ? TrimRight<L> : S