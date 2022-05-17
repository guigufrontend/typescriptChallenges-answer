type Get<T, K> 
  = K extends `${infer F}.${infer R}`
  ?F extends keyof T
    ?Get<T[F], R> 
    :never
  :K extends keyof T ? T[K]:never