


declare function join<T extends string>(delimiter: T ): <P extends string[]>(...parts: P) =>(
  Link<T,P>
) 

type Link<T extends string, P extends unknown[]>
  = P extends [infer F, ...infer R] 
    ? R extends []
      ?`${F&string}`
      :`${F&string}${T}${Link<T, R>}`
    :''


// type Join<
//   T extends string,
//   P extends unknown[],
//   S extends string = ''
// > = P extends [infer F, ...infer Rest]
//   ? Join<T, Rest, `${S}${T}${F & string}`>
//   : S extends `${T}${infer Str}`
//     ? Str
//     : S;

// declare function join<T extends string>(delimiter: T): <P extends string[]>(...parts: P) => Join<T, P>