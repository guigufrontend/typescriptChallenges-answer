type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string, A extends any[] = []> =
  S extends `${infer _}%${infer Control}${infer Last}` ?
    Control extends keyof ControlsMap ?
      ParsePrintFormat<Last, [...A, ControlsMap[Control]]> :
      ParsePrintFormat<Last, A>
    : A