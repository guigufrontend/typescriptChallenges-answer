type ToNumber<S extends string, R extends number[] = []> 
  = `${R['length']}` extends S
  ?R['length']
  :ToNumber<S, [...R,0]>