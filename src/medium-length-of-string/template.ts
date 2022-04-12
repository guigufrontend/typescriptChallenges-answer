
   
type LengthOfString<T extends string, L extends string[]=[]> = 
    T extends ''
    ?L['length']
    :T extends `${infer First}${infer Rest}`
        ? LengthOfString<Rest, [...L, First]>:never

type aa = LengthOfString<'kumiko'>
type bb = [1,2,3]['length']// 这个类型就是3
type cc = any[]['length']// 这个类型就是number
// 思路就是把每个字符存到一个数组里面，这样存储了一定个数的元素的数组，他的length就是一个真正的数值而不是number