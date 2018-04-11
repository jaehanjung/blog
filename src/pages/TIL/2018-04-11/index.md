---
title: javascript 3일차 함수,스코프,제어구문
date: "2018-04-11"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# javascript


## 함수

**큰 프로그램을 잘게 쪼개어 특정 코드 뭉치를 반복해서 사용할 수 있도록 묶어놓은 코드 뭉치의 단위**를 말합니다. 함수를 어떻게 작성하느냐에 따라서 코드의 유지보수성과 가독성이 크게 달라집니다.



### 함수의 구성 요소

두 값을 더하는 아주 간단한 함수를 정의해 보겠습니다.

```js
function add(x, y) {
  const result = x + y;
  return result;
}

```

위에서 `add`라는 **이름**을 갖는 함수를 정의했습니다. 괄호 안의 `x`와 `y`를 x, y를 **매개변수(parameter)**라 하며, `return` 뒤에 오는 값을 **반환값(return value)**이라고 합니다.

함수를 정의했다면, 아래와 같이 함수 이름 뒤에 괄호를 붙여서 이 함수를 실행시킬 수 있습니다. 이를 함수의 **호출(function call)**이라고 합니다.

```js
add(2, 3); // 5

```

여기서 괄호 안에 넘겨준 `2`, `3`을 **인수(argument)**라고 부릅니다.



### 함수 실행 순서

```js
console.log(1);
function arr(){
  console.log(2);
}
console.log(3);
arr();
console.log(4);

결과값
1
3
2
4

여기서 유의할 점은, 함수를 정의하는 것만으로는 함수 내부에 있는 코드가 실행되지 않는다는 것입니다. 함수 내부의 코드를 실행하려면, 반드시 함수를 호출해주어야 합니다.
```

### 매개변수와 인수

위 코드의 `x`와 `y`를 가지고 **매개변수**라고 합니다. 매개변수는 변수의 일종으로, 함수 호출 시마다 인수가 매개변수에 대입됩니다. 위의 코드에서 `add(2, 3)`과 같이 호출하면 매개변수 `x`에는 `2`가, `y`에는 `3`이 대입된 채로 나머지 코드가 실행됩니다.

여기서 주의할 점은 매개변수는 바깥에서 선언된 변수와는 관계없는 독립적인 변수라는 것입니다. 예를 들어, 함수 호출 시 인수가 들어갈 자리에 변수를 써주고, 함수 내부에서 매개변수에 새로운 값을 대입한다고 하더라도 인수로 써준 변수의 값이 변경되지 않습니다.

```js
function reassign(x) {
  x = 2;
  return x;
}

const y = 1;
const result = reassign(y);

console.log(y); // 1
console.log(result); // 2
```

### 반환값

`return` 구문은 함수의 반환값을 결정합니다. `return` 키워드 바로 다음에 오는 값이 함수 호출의 결과값으로 반환되며, 반환되는 즉시 함수 실행이 끝납니다.

```js
function add(x, y) {
  return x + y;
  console.log('이 부분은 실행되지 않습니다.');
}
add(1, 2); // 3
// 3 외에 따로 출력되는 내용이 없습니다.
```

반환값은 항상있다 . 반환값이 없는 함수는 없다.

아래와 같이 `return` 뒤에 아무 값도 써주지 않거나, 아예 `return` 구문을 쓰지 않으면 함수는 `undefined`를 반환합니다.

```js
function returnUndefined() {
  return;
}
function noReturn() {}
returnUndefined(); // undefined
noReturn(); // undefined
```

### 스코프 (Scope)

함수의 매개변수를 비롯한, 모든 변수들은 특별한 성질을 갖습니다.

변수들은 모두 유효범위가 있다.

```js
function add(x, y) { // 변수 `x`와 `y`가 정의됨
  return x + y;
}
add(2, 3);
console.log(x); // 에러!

여기서x라는 변수는 함수내부에서만 사용이 가능하다.
함수바깥에서는 사용할수없다.
변수는 코드의 일정범위 안에서만 유효하다.
x라는 변수에 스코프는 함수 내부이다.
```

위 예제에서의 `x`와 `y`는 함수 `add`의 내부 코드 안에서만 접근할 수 있습니다. 즉, 매개변수는 **함수 스코프**를 갖습니다.



### 스코프 연쇄 (Scope Chain)

바깥스코프에 있는 변수에저장되있는값은 자유롭게 사용할수있다.

스코프가 여러게 중첩되는걸가지고 스코프 체인이라한다.

`add5` 함수의 `return` 구문에서 함수 바깥에 있는 변수 `five`의 값을 가져와 사용했습니다. 이는 심지어 함수가 여러 겹 중첩(nested)되어 있다고 하더라도 가능합니다.

```js
const five = 5;
function add5(x) {
  return x + five; // 바깥 스코프의 `five` 변수에 접근
}
add5(3); // 8
```

코드의 실행 흐름이 식별자에 도달하면, 먼저 그 식별자와 같은 이름을 갖는 변수를 현재 스코프에서 찾아보고, 변수가 존재하면 그것을 그대로 사용합니다. 만약 현재 스코프에서 변수를 찾지 못하면 바로 바깥쪽 스코프에서 변수를 찾아봅니다. 있으면 사용하고 없으면 바깥쪽 스코프로 올라가서 다시 찾아보는, 이 과정이 되풀이됩니다. 이런 과정을 **스코프 연쇄(scope chain)**라 하고, 이 과정은 가장 바깥쪽에 있는 스코프를 만날 때까지 반복됩니다. 가장 바깥쪽 스코프까지 찾아봤는데도 같은 이름의 변수를 찾지 못하면, 그제서야 에러가 발생됩니다.

가장 바깥에 있는 스코프를 최상위 스코프(top-level scope) 혹은 **전역 스코프(global scope)**라고 부릅니다. 위 코드에서 `five`가 정의된 스코프가 바로 전역 스코프입니다.

```js
const five = 5;
function add5(x) {
  function add(y) {
    return x + y;
  }
  return add(five);
}
add5(3); // 8
```

### 변수 가리기 (Variable Shadowing)

단일 스코프에서는 같은 이름을 갖는 서로 다른 변수가 존재할 수 없습니다. 하지만 스코프 연쇄가 일어나면 이야기가 달라집니다. 아래의 코드에서는 `x`라는 이름을 갖는 변수가 세 번 정의되었습니다.

```js
const x = 3;

function add5(x) { // `x`라는 변수가 다시 정의됨
  function add(x, y) { // `x`라는 변수가 다시 정의됨
    return x + y;
  }
  return add(x, 5);
}

add5(x);

```

위와 같이, 바깥쪽 스코프에 존재하는 변수와 같은 이름을 같는 변수를 안쪽 스코프에서 재정의할 수 있습니다. 그렇게 되면 안쪽 스코프에서는 바깥쪽 스코프에 있는 이름이 **무시**됩니다. 이런 현상을 **변수 가리기(variable shadowing)**라고 합니다.

### 값으로서의 함수

JavaScript에서는 함수도 값입니다!

```js
function add(x, y) {
  return x + y;
}

const plus = add;
plus(1, 2); // 3
```

함수는 값이기떄문에 값으로 할수있는건 다할수있다.

함수를 선언한 뒤 변수에 대입해서 호출할 수도 있고, 혹은 배열이나 객체에 넣을 수도 있고, 심지어는 함수를 다른 함수에 인수로 넘기거나, 함수에서 함수를 반환할 수도 있습니다.

```js
// 함수를 배열이나 객체에 넣기
function add(x, y) {
  return x + y;
}
[add];
{addFunc: add};

// 함수를 인수로 넘기기
function isEven(x) {
  return x % 2 === 0;
}
[1, 2, 3, 4, 5].filter(isEven); // [2, 4]

// 함수에서 함수 반환하기
function createEmptyFunc() {
  function func() {}
  return func;
}
```

### 익명 함수 (Anonymous Function)

JavaScript에서 함수를 선언할 때 꼭 **이름**을 붙여주어야 하는 것은 아닙니다. 아래와 같이 이름을 붙이지 않은 함수를 가지고 **익명 함수(anonymous function)**, 혹은 함수 리터럴(function literal)이라고 합니다.

```js
// 두 수를 더해서 반환하는 익명 함수
function(x, y) {
  return x + y;
}
// 위의 익명 함수는 이름이 없어서 이름을 가지고 호출을 할 수 없습니다.

// 호출을 하려면 변수에 저장한 후에 변수의 이름을 통해 호출해야 합니다.
const add = function(x, y) {
  return x + y;
}
add(1, 2); // 3
```

익명 함수는 **함수를 만든 쪽이 아니라 다른 쪽에서 그 함수를 호출할 때** 많이 사용됩니다. 대표적인 경우는 **함수를 인수로 넘겨줄 때**입니다. 예를 들어, 배열의 `filter` 메소드에 필터링할 조건을 표현하는 함수를 넘겨주면, `filter` 메소드쪽에서 배열 각 요소에 대해 함수를 호출한 뒤, `true`를 반환한 요소만을 필터링해서 반환합니다.

```js
주로 이런곳에 쓰인다.
[1, 2, 3, 4, 5].filter(function (x) {
  return x % 2 === 0;
}); // [2, 4]
```

### 화살표 함수 (Arrow Function)

```js
화살표함수 동작 방식
function add(x,y){
  return  x+y
}
add(2,3)

위와같이 동작한다.
// 여기에서 x + y 는 바로 반환됩니다.
const add = (x,y) => (x + y);

add(2,3)
```

```js
// 바로 반환시키지 않고 function 키워드를 통한 함수 정의처럼 여러 구문을 사용하려면 ({...}) 로 둘러싸주어야 합니다.
// `=>` 다음 부분을 중괄호로 둘러싸면, 명시적으로 `return` 하지 않는 한 아무것도 반환되지 않습니다.
const add = (x, y) => {
  const result = x + y;
  return result;
}
```



## 제어 구문

이제까지 나온 코드 예제들은 아주 단순한 계산과 입출력을 하는 프로그램이었습니다. 하지만 실제로 사용되는 프로그램들은 복잡한 **논리 구조**를 갖고 있고, 그를 통해 프로그램의 여러 기능이 제대로 동작하는 것입니다. 이 챕터에서는 프로그램의 논리 구조를 표현할 수 있는 **조건문과 반복문**, 그리고 그 밖에 프로그램의 논리 구조에 영향을 미치는 구문들을 살펴볼 것입니다.

### `break`, `continue`

간혹 루프를 도중에 멈추거나, 남은 코드를 건너뛰어버리고 루프의 다음 번 차례로 넘어가야 할 필요가 있습니다. 이 때 사용되는 구문이 `break`와 `continue` 입니다.

```js
alert('퀴즈를 시작합니다.');
while (true) {
  const answer = prompt('빨강의 보색은 무엇일까요?');
  if (answer === '초록') {
    alert('정답입니다! 🎉');
    break; // 루프를 종료하고 다음 코드로 넘어감
  } else {
    alert('틀렸습니다! 다시 시도해보세요.');
  }
}
alert('퀴즈가 끝났습니다.');
```

```js
for (let i = 1; i < 100; i++) {
  console.log(`현재 숫자는 ${i} 입니다.`);
  if (i % 7 !== 0) {
  // continue 를만나면 다른코드를 무시하고 다시  i 에 1이 증가된상태로 for루프를 돈다
    continue; // 루프의 나머지 코드를 건너뜀
  }
  console.log(`${i}는 7의 배수입니다.`);
}
```

### 함수를 즉시 종료하기

`continue`와 `break`가 루프의 나머지 코드를 건너뛰는 효과를 갖는 것과 유사하게, `return`과 `throw`는 함수의 나머지 코드를 건너뛰고 함수를 즉시 종료시키는 결과를 낳습니다.

### `return`

`return`

```js
function translateColor(english) {
  switch (english) {
    case 'red': return '빨강색';
    case 'blue': return '파랑색';
    case 'purple':
    case 'violet': return '보라색';
    default: return '일치하는 색깔이 없습니다.';
  }
}

```

### `throw`

```js
function translateColor(english) {
  switch (english) {
    case 'red': return '빨강색';
    case 'blue': return '파랑색';
    case 'purple':
    case 'violet': return '보라색';
    default: throw new Error('일치하는 색깔이 없습니다.');
  }
}
```

