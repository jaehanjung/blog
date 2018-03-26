---
title: 18.03.21 javascript 기초 수업 3일차
date: "2018-03-21"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# JavaScript

### 제어구문

1. #### for 문, while 문 (loof)

- for 문

```html
for (let i = 0; i < 5; i++) { // (초기값; 조건; 갱신)
  console.log(`이 코드는 ${i + 1}번 째 실행되고 있습니다.`);
}

```

- while 문

```html
let i = 0;   //  변수 i
while (i < 5) {  // 0 은 5보다 작으니까 true 실행된다.
  console.log('이 코드는 괄호 안의 값이 `true`인 한 계속 실행됩니다.')
  i++; // i를 1 증가시킨다.
}

```



### 함수 (function)

```html
function add(x,y){   //  add 라는 이름을 가진 함수
  return x + y;     // 코드에 빈칸을 만들고 재사용 할 수 있는 코드가 함수이다.
}
add(1,4)    // 함수에 이름에 (값) 을넣어주면 함수가 실행된다.
```



// 브라우저 내장 함수인 `prompt`, `console.log`, `alert` 사용하기

```html
const answer = prompt('이름이 무엇인가요?'); // answer 변수에 prompt : 팝업을띄우고 값을                                            //주 는 함수 를 담는다.
console.log(answer);                       // 변수를 출력
alert(answer);							// 경고창에 answer 의 값을 보여준다.
```

### 객체

객체는 이름과 값이있는 통이다.

```html
// 객체의 생성
const obj = {
  x: 0, // 객체의 속성. 속성 이름: x, 속성 값: 0
  y: 1 // 객체의 속성. 속성 이름: y, 속성 값: 1
}

객체에는 x,y라는 별명을 지정해 줘야한다.
객체에 속성에 접근하려면 obj.x;  obj라는 개체이름에 .을붙여서 접근한다.
```

### 배열

배열에 담는 데이터는 객체의 경우와 달리 **요소(element)** 혹은 **항목(item)**이라고 부른다.

배열에는 순서가 존재하며 , 이름대신에 인덱스를 이용해 값에 접근한다.

```html
// 배열의 생성
const arr = ['one', 'two', 'three'];

// 인덱스를 사용해 배열의 요소(element)에 접근할 수 있습니다.
// 배열 인덱스(index)는 0부터 시작합니다.
arr[0]; // === 'one'
arr[1]; // === 'two'
배열에 접근하려면 arr이라는 배열이름에 [0] 0번째 인덱스를 입력한다.
```



### boolean 타입

boolean 타입에 해당하는 값은 `true`, `false` 두 가지 밖에 없습니다. 이 값들을 '진리값'이라고 부릅니다.

```html
1 < 2; // true
1 > 2; // false
3 === 3; // true   // === 같은지
3 !== 3; // false  // !== 같지 않은지
Number.isFinite(Infinity); // false   // isfinite 유한한 숫자 // infinity 는 무한하다
Number.isNaN(NaN); // true
'hello'.includes('ll'); // true
```

#### 논리연산자

```html
// 논리 부정 (logical NOT)
!true; // false
!false; // true

// 삼항 연산자 (ternary operator)
true ? 1 : 2; // 1    // if 와비슷하다 true 면 앞에 1이 출력
false ? 1 : 2; // 2   // false 면 뒤에 2가 출력된다.
```

#### 연산자 우선순위

```html
true || true && false; // true    // true && false 가먼저 실행되고 true || true 가 실행된다.
(true || true) && false; // false   // 먼저 실행됫으면 좋겟다고 생각하면 () 를 사용

or || 는 true 가 하나만있어도 true
and && 는 하나만false면 false
```

#### 분배법칙 , 드 모르간의 법칙

| a     | b     | !(a \|\| b) | !a && !b |
| ----- | ----- | ----------- | -------- |
| true  | true  | false       | false    |
| true  | false | false       | false    |
| false | true  | false       | false    |
| false | false | true        | true     |

#### truthy & falsy

 JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `''`

or  ||연산자는 처음으로 만나는 연산자 truthy 가 맞으면 앞의 truthy 가 반환한다.

```html
1 || 0     // 1 이 출력됨.

	// 처음으로오는값이 truthy 이면 앞에 truthy 가 출력된다.

0 || 1   //   1 이 출력된다.

처음으로 만나는 연산자가 falsy면 뒤에 값이 정해진다.
```

and  && 연산자는 처음으로 만나는 연산자가 truthy 이면 뒤에 오는 값을 반환한다.

```html
' ' && true = ''

  // ` ` 처음으로 오는값이 fasly 이면 앞의 처음오는 값이 출력된다.

1 && true = true

  //  1 처음으로 오는값이 truthy 이면 뒤에있는 값이 출력된다.
```

