export type Language = "en" | "fr";

export type JoinKeys<T, Prev extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prev}${K & string}`
    : T[K] extends object
      ? JoinKeys<T[K], `${Prev}${K & string}.`>
      : never;
}[keyof T];

export type AssertEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

export type Expect<T extends true> = T;

export function translate<T extends Pick<T, Language>>(
  keys: T,
  locale: string | undefined,
) {
  return function (key: JoinKeys<T["en"]>) {
    const value = (key as string)
      .split(".")
      .reduce(
        (res, level) => (res as any)[level],
        keys[locale as any as Language],
      );
    if (typeof value !== "string") {
      throw new Error("could not find translation for " + key);
    }
    return value;
  };
}
