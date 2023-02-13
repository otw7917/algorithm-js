/**
 * 필요한 방의 갯수 구하기
 * @param {number[]} book_time [...[start, end],[start, end]]
 * @returns {number} needed room number
 */

// 시작 시간과 끝 시간을 구해서
// 종료시간 보다 값이 작으면 새로운 방이 필요함
function Hotel(book_time) {
  const sorted_book_time = [...book_time].sort();
  const room = [];

  sorted_book_time.map((t) => {
    const [s_hour, s_min] = splitTime(t[0]);
    const [e_hour, e_min] = splitTime(t[1]);
    const start = Number(s_hour) * 60 + Number(s_min);
    const end = Number(e_hour) * 60 + Number(e_min) + 10;

    const room_idx = room.findIndex((n) => n <= start);

    if (room_idx === -1) {
      room.push(end);
    } else {
      room[room_idx] = end;
    }
  });
  return room.length;
}
// 시작 시간과 끝 시간을 분리해주는 방법
// 중복 되는 로직 변환 해주는거
function splitTime(time) {
  const [hour, min] = time.split(":");
  return [hour, min];
}

const book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];

const answer = 3;

console.log(Hotel(book_time) === answer ? "정답" : "틀림");
