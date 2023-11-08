export function maxNumberOfBalloons(text: string): number {
  const map: Map<string, number> = new Map([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0],
  ]);

  for (let i = 0; i < text.length; i++) {
    if (map.get(text[i]) != null) {
      map.set(text[i], (map.get(text[i]) ?? 0) + 1);
    }
  }

  const freq: number[] = [];
  map.forEach((value, key) => {
    if (['l', 'o'].includes(key)) {
      freq.push(Math.floor(value / 2));
    } else {
      freq.push(Math.floor(value / 1));
    }
  });

  let ans = freq[0];
  freq.forEach((n) => (ans = Math.min(ans, n)));
  return ans;
}

export function maxNumberOfBalloons2(text: string, pattern: string): number {
  const letterDict: Record<string, number> = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const patternFreqArr: number[] = Array(25);
  const textFreqArr: number[] = Array(25);

  for (let i = 0; i < pattern.length; i++) {
    if (patternFreqArr[letterDict[pattern[i]]] == null) {
      patternFreqArr[letterDict[pattern[i]]] = 1;
    } else {
      patternFreqArr[letterDict[pattern[i]]]++;
    }
  }

  for (let i = 0; i < text.length; i++) {
    const letterValue = letterDict[text[i]];
    if (patternFreqArr[letterValue] > 0 && textFreqArr[letterValue] != null) {
      textFreqArr[letterValue]++;
    }

    if (patternFreqArr[letterValue] > 0 && textFreqArr[letterValue] == null) {
      textFreqArr[letterValue] = 1;
    }
  }

  const freq: number[] = [];
  let ans = null;
  for (let i = 0; i < patternFreqArr.length; i++) {
    if (patternFreqArr[i] != null && textFreqArr[i] != null) {
      freq.push(textFreqArr[i] / patternFreqArr[i]);
      ans = Math.floor(
        Math.min(
          ans ?? textFreqArr[i] / patternFreqArr[i],
          textFreqArr[i] / patternFreqArr[i]
        )
      );
    }
  }

  return ans ?? 0;
}
