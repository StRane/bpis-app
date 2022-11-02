export function delay<T>(argument: T, retarder: number) {
  return new Promise(() => setTimeout(() => argument, retarder));
}
