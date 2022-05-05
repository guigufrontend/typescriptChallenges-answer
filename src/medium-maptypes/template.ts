type MapTypes<T, R extends { mapFrom: any, mapTo: any }> = {
    [K in keyof T]:
      T[K] extends R["mapFrom"]
      ? Extract<R, { mapFrom: T[K], mapTo: any }>["mapTo"]
      : T[K]
  }
