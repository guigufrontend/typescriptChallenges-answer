
   
// type LastIndexOf<T extends unknown[], U, N extends 1[] = [], M extends number[] = [],FLG extends boolean = false> 
//     = T extends [infer F, ...infer R]
//     ? F extends U 
//       ? LastIndexOf<R, U, [...N, 1], [...N], true>
//       : LastIndexOf<R, U, [...N, 1], M, FLG>
//     :FLG extends true? M['length']:-1

    type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer R]
    ? R extends U
        ? Rest["length"]
        : LastIndexOf<Rest, U>
    : -1;