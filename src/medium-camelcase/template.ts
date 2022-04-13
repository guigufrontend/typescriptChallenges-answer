// type CamelCase<S extends string> 
//     = S extends `${infer F}-${infer R}` 
//     ? (R extends Capitalize<R> 
//         ? `${F}-${CamelCase<R>}` 
//         : `${F}${CamelCase<Capitalize<R>>}`) 
//     : S

type CamelCase<S> = S extends `${infer Head}-${infer E}${infer Tail}`
    ? E extends Uppercase<E> 
        ? E extends '-'
            ? `${Head}-${CamelCase<`${E}${Tail}`>}` 
            : `${Head}-${E}${CamelCase<Tail>}` 
        : `${Head}${Uppercase<E>}${CamelCase<Tail>}` 
    : S
