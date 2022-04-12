
type MyExclude<T, U> = T extends U? never:T
type MyOmit<T, K extends keyof T> = {
    [Key in  MyExclude<keyof T, K>] : T[Key]
}
// type MyOmit<T, K extends keyof T> = Pick<T,Exclude<keyof T,K>>