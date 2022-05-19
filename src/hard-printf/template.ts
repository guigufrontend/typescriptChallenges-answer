
type AA = {
  's':string,
  'd':number
}

type Format<T extends string> 
  =T extends `${infer F}%${infer R}${infer Tail}`
  ? R extends keyof AA
    ? (p:AA[R])=>Format<Tail>
    :string
  : string
