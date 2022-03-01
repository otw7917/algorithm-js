## 객체 배열 그리고 Map

### object

- 객체 key가 문자열인

### Array

- 배열 key가 숫자(인덱스)

### Map

- Map key에 어떤 자료형도 가능한
- 순서 있음

  - 특정 메서드를 사용해야 일반객체로 취급하지 않음
  - set(key, value), get(key) : value, has(key) : boolean, delete(key), clear, 프로퍼티 size

- keys, values, entries 메서드로 반복 작업 가능 return iterable
- iterable 하면 for ... of 가 연상되야함

### Set

- 중복을 허용하지 않는 컬렉션

- add(value) : set, delete(value) : boolean, has(value) : boolean, clear, 프로퍼티 size
