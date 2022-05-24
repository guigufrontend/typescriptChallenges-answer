type Absolute<T extends string | number | bigint> = T extends string
  ? T extends `-${infer R}`
    ? R
    : T
  : Absolute<`${T}`>;

type isNegative<T extends number> = `${T}` extends `-${infer _}` ? true : false;

type SliceLeft<
  Arr extends any[],
  Index extends number,
  Tail extends any[] = []
> = Tail["length"] extends Index
  ? [Tail, Arr]
  : Arr extends [infer Head, ...infer Rest]
  ? SliceLeft<Rest, Index, [...Tail, Head]>
  : [Tail, []];

type SliceRight<
  Arr extends any[],
  Index extends string,
  Tail extends any[] = []
> = `${Tail["length"]}` extends Index
  ? [Arr, Tail]
  : unknown extends Arr[0]
  ? [[], Tail]
  : Arr extends [...infer Rest, infer Last]
  ? SliceRight<Rest, Index, [Last, ...Tail]>
  : [[], Tail];

type SliceIndex<
  Arr extends any[],
  Index extends number
> = isNegative<Index> extends false
  ? SliceLeft<Arr, Index>
  : SliceRight<Arr, Absolute<Index>>;

type Slice<
  Arr extends any[],
  Start extends number = 0,
  End extends number = Arr["length"]
> = SliceIndex<SliceIndex<Arr, End>[0], SliceIndex<Arr, Start>[0]["length"]>[1];