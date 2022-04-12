import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// as const 字面量类型，说明tuple里面只能是'tesla', 'model 3', 'model X', 'model Y'

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>