export function isWholeNumber(value: string): boolean {
  const regex = /^\d+$/;
  return regex.test(value);
}
