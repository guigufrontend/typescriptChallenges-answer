type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type MM = `0${Num}` | `1${0 | 1 | 2}`

type AllDate =
  | `${MM}${`${0}${Num}` | `${1}${0 | Num}` | `2${0 | Exclude<Num, 9>}`}`
  | `${Exclude<MM, '02'>}${29 | 30}`
  | `${Exclude<MM, '02' | '04' | '06' | '09' | '11'>}${31}`


type ValidDate<T extends string> = T extends AllDate ? true : false