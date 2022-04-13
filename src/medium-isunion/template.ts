type IsUnion<T,U = T> = T extends U ? [U] extends [T] ? false : true : never 

type bb = IsUnion<'a'|'b'|'c'|'d'>
type cc = ['a'|'b'|'c'|'d'] extends ['a'] ? true : false 
type dd = [1] extends [1] ? true : false 