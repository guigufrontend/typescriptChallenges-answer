
   
type Trim<S extends string> = 
    S extends (`${' '|'\n'|'\t'}${infer Rest}`|`${infer Rest}${' '|'\n'|'\t'}`)
    ? Trim<Rest>
    :S