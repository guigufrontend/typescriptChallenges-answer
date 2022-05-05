

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  D extends any[] = [],
  F extends boolean=false
> = Start extends End?T
	:D['length'] extends Start
	? T extends [infer F, ...infer R]
		?Fill<[...R],N,Start,End,[...D, N], true>
		:D
	:D['length'] extends End
		?T extends [infer F, ...infer R]
			?Fill<[...R],N,Start,End,[...D, F]>
			:D
		:F extends true
			?T extends [infer F, ...infer R]
				?Fill<[...R],N,Start,End,[...D, N], true>
				:D
			:T extends [infer F, ...infer R]
				?Fill<[...R],N,Start,End,[...D, F]>
				:D