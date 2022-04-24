type FlipTemp<
  T extends Record<string, number>,
  U extends number | string
> = keyof {
  [key in keyof T as `${T[key]}` extends `${U}` ? key : never]: T[key]
}

type Flip<T extends Record<string, any>> = {
  [key in `${T[keyof T]}`]: FlipTemp<T, key>
}