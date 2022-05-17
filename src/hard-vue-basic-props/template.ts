type ComputedToData<Computed> = {
  [Key in keyof Computed]: Computed[Key] extends (...args: any[]) => infer R ? R : Computed[Key]
}

type CtorToData<Ctor> =
  Ctor extends typeof String ? string :
  Ctor extends typeof Number ? number :
  Ctor extends typeof Boolean ? boolean :
  Ctor extends new (...args: any[]) => unknown ? InstanceType<Ctor> : any

type RawTypeToData<RawType> = RawType extends (infer Ctor)[] ? CtorToData<Ctor> : CtorToData<RawType>

type TypeToData<Type> = Type extends { type: infer RawType } ? RawTypeToData<RawType> : RawTypeToData<Type>

type PropsToData<Props> = {
  [Key in keyof Props]: TypeToData<Props[Key]>
}

declare function VueBasicProps<
  Data,
  Computed,
  Methods,
  Props,
  This = Data & ComputedToData<Computed> & Methods & PropsToData<Props>
>(options: {
  data: (this: PropsToData<Props>) => Data,
  computed: Computed & ThisType<This>,
  methods: Methods & ThisType<This>,
  props: Props
}): unknown