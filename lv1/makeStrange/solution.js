function solution(s) {
  let answer;

  answer = s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((value, index) =>
          index % 2 === 0
            ? word[index].toUpperCase()
            : word[index].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
