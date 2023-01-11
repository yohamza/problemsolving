var s = "abcdeabcfbbcddd";

function longestSubStringCount(s) {
  const map = new Map();
  let p1 = 0;
  let p2 = 0;
  let subStringCount = 0;

  while (p2 < s.length) {
    if (!map.has(s[p2])) {
      map.set(s[p2], p2);
      subStringCount = Math.max(subStringCount, p2 - p1 + 1);
      p2++;
    } else {
      map.delete(s[p1]);
      p1++;
    }
  }

  console.log(map);
  return subStringCount;
}

console.log(longestSubStringCount(s));
