export function getProp<T>(object: T): Prop<T> {
  return new Prop(object);
}

type ValueOf<T> = T extends { value: infer U } ? U : T extends { value?: infer V } ? V | undefined : never;
type Nullable<T> = T extends undefined ? undefined : T extends null ? null : never;
type ValuePropKeys<T> = {
  [K in keyof T]: NonNullable<T[K]> extends { value?: any } ? K : never;
}[keyof T];
type ValueProps<T> = { [K in ValuePropKeys<T>]: T[K] };

class Prop<T> {
  private object: T;

  constructor(object: T) {
    this.object = object;
  }

  public get(): T {
    return this.object;
  }

  public on<K extends keyof NonNullable<T>>(key: K): Prop<NonNullable<T>[K] | Nullable<T>> {
    return new Prop(this.object === undefined ? undefined : this.object === null ? null : this.object![key]) as any;
  }

  public onValue<K extends keyof T2, T2 extends ValueProps<NonNullable<T>>>(
    key: K,
  ): Prop<ValueOf<T2[K]> | Nullable<T>> {
    return this.on(key as any).on('value') as any;
  }
}
