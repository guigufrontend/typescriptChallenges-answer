// type Zero = "0";
// type One = "1";

// type BinaryToDecimal<
//   S extends string,
//   Result extends any[] = [],
//   Count extends any[] = [any]
// > = S extends `${infer L}${Zero}`
//   ? BinaryToDecimal<L, [...Result], [...Count, ...Count]>
//   : S extends `${infer L}${One}`
//     ? BinaryToDecimal<L, [...Result, ...Count], [...Count, ...Count]>
//     : Result["length"];


type ExpandTwo<T extends any[]> = [...T, ...T]

type BinaryToDecimal<S extends string, R extends any[] = []> = S extends `${infer L}${infer Rest}`
? L extends '0'
  ? BinaryToDecimal<Rest, ExpandTwo<R>>
  : BinaryToDecimal<Rest, [...ExpandTwo<R>, 0]>
: R['length']