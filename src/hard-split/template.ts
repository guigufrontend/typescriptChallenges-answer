type Split<S extends string, SEP extends string, R extends string[] = []> 
  = S extends `${infer F}${SEP}${infer O}` 
    ? Split<O, SEP, [...R, F]> 
    : SEP extends '' 
      ? [...R] 
      : string extends S
        ? S[] 
        : [...R, S]
