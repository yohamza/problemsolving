var s1 = "a####e";
var s2 = "ed";

function compareStrings(string1, string2) {
  var p1 = string1.length - 1;
  var p2 = string2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (string1[p1] === "#" || string2[p2] === "#") {
      if (string1[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (string1[p1] === "#") {
            backCount = backCount + 2;
          }
        }
      }

      if (string2[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (string2[p2] === "#") {
            backCount = backCount + 2;
          }
        }
      }
    } else {
      if (string1[p1] !== string2[p2]) return false;
      else {
        p1--;
        p2--;
      }
    }
  }

  return true;
}

console.log(compareStrings(s1, s2));
