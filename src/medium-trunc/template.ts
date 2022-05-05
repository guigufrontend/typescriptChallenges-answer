type ToString<T extends string|number> = T extends number?`${T}`:T
type Trunc<T extends string|number> 
    = ToString<T> extends `${infer F}.${infer L}`
        ?`${F}`
        :ToString<T>