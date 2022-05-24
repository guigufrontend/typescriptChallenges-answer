type MergeObject<F, S> = {
  [k in keyof F | keyof S]: k extends keyof S ? S[k] : k extends keyof F ? F[k] : never;
};

type MergeArray<O extends any, T extends any> = O extends string[] ? [...O, T] : [O, T];

type AssignObject<
  R extends object,
  K extends string,
  V extends any,
  N = {
    [C in K]: V;
  }
> = K extends keyof R
  ? {
      [C in keyof R]: C extends K ? (V extends R[C] ? R[C] : MergeArray<R[C], V>) : R[C];
    }
  : MergeObject<R, N>;

type ParseQueryString<T extends string, R extends object = {}> = T extends ''
  ? R
  : T extends `${infer K}=${infer V}`
  ? V extends `${infer V}&${infer O}`
    ? ParseQueryString<O, AssignObject<R, K, V>>
    : AssignObject<R, K, V>
  : T extends `${infer K}`
  ? K extends `${infer K}&${infer O}`
    ? ParseQueryString<O, AssignObject<R, K, true>>
    : AssignObject<R, K, true>
  : never;