type TwoSum<T extends any[], U extends number> =
  boolean extends GetLen2Arr<Combine<T>, U>
    ? true
    : GetLen2Arr<Combine<T>, U>


type Combine<T extends any[], Res extends any[] = []> =
  T extends [infer Start, ...infer End]
  ? Combine<End, Res extends Res
    ? [...Res, Start]['length'] extends 2 | 1
      ? [...Res, Start] | Res
      : Res 
    : never>
  : Res

type createArr<N, Res extends unknown[] = []> =
  `${Res['length']}` extends `${N & number}`
  ? Res
  : createArr<N, [...Res, unknown]>

type GetLen2Arr<Arr extends any[], T> =
  Arr extends Arr
  ? Arr['length'] extends 2
    ? Arr extends [infer Start, infer End]
      ? [...createArr<Start>, ...createArr<End>]['length'] extends T
        ? true
        : false
      : never
    : never
  : never