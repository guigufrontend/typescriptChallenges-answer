
type AppendArgument<T extends (...args:any)=>any,  A> = 
    T extends (...args:[...infer R])=>infer Result
        ?(...args:[...R, A])=>Result
        :never