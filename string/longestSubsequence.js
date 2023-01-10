var s = "pwwkewx";

function longestSubStringCount(s) {
  const map = new Map();
  let p1 = 0;
  let p2 = 0;

  while (p2 < s.length) {
    if (map[s[p2]] > 0) {
      map[(s[p1], p1)];
      map[(s[p2], p2)];
      p1++;
      p2++;
    } else {
      map[s[p2]] = p2;
      p2++;
    }
  }

  console.log(map);
  return map.size;
}

console.log(longestSubStringCount(s));
