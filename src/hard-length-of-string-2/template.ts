
   
type LengthOfString<S extends string, D extends 0[] = []> 
  = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...D, 0]>
  :D['length']
