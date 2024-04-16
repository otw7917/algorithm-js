function solution(id_pw, db) {
  const newDb = {};
  for (const info of db) {
    newDb[info[0]] = info[1];
  }

  // 아이디가 없으면 "fail"
  // 아이디 맞고 비밀번호 틀리면 "wrong pw"
  // 아이디 맞고 비밀번호 맞으면 "login"
  const [id, pw] = id_pw;

  if (newDb[id] === undefined) {
    return "fail";
  } else if (newDb.hasOwnProperty(id) && newDb[id] !== pw) {
    return "wrong pw";
  } else {
    return "login";
  }
}

const id_pw = ["meosseugi", "1234"];
const id_pw1 = ["programmer01", "15789"];
const id_pw2 = ["rabbit04", "98761"];
const db = [
  ["rardss", "123"],
  ["yyoom", "1234"],
  ["meosseugi", "1234"],
];
const db1 = [
  ["programmer02", "111111"],
  ["programmer00", "134"],
  ["programmer01", "1145"],
];
const db2 = [
  ["jaja11", "98761"],
  ["krong0313", "29440"],
  ["rabbit00", "111333"],
];
const result = "lgoin";
const result1 = "wrong pw";
const result2 = "fail";

console.log(solution(id_pw, db) === result);
console.log(solution(id_pw1, db1) === result1);
console.log(solution(id_pw2, db2) === result2);

// map
function solution1(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
