function XO(str) {
  //code here
  let xcount = 0;
  ocount = 0;
  for (let i = 0; i < str.length; i++) {
    //console.log("inside for loop");
    if (str.charAt(i) === "x" || str.charAt(i) === "X") {
      xcount++;
    } else if (str.charAt(i) === "o" || str.charAt(i) === "O") {
      ocount++;
    }
  }
  if (xcount === ocount) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("abcdefghijklmnopqqrstuvwxyz"));
