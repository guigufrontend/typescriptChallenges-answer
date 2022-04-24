

type GreaterThan<T extends number, U extends number, L extends any[]=[]> 
  = L['length'] extends T
  ?false
  :L['length'] extends U
    ?true
    :GreaterThan<T, U, [...L,1]>

