---
title: string type 을 number type 으로바꿔주는 함수
date: "2018-04-09"
category: "javascript"
thumbnail: "./javascript_img.jpg"
---

### 문자열을 number타입으로 바꿔주는 함수

문자열을 number 타입으로 바꾸기 위해 `parseInt` 혹은 `parseFloat` 함수를 사용할 수 있습니다.

```js
// x ,y의 숫자를 입력한다
const x = prompt('첫 번쨰 숫자를 입력하세요.');
const y = prompt('두 번째 숫자를 입력하세요.');
//그대로 alert하면 문자열이 더해진다.
alert(x+y)

// parseint 를 사용하여 x,y의 문자열을 숫자로 바꿔준다.
const x = prompt('첫 번쨰 숫자를 입력하세요.');
const y = prompt('두 번째 숫자를 입력하세요.');
// x,y의 문자값을 parseint 를 사용하여 변수 a와 b의 저장한다.
const a = parseInt(x);
const b = parseInt(y);
alert(a+b)
```

`parseFloat` 은 실수를 숫자 실수로 바꿔준다.

### 숫자를 문자로 바꾸는 방법

`.toString()`;

```js
let v = 12345;
=> undefined
v.toString();
=> '12345'
```

### Math 객체

JavaScript에 내장된 `Math` 객체에는 수 연산을 위한 많은 메소드와 상수들이 내장되어 있습니다.

```js
//반올림
Math.round(3.5)
=> 4
//올림
Math.ceil(3.4)
=> 4
//최대값
Math.max(3,1,5)
=> 5
//최소값
Math.min(3,1,5)
=> 1
//랜덤값
Math.random(); // 0과 1 사이의 값이 임의로 반환됩니다.
```

