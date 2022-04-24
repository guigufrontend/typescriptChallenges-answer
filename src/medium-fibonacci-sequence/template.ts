type Tranfer<
  P extends any[],
  N extends any[],
  L extends any[],
  T extends number
> = T extends L["length"]
  ? [...P, ...N]
  : Tranfer<N, [...P, ...N], [...L, 1], T>;

type Fibonacci<T extends number, S extends any[] = []> = T extends S["length"]
  ? S["length"]
  : Tranfer<[], [1], [1, 1], T>["length"];