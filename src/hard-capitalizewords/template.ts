type CapitalizeWords<S extends string, Flag extends boolean = true> 
  = S extends `${infer F}${infer R}`
    ?F extends ' '|'.'|','
      ? `${Flag extends true?Uppercase<F>:F}${CapitalizeWords<R, true>}`
      :`${Flag extends true?Uppercase<F>:F}${CapitalizeWords<R, false>}`
    :''