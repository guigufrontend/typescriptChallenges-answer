
   
type Last<T extends any[]> = T extends [...infer Rest, infer Last]?Last:never

// 这个思路真是、、、、有意思也没意思，还有点麻烦的样子，还得喊666
// type LastOfArray<T extends readonly any[]> = T extends [...any[], infer Y] ? Y: never