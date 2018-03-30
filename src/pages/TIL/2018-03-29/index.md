---
title: 18.03.29 HTML & CSS(아웃라인,tabindex,애니메이션) 8일차
date: "2018-03-29"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# HTML &CSS

### 암묵적 아웃라인

아웃라인은

H1 번으로 요소를만들고 제목을준다

P태그를 이용해 내용을 입력한다.

바로밑에 H2 번으로 제목을만들고

P태그로 내용을 입력한다 .



이렇게하면 2개의 독립적인 컨텐츠인 암묵적 아웃라인이 생긴다.(눈에보이지않는다.)



### 명시적으로 아웃라인을 만들어주는것

section 태그를 이용해서 내가 아웃라인을 명시적으로 만들어줄수있다.

이렇게 section 태그를 이용하면 h1태그밑에 section 태그를 사용하고 그밑에 h3를 사용해도 자동적으로 h2로 인식 된다.

div는 의미를 가진 태그가 아니라서 암묵적인 아웃라인은 되지만 명시적인 아웃라인은 아니다.



### tabindex

span태그보다 li태그의 "tabindex=0" 을 주는게 좋다.

span보다 li태그에 tabindex를 주는이유는 자식요소를 알아서 선택해준다.

물론 키보드포커스를 이렇게주는건 좋은방법이 아니다.

```html
<ul class="nav-menu">
                <li tabindex="0">
                    <span class="icon">HTML에 대해</span>
                    <ul class="sub-menu">
                        <li>
                            <a href="#">HTML5 소개</a>
                        </li>
                        <li>
                            <a href="#">레퍼런스 소개</a>
                        </li>
                        <li>
                            <a href="#">활용 예제</a>
                        </li>
                    </ul>
                </li>
          </ul>
```



### 배경이미지 사용

1.
  ```html
   일반적으로 이미지사용할때
     background-color: #988574;    //배경색
     background-image: url("../images/normal.jpg"); //배경이미지
     background-size: 200px 200px;  //이미지의사이즈
     background-repeat: no-repeat;  // 반복
     background-position: 50% 0%;  // 가운데 배치
  ```

2.
   ```html
   백그라운드 이미지 속기법
   background: #988574 url("../images/small.jpg") 100% 0% /200px no-repeat scroll;

   // 배경색 이미지 포지션(맨오른쪽으로 100%) /이미지크기 반복안시킨다 스크롤
   ```

   ​

3.
   ```html
   백그라운드 이미지로 linear-gradient 주기
   background-image: linear-gradient(180deg,  red, orange, yellow, green, blue, purple);

   그라디언트 쉽게 할수있는 사이트
   https://webgradients.com/

   ```




### 배경이미지 포지션

```html
 background-position: 100px 100px;

 포지션값 속기법은 가로부터 시작한다

 background-position: 50% 0%;

 백분율로 가운대 배치한다.

```



### font-size

em 단위는 상속받을수있기 떄문에 조심해서 써야 한다. em단위는 상속받은값의 곱하기이다.



### line-height

인라인일경우

글자 크기가 10px 일경우 line-height 를 20px 주게되면  한줄에 차지하는 높이가 20px 이다.

line-height 값은 넘버단위를 쓴다 `line-height: 1 `이런식으로 사용한다.



### text-shadow

글자에 그림자를 주는 속성

```html
text-shadow: 1px 1px 10px #181818;   // x값 ,y값,클수록그림자가 더욱커지고 흐려짐, 글자색
```



### 애니메이션

```html
 transition-property: color;  // property 속성 을정해준다.
 transition-duration: 1s;  //  duration 시간을 정해준다.
 transition-delay: 2s;   //  delay 딜레이를 줄수있다.
 transition-timing-function: ease-in-out; // 가속과 감속
```

### transform 알아보기

```html
  /* 360도 돈다 */
   transform: rotate(360deg);
  /* 왼쪽에서 오른쪽으로 50px 만큼 이동 */
   transform: translateX(50px);
  /* 위에서 아래로 50px 만큼 이동 */
   transform: translateY(50px);
  /* 작아지면서 로테이드 된다 확대도가능 */
   transform: scale(0.7);
  /* 속기법 연결해서 활용할수도있다. */
   transform: rotate(360deg) translateX(50px) scale(1.2);
```

###  css3 애니메이션 규칙

```html
/* 함수 keyframes 이다   함수처럼 사용가능*/
@keyframes text-ani{
  0%{
	 font-size: 20px;
    /* 스윙하는것처럼 움직인다. */
    transform: translate(0,0);
  }
  100%{
    font-size: 40px;
    transform: translate(500px,150px);
  }
}
```

```html
 animation-name,animation-duration 는 셋트 와야한다.

 /* 위에서 정의한  keyframes 에 정해놓은 이름을 해당 클래스의 사용 */
  animation-name: text-ani;

 /* 3초동안 실행 */
  animation-duration: 3000ms;

 /* 종료지점으로 돌아갈것인지 */
  animation-fill-mode: forwards;

  /* 얼마후에 시작할것인지 */
  animation-delay: 1s;

  /* 멈추지않는 애니메이션 무한반복 시켜준다 */
  animation-iteration-count: infinite;

  /* 부드러운애니메이션 */
  animation-direction: alternate;

  /* 처음에느리게 중간에빠르게 */
  animation-timing-function: ease-in-out;

  /* 일시정지 */
  /* animation-play-state: paused; */
