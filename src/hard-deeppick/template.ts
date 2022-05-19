type DeepPick<T extends Record<string,any>, U extends string> = (U extends string? 
  U extends `${infer F}.${infer R}`?
    (arg:{
      [K in F]:DeepPick<T[F],R>
    })=>void
    :U extends keyof T?
      (arg:Pick<T,U>)=>void
      :(arg:unknown)=>void
  :never
  
  ) extends (arg:infer Z)=>void? Z:never;