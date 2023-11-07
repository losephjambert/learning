export function checkIfPangram(sentence: string): boolean {
  const pangramSet: Set<string> = new Set();
  for (let i = 0; i < sentence.length; i++) {
    pangramSet.add(sentence[i]);
  }

  return pangramSet.size === 26;
}
