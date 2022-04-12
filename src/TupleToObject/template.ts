// 注意(string|number|symbol)[] 是因为对象、数组类型不能当key
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
   [P in  T[number]]: P
}

// 遍历数组 T[number]