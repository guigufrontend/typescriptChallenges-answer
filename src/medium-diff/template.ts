type Diff<O, O1> = {
	[K in (Exclude<keyof O, keyof O1>|Exclude<keyof O1, keyof O>)]: K extends keyof O?O[K]:O1[K]
}

