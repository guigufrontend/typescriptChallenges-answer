type DropOne<S extends string,R extends string> = S extends `${infer A}${R}${infer B}`?
  DropOne<`${A}${B}`,R>
  :S

type DropString<S extends string, R extends string> = R extends `${infer F}${infer L}`?
  DropString<DropOne<S,F>,L>
  :S