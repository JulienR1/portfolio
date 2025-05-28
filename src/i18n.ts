export type Language = "en" | "fr";

export type JoinKeys<T, Prev extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prev}${K & string}`
    : T[K] extends object
      ? JoinKeys<T[K], `${Prev}${K & string}.`>
      : never;
}[keyof T];

type KeysMatch<A, B> =
  Exclude<keyof A, keyof B> extends never
    ? Exclude<keyof B, keyof A> extends never
      ? {
          [K in keyof A]: K extends keyof B
            ? A[K] extends object
              ? B[K] extends object
                ? KeysMatch<A[K], B[K]>
                : false
              : true
            : false;
        }[keyof A] extends false
        ? false
        : true
      : false
    : false;

type ValidKeys<T extends Pick<T, Language>> =
  KeysMatch<T["en"], T["fr"]> extends true
    ? T
    : { error: "localizations keys do not match" };

export function translate<T extends Pick<T, Language>>(
  keys: ValidKeys<T>,
  locale: string | undefined,
) {
  if ("error" in keys) {
    throw new Error("this should not have happened, somebody used 'any'");
  }

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
