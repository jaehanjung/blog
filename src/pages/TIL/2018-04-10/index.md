---
title: JavaScript 2일차 string,boolean타입
date: "2018-04-10"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# javascript



## string 타입

컴퓨터 분야에서는 문자의 나열(string)이라는 뜻에서 문자열을 'string'이라 부릅니다.



### 유니코드

4bit = 16진수 한자리

1byte = 8bit = 두자리

2byte = 16bit = 네자리수

utf-16 : 유니코드 코드포인트를 그대로 메모리에 저장

utf-8 : 영문 -> 1바이트 다른문자 -> 2바이트 이상

### ASCII

ASCII 코드와 유니코드 2가지가 있다.

ASCII코드는 1바이트로 문자를표현

영문을 표현하는데 효율적이다.



### 문자열 리터럴

JavaScript는 문자열 값을 표현하기 위한 여러 가지 리터럴을 제공합니다.

```js
'hello'
"hello 안녕하세요"
`hello world` // backtick 탬플릿 리터럴
```

따옴표는 표기법일 뿐, 실제 저장되는 값에 영향을 미치지는 않습니다. 예를 들어, `hello`라는 문자열을 표현하기 위 셋 중에 어떤 리터럴을 사용해도 실제 저장되는 값이 달라지지는 않습니다.

```js
'hello' === "hello"; // true
```

### 템플릿 리터럴 (문서의빈칸)

ES2015에서 도입된 템플릿 리터럴(template literal)은 문자열 리터럴의 일종으로, 추가적인 기능을 지원합니다. 템플릿 리터럴을 사용하려면 backtick(`)으로 문자열을 둘러싸면 됩니다.

```js
`hello world`
```

템플릿 리터럴의 내삽(interpolation) 기능을 이용하면, 문자열을 동적으로 생성하는 코드를 쉽게 작성할 수 있습니다.

```js
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;
console.log(sentence);

// 일반적인 문자열 리터럴로는 아래와 같이 해야 합니다.
name1 + ' meets ' + name2 + '!';
```

또한, 템플릿 리터럴을 사용하면 **여러 줄로 이루어진 문자열**을 쉽게 표현할 수 있습니다.

```js
`hello
world
hello
javascript!
`

// 일반적인 문자열 리터럴로는 아래와 같이 해야 합니다.
'hello\nworld\nhello\njavascript!\n'
```



### 문자열과 연산자

수 타입 뿐 아니라 문자열에 대해서도 여러 가지 연산자를 쓸 수 있습니다.

```js
// 문자열 연결하기
'hello' + 'world'; // 'helloworld'

// 등호 비교
'hello' === 'hello'; // true
'hello' !== 'hello'; // false

// 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
'a' < 'b'; // true
'aaa' < 'abc'; // true
'a' < 'Z'; // false
'한글' < '한국어'; // false
'2' < '10'; // false

// 문자열을 배열로 바꾸기
[...'hello']; // ['h', 'e', 'l', 'l', 'o']
```

문자열도 객체는 아니지만 . 을사용해 객체처럼 속성이나 메소드를 쓸수있다.



### 속성 및 메소드

number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있습니다. 아래는 자주 쓰이는 몇 개의 속성과 메소드에 대한 예제입니다.

```js
// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); // '***'

// 특정 문자열이 포함되어 있는지 확인하기

// 왼쪽에있는 문자열에 오른쪽 문자열이 포함되어있는지
'hello javascript'.includes('hello'); // true

// 왼쪽문자열이 오른쪽문자열로 시작하는지
'hello javascript'.startsWith('he'); // true

// 이 문자열의 끝이 특정 문자열로 끝나는지
'hello javascript'.endsWith('ript'); // true

// 오른쪽에있는문자열이 몇번째에 있는지
'hello javascript'.search('java'); // 6

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기(바꿔치기)
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // 'll'
'hello'.slice(2, 3);
=> 'l'
   'hello'.slice(2, 5);
=> 'llo'
만약 hello라는 문자열을 잘라서 새문자열로 만들고싶다고 할때 hello에번호를 매긴다.
hello h앞에부터 0,1,2,3,4,5 번호를 매긴후 하면 쉽다.


// 좌우 공백문자를 제거한 새 문자열 생성하기
// 왼쪽오른쪽 공백문자를 제거한다.
'   hello  '.trim(); // 'hello'
// 왼쪽 공백만 제거한다.
'   hello  '.trimLeft(); // 'hello  '
// 오른쪽공백만 제거한다
'   hello  '.trimRight(); // '   hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
// 앞쪽에 공백을 줘서 총 8글자 였으면 좋겟다.
'hello'.padStart(8); // '   hello'
// 뒤쪽에 공백을 줘서 총 8글자 였으면 좋겟다.
'hello'.padEnd(8); // 'hello   '

// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
// split 를 사용하여 느낌표로 단어를 나눠서 배열로 만들어줄수있다.
'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']

// 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
// 모두 소문자로 만들어준다.
'Hello JavaScript'.toLowerCase(); // 'hello javascript'
// 모두 대문자로 만들어준다.
'Hello JavaScript'.toUpperCase(); // 'HELLO JAVASCRIPT'
```

변수에 들어있는 문자가 소문자인지 아닌지 확인하는 코드

```js
str = 'Hello';
let str = 'Hello';

str === str.toLowerCase()
=> false

let str = 'hello';

str === str.toLowerCase()
=> true
```



## boolean 타입

boolean 타입에 해당하는 값은 `true`, `false` 두 가지 밖에 없습니다. 이 값들을 '진리값'이라고 부릅니다. 프로그래밍에서의 진리값은 어떤 조건이 참인지 거짓인지를 나타내기 위해 사용됩니다.

```js
1 < 2; // true
1 > 2; // false
3 === 3; // true
3 !== 3; // false
// 유한한 수인지 아닌지
Number.isFinite(Infinity); // false

// NaN 인지 아닌지
Number.isNaN(NaN); // true

// 왼쪽에있는 문자열에 오른쪽 문자열이 포함되어있는지
'hello'.includes('ll'); // true //
```

### 삼항 연산자

피연산자가 3개라서 삼항 연산자라 부른다.

```js
삼항 연산자 (ternary operator)
첫번쨰 연산자가 true 이면 2번째 연산자가 실행되고
true ? 1 : 2; // 1
첫번쨰 연산자가 false 이면 3번쨰 연산자가 실행된다.
false ? 1 : 2; // 2

```

```js
function ternary(condition, x, y){
  if(condition){
    return x;
  } else{
    return y;
  }
}

값
 ternary(true, 1, 2)
=> 1
   ternary(false, 1, 2)
=> 2
```

### 연산자 우선순위 (Operator Precedence)

한 구문에 여러 개의 연산자를 이어서 쓴 경우, 어떤 연산자는 먼저 계산되고 어떤 연산자는 나중에 계산됩니다. 이는 연산자 우선순위(operator precedence)에 의해 결정됩니다.

```js
 // && 부터 계산이 된다.
true || true && false; // true
// ()가먼저 계산이된다.
(true || true) && false; // false
true || false && false; // true
(true || false) && false; // false
```

### 분배법칙

```js
// 분배 법칙
a || (b && c) === (a || b) && (a || c);
a && (b || c) === (a && b) || (a && c);
```

### 드 모르간의 법칙

```js
// 드 모르간의 법칙
!(a || b) === !a && !b;
!(a && b) === !a || !b;
```



### truthy & falsy

true 로취급되는값은 truthy

false 로취급되는값은 falsy

JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `''`



## null과 undefined

JavaScript에는 '없음'를 나타내는 값이 두 개 있는데, 바로 `null`와 `undefined`입니다. 두 값의 의미는 비슷하지만, 각각이 사용되는 목적과 장소가 다릅니다.

JavaScript는 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 `undefined`를 반환합니다.

```js
let foo;
foo // undefined  // 변수에 아무것도 들어있지 않다고해서 undefined 를반환

const obj = {};
obj.prop; // undefined 객체에 들어있지 않은 속성 이름을 부르면 undefined 를반환
```

대입한 적 없는 변수 혹은 속성과, 명시적으로 '없음'을 나타내는 경우를 **구분**을 할 수 있어야 코드의 의미가 명확해 질 것입니다. **프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용**하는 것이 좋습니다.

다만, 객체를 사용할 때 어떤 속성의 부재를 `null`을 통해서 나타내는 쪽보다는, 그냥 그 속성을 정의하지 않는 방식이 간편하므로 더 널리 사용됩니다.

```js
// 이렇게 하는 경우는 많지 않습니다.
{
  name: 'Seungha',
  address: null
}

// 그냥 이렇게 하는 경우가 많습니다.
{
  name: 'Seungha'
}

// 어쨌든 이렇게 하지는 말아주세요.
{
  name: 'Seungha',
  address: undefined
}
```



### Null Check

 어떤 값이 `null` 혹은 `undefined`인지 확인하는 작업을 **null check**라고 합니다. null check는 간단히 등호를 이용해서 할 수 있습니다.

```js
function printIfNotNull(input) {
// input 이 null도아니고 undefined도 아니면 출력하고 혹시 null이라면 아무것도 출력하지 마라.
  if (input !== null && input !== undefined) {
    console.log(input);
  }
}
```

그런데 매 번 위처럼 긴 비교를 해야 한다는 것은 골치아픈 일입니다. 사실은 위 `if` 구문 안에 있는 식을 다음과 같이 줄여 쓸 수 있습니다.

```js
// 아래 세 개의 식은 완전히 같은 의미입니다.
input !== null && input !== undefined;
input != null;
input != undefined;

// 아래 세 개의 식은 완전히 같은 의미입니다.
input === null || input === undefined;
input == null;
input == undefined;

== 비교도 할수있지만 === 짜리를 써서 비교하는것이 좋다. 다만 null체크를 할때는 == 짜리가 편한다.

null === undefined; // false
null == undefined;  // true

2개짜리 등호를 쓰면 null == undefined 를 쓰면 같고 나머지 모든 경우에는 다 false가 나온다.
null == 1       // false
null == 'hello' // false
null == false   // false

undefined == 1       // false
undefined == 'hello' // false
undefined == false   // false
```


### or연산자와and연산자

3 || 4 or연산자는 둘중하나만 true 라도 true 를 내보내기때문에 3을출력하고 or연산자는 왼쪽에서부터 계산이된다

3 && 4 and 연산자는 3도 truthy 4도 truthy 이기떄문에 4를 출력한다.

0 && 4 는 둘다 falsy 이기떄문에 0을 출력한다.  0 은 falsy 이다



### 2중 for문

for 문이 2번 사용될경우 2번째  j for 문이 루프를 다돌고난후 다시 첫번째 i for 문이 돈다.

```js
    let str = ''
    function stair(n){
      for(let i = 0; i< n; i++){
        console.log('안쪽루프시작')
        for (let j =0; j< i ; j++){
        console.log(`i:${i}, j:${j}`);
        }
        console.log('안쪽 루프 끝')
      }
    }

    값
    stair(2)
    안쪽루프시작
    안쪽 루프 끝
    안쪽루프시작
    i:1, j:0
    안쪽 루프 끝

    stair(3)
    안쪽루프시작
    안쪽 루프 끝
    안쪽루프시작
    i:1, j:0
    안쪽 루프 끝
    안쪽루프시작
    i:2, j:0
    i:2, j:1
    안쪽 루프 끝
JavaScript에서 식별자로 허용되지 않는 문자가 들어간 속성 이름을 사용해야 하는 경우에는 반드시 **대괄호 표기법**을 사용해야 합니다.
```
```js
// 대괄호 표기법 (Bracket notation)
person['한국 나이'] = 20;
```

변수에 대입되어 있는 문자열과 같은 이름의 속성을 가져올 떄도 반드시 대괄호 표기법을 사용하여야 한다.

```js
 const obj = {a:1,b:2}
=> undefined
obj.a
=> 1
obj['a']
=> 1
const propName = 'a'
=> undefined
obj[propName]
=> 1
```



