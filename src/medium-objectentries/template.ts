type ObjectEntries<T> 
    = keyof T extends infer K 
        ? K extends keyof T
            ?[K, T[K]] 
            :never
        : never