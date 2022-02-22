function NumAEng(s) {
  let answer = 0;
  const check = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = s;

  for (let i = 0; i < check.length; i++) {
    str = str.split(check[i]).join(i);
  }
  answer = parseInt(str);
  return answer;
}

if (NumAEng("one4seveneight") === 1478) {
  console.log("1,correct");
}
if (NumAEng("23four5six7") === 234567) {
  console.log("2,correct");
}
if (NumAEng("2three45sixseven") === 234567) {
  console.log("3,correct");
}
if (NumAEng("123") === 123) {
  console.log("4,correct");
}
