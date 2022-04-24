type FlattenDepth<T, D extends number = 1, H extends any[] = []> 
   = T extends [infer F, ...infer L] 
      ? H["length"] extends D 
         ? T 
         : F extends any[] 
            ? [...FlattenDepth<F, D, [...H, 1]>, ...FlattenDepth<L, D, [...H]>] 
            : [F, ...FlattenDepth<L, D, [...H]>]
      : [];