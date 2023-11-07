/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    swap(s, left, right);
    left++;
    right--;
  }
}

function swap(s: string[], left: number, right: number) {
  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;
}
