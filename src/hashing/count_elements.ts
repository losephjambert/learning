export function countElements(arr: number[]): number {
  const sumSet: Set<number> = new Set(arr);
  let result = 0;

  arr.forEach((num) => {
    if (sumSet.has(num + 1)) {
      result++;
    }
  });

  return result;
}
