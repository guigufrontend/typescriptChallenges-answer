
type ToArr<T extends number, N extends 1[]=[]> =N['length'] extends  T?N:ToArr<T, [...N,1]>
type B<T extends number> = [...ToArr<T>]

type NumberRange<L extends number, H extends number, N extends any[]=B<L>, R = L|H> 
= N['length'] extends H
    ? R
    : NumberRange<L, H, [...N, 1], R|N['length']>