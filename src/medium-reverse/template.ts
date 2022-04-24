
type Reverse<T> = T extends [...infer R, infer L]?[L, ... Reverse<R>]:[]