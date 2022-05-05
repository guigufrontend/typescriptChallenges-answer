
type Arr<U> = U extends unknown[]?U:[U]
type Without<T extends unknown[], U, D extends any[] = []> 
    = T extends [Arr<U>[number],...infer TR]
            ?Without<[...TR], U, D>
            :T extends [infer TF, ...infer TR]
                ?Without<[...TR], U, [...D, TF]>
                :D

// type Include<T extends unknown[], V> = V extends T[number] ? true : false;

// type Without<
//     T extends unknown[],
//     U extends unknown[] | unknown,
//     V extends unknown[] = []
// > = T extends [infer F, ...infer R]
//     ? Include<U extends unknown[] ? U : [U], F> extends true
//     ? Without<R, U, V>
//     : Without<R, U, [...V, F]>
//     : V;