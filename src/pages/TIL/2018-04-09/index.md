---
title: JavaScript 1일차 수업내용정리
date: "2018-04-09"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# JavaScript

1. javascript 는 세미콜론(;)으로 구분된 구문으로 끝난다.
2. javascript 는 대소문자를 구분하여야 한다.
3. javascript 는 공백에 민감하지 않다.



### 값과 리터럴

1. 프로그래밍은 데이터의 실체 값을 다루는 행위이다.

2. 리터럴은 값을 표현하는 방법이다.

   ```js
   'hello' === "hello"
   => true

   작은따옴표를 쓰든 큰따옴표를쓰든 같다.

   null // '존재하지 않음'을 나타내는 값
   undefined // '정의된 적 없음'을 나타내는 값
   ```

   ### 값의 타입

   값의 type이라는 정보가 같이 저장된다.

   ```js
   typeof 1 // 'number'
   typeof 2.5 // 'number'
   typeof 'hello world' // 'string'
   typeof true // 'boolean'
   typeof null // 'object'
   typeof undefined // 'undefined'
   ```

   ​

### 표현식과 연산자

문장의 어떤부분을 값으로 변환될수 있는 부분을 표현식 이라 한다.

가장 간단한 표현식은 리터럴 또는 변수의 이름이다.  리터럴 표현식의 값은 그 리터럴 값 자신이고 변수 표현식의 값은 해당 변수가 저장하거나 참조하는 값이다.



### 변수

값을 재사용하기위해 값에 붙일 이름을 선언하는것을 변수라고한다.

변수의 이름은 모두 식별자라고 한다.

변수선언

```js
let v;
```

이름의 값을 연결하는게 값의 대입

```js
v = 1;
```

변수의 선언과 값의 대입

```js
let x = 1;
```

let 과 const 의 차이

```js
let v = 1;    // let에는 값을 여러번 다시 대입할수있다.
const c = 2;  // const 변수에는 값을 한 번만 대입할 수 있습니다.
```

const: 바뀔 필요 없는 변수를 담아놓을 때

let: 재대입이 가능

- let을 사용하면 의도치 않게 다른 값이 재할당이 될 수 있으므로, 진짜 필요할 때만 사용하고 웬만하면 const를 사용하는 것이 좋다!

```js
const jeesoo; // (X) 선언과 동시에 값을 담아야 함

let seven = 7;
let seven = 77; // (X) 재선언이 안됨

seven = 77; // (O) 재할당은 가능
```

const 는 변수를 선언할 때는 반드시 선언 시에 값을 대입해주어야 합니다

### undefined

변수를만들고 값을 대입해주지않으면 undefined 를 반환한다.

### 제어 흐름

#### if (표현식)

조건문(conditional): "만약 어떤 내용이 참이라면 이걸 실행하고, 참이 아니면 저걸 실행해"

```js
if (2 > 1) {
  console.log('괄호 안의 값이 `true`이면 이 영역의 코드가 실행됩니다.');
} else {
  console.log('괄호 안의 값이 `false`면 이 영역의 코드가 실행됩니다.');
}
```

javascript 는 위에서 아래로 실행된다.

#### while 구문

반복문(loop): "어떤 내용이 참인 동안에는 이걸 계속 실행해"

```js
let i = 0;    // i 라는 변수를 만들고 0을 대입한다
while (i < 5) {  // while 은 여러번 실행시킬때 쓴다.
				//  (1 < 5) 표현식의값이 true면 아래 코드가 실행.
  console.log(`이 코드는 ${i + 1}번 째 실행되고 있습니다.`);

  i++;
}
```

여러번 반복 시키고싶을떄는 변수의 0을 대입한다.

#### for 구문

while 구문과 똑같이 동작하지만 코드의 줄이 줄기때문에 for구문을 조금더 이용한다.

```js
for (let i = 0; i < 5; i++) { // (초기값; 조건; 갱신)
  console.log(`이 코드는 ${i + 1}번 째 실행되고 있습니다.`);
}
```



### 함수

function 키워드

값뿐아니라 함수에도 이름을 붙여서 재사용 할	수있다.

```js
function add(x, y) {
  return x + y;  // return 뒤에 표현식을 쓰면 반환값으로 돌려준다.
}
```

코드뭉치의 빈칸을만들고 다른값을 채워 넣을수있다. 이것을 매개변수라한다.

```js
function multiply (x,y){
  return x * y;
}
위에 함수를 이렇게도 할수있다.
const multiply = (x, y) => x * y;  // arrow function 최신함수
```



### 객체

javascript 는 객체 라는 통이있다. 객체라는 통에는 이름에 값이 연결되어 저장된다.

이를 이름-값 쌍 혹은 객체의 속성이라고한다.

객체를 사용할때에는 속성 이름을 이용한다.

객체라는 값을 쓸때는 리터럴을 쓴다.

객체는 순서가없다.

```js
obj라는 변수의 객체라는 값이 저장되있다.

const obj = {
  x: 0, // 객체의 속성. 속성 이름: x, 속성 값: 0
  y: 1 // 객체의 속성. 속성 이름: y, 속성 값: 1
}

// 객체의 속성에 접근하려면
obj.x   // obj.x도 표현식이다 값으로 변환되기때문.
.을 사용하여 접근한다.

// 객체의 속성 변경하기
obj.x = 3;

// 객체의 속성 삭제하기
delete obj.x;

객체는 값을 저장하고 변경,삭제 할수 있다.
```

함수도 값이 될수있다.

객체안에 들어있어서 . 을찍어서 사용하는 함수를 메소드라한다.



### 배열

자주쓰이는 통은 객체와 배열이있다.

객체는 {} 중괄호 배열은 []대괄호 를사용한다.

배열은 객체와달리 요소 항목 이라한다.

객체와 다른점은 배열은 순서가있다. 그순서를 index라한다.

```js
// 배열의 생성
const arr = ['one', 'two', 'three'];  // 3 값이들어있는 배열
```

배열 인덱스(index)는 0부터 시작 한다.

```js
arr[0]; // === 'one'
arr[1]; // === 'two'
```

배열안에는 배열,객체 통안에 중첩되서 포함 할 수 있다.

```js
// 여러 타입의 값이 들어있는 배열
[1, 2, 3, 'a', 'b', {x: 0, y: 0, name: '원점'}];
```

배열의 맨뒤에 요소를 추가할때는 push 를 사용한다

```js
arr.push('four');

//push를통해 four를 추가하고 확인해보면 배열의 맨뒤에 요소가 추가된다.

 arr
=> [ 'one', 'two', 'three', 'four' ]
```

배열의 요소 삭제하기

```js
// 배열의 요소 삭제하기
arr.splice(3, 1); // 인덱스가 3인 요소부터 시작해서 하나를 삭제합니다.
```

배열을 조작할때는 메소드를 써서 사용한다.



### 식별자

변수의 이름은 모두 식별자입니다. 어떤 객체를 유일하게 식별하기 위해 사용된다.

- 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
- 단, 숫자로 시작되어서는 안 된다.
- 예약어는 식별자가 될 수 없다.

```js
const foo; // O
const _bar123; // O
const $; // O - jQuery가 이 식별자를 사용합니다.
const 7seven; // X
const const; // X - 예약어는 식별자가 될 수 없습니다.
```

정해진 규칙이 있다.



### 변수이름

변수이름에는 띄어쓰기가 안된다.

띄어쓰기가 안되기때문에 CamelCase , Snake case방식을 사용한다.

#### Camel Case

대문자를 사용하여 띄어쓰기를 표현하는 방식

```js
// Camel case
let fastCampus;
let fooBar;
```

camel case 를 많이 사용한다.

#### Snake case

밑줄을가지고 띄어쓰기를 표현하는 방식

```js
// Snake case
let fast_campus;
let foo_bar;
```



## number타입

2진수

111 = 7   // 1/2/4

10101 = 21 // 1/2/4/8/16  0값은 안더한다. 2,8 은 뺴고 나머지를 더한다.



### 정수인지 실수인지 판단하기

Number.isInteger 메소드를 사용하여 어떤수가 정수인지 실수인지 알아낼수있다.

```js
Number.isInteger(1); // true  //정수
Number.isInteger(0.1); // false  //실수
```



### number 타입에 대한 연산

number 타입에 대해 아래와 같은 연산자(operator)를 사용해 연산을 할 수 있습니다.

```js
// 산술 연산 (arithmetic operators)
1 + 2; // 더하기
3 - 4; // 빼기
5 * 6; // 곱하기
7 / 8; // 실수 나누기
14 % 3; // 나머지
2 ** 3; // 거듭제곱

// 비교 연산 (comparison operators)
1 < 2; // 작다
3 > 4; // 크다
5 <= 5; // 작거나 같다
6 >= 7; // 크거나 같다
8 === 8; // 같다
8 !== 9; // 같지 않다

// 증가/감소 연산 (incresement/decreasement operators)
let a = 1; ++a; // 연산결과는 2, a는 2
let b = 1; b++; // 연산결과는 1, b는 2
let c = 1; --c; // 연산결과는 0, c는 0
let d = 1; d--; // 연산결과는 1, d는 0

// 할당 연산 (assignment operators)
// x에 1을 더한 후 다시 x에 할당하기. 결과적으로 x에는 1이 저장됩니다.
let x = 0;
x += 1;

// `+=` 연산은 아래 연산과 완전히 같은 동작을 합니다.
x = x + 1;

// 덧셈 뿐 아니라 다른 모든 산술 연산자에 대해 할당 연산을 할 수 있습니다.
x -= 1;
x *= 2;
x /= 3;
x %= 4;
x **= 5;
```

### 부동 소수점

```js
0.1 + 0.2;  // 0.30000000000000004
```

컴퓨터는 소수를 2진수를 이용해 저장하기 때문에 오차가 존재한다.이오차를 반올림 오차라 한다.

### number 타입의 특이한 값들

다음 값들도 모두 number 타입에 속합니다.

```js
NaN
-0
Infinity
-Infinity
```

#### NaN

`NaN`은 **'Not a Number'**의 약자로, 계산 불가능한 연산의 결과값을 나타내기 위해 사용됩니다.

```js
0 / 0; // NaN
1 * 'hello'; // NaN
```

NaN은 모든숫자들과 같지 않다.

자기 자신과도 NaN은 같지 않다.

```js
Number.isNaN(NaN)  // NaN인지 아닌지 확인하는 메소드
=> true
NaN === NaN
=> false
```



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

parseFloat 은 실수를 숫자 실수로 바꿔준다.

### 숫자를 문자로 바꾸는 방법

.toString();

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
//내림
Math.floor(3.6)
=> 3
//최대값
Math.max(3,1,5)
=> 5
//최소값
Math.min(3,1,5)
=> 1
//랜덤값
Math.random(); // 0과 1 사이의 값이 임의로 반환됩니다.
```

주사위 만들기

```js
Math.ceil(6 * Math.random())
//random에서 소수로나오는값을 ceil을사용하여 올림해줘서 정수를반환
```

##### 삼각함수, 로그함수, 지수함수
```js
Math.sin
// 숫자의 사인을 반환한다.
Math.cos
// 숫자의 코사인을 반환한다.
Math.tan
// 숫자의 탄젠트을 반환한다.

Math.log
// 밑을 자연상수(e)로 하는 로그함수, ln(x)와 같다.

  ex)
  Math.log(-1); // NaN, 정의범위 초과
  Math.log(0);  // -Infinity, 무한
  Math.log(1);  // 0
  Math.log(10); // 2.302585092994046

Math.exp
// 밑을 자연상수로 하는 지수함수 (e의 x승)

  ex)
  Math.exp(-1); // 0.36787944117144233
  Math.exp(0);  // 1
  Math.exp(1);  // 2.718281828459045

Math.sqrt
// 제곱근

  ex)
  Math.sqrt(9); // 3
  Math.sqrt(2); // 1.414213562373095

  Math.sqrt(1);  // 1
  Math.sqrt(0);  // 0
  Math.sqrt(-1); // NaN
  Math.sqrt(-0); // -0

```


### 트랜스파일러 와 폴리필

최신문법을 사용하여 개발을하고 나중에 트랜스파일러나 폴리필을 이용하여 구형버전에서도 동작할수있게 만들어 줄수있다.

### 트랜스파일러 (Transpiler)

트랜스파일러는 최신 버전 JavaScript의 **문법**을 **똑같이 동작하는 이전 버전 JavaScript의 문법**으로 바꾸어주는 도구입니다. 마법같은 도구죠! 이를 이용해 개발자는 최신 버전으로 코딩을 하고, 실제로 사용자에게 배포할 코드는 구형 브라우저에서도 잘 동작하도록 변환해줄 수 있습니다. 요즈음 많이 사용되는 트랜스파일러에는 [Babel](https://babeljs.io/), [TypeScript](http://www.typescriptlang.org/) 같은 것들이 있습니다.

### 폴리필 (Polyfill)

JavaScript를 실행하는 구동 환경에는 여러 가지 **문법과 기능**이 추가됩니다. 이를 구형 환경에서도 사용할 수 있도록 똑같이 구현해놓은 라이브러리를 폴리필(polyfill) 혹은 심(shim)이라고 부릅니다. 본인이 개발하는 프로그램이 어느 정도까지의 구형 환경을 지원해야 하는지를 결정한 후, 적절한 폴리필을 프로젝트에 추가하세요. 예를 들어, [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 활용한 웹 사이트를 Internet Explorer 10에서도 문제없이 동작할 수 있도록 만드려면 [해당 기능에 대한 폴리필](https://github.com/github/fetch)을 프로젝트에 추가시키세요.

###



