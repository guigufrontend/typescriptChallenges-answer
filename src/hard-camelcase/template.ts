
   
type CamelCase<S extends string, Flag extends boolean = false> 
=  S extends `${infer F}${infer R}`
  ?F extends '_'
    ? `${CamelCase<R, true>}`
    :`${Flag extends true?Uppercase<F>:Lowercase<F>}${CamelCase<R, false>}`
  :''