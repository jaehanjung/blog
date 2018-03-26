---
title: 18.03.26 HTML & CSS(목록,노멀라이즈,폰트) 수업 6일차
date: "2018-03-26"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# HTML & CSS(목록,노멀라이즈,폰트)

### 목록을 만드는 <ul> <ol> <li> 태그

목록을 만들려면 <ul> <ol><dl >태그를 사용한다.

1. <ol> 태그는 ordered list 의 약자로 숫자나 알바펫등 순서가 있는 목록을 만드는데 사용한다.
2. <ul>태그는 unordered list 의 약자로 순서가 필요없는 목록을 만든다.
3. <dl>태그는 definition list 의 약자로 사전처럼 용어를 설명하는 목록을 만든다.

<ol>과 <ul> 의 각항목들은 <li> 태그를 사용한다.



## normalize

여러가지 브라우저들이가지고있는 버그나 오차를 줄이고싶으면 노멀라이즈 css파일을 연동해논다.

[https://cdnjs.com/libraries/normalize]:

normalize 사이트에 들어가서

https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css 를 카피하고 작성중인 css 파일에

```
@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css);
```

이런식으로 넣어주거나

위에 url로 직접 들어간후에 코드를 복사해서

normalize.css 파일에 붙여넣어줘도 된다.

```
@import url("./normalize.css");
```



## web-font

font 는 기본글꼴을 선언하는게 중요하다.

```
font-family: Arial, Helvetica, sans-serif;   // 우선순위
```

*Android* ,*Windows*, *Mac OS* 에서 글꼴이 다다르다.

```
@font-face {
  font-family: 'Noto Sans Regular';// 이름은 사용자가 원하는 이름으로 바꿀수 있다.
  font-style: normal;
  font-weight: 400;  // 100~900 까지 있다. 기본설정이 400 이다.
  src: local('Noto Sans Regular'), local('NotoSans-Regular'), url('font/eot/NotoSansKR-Regular-Hestia.eot'), url('font/eot/NotoSansKR-Regular-Hestia.eot?#iefix') format('embedded-opentype'), url('font/woff/NotoSansKR-Regular-Hestia.woff') format('woff'), url('font/otf/NotoSansKR-Regular-Hestia.otf') format('opentype');
}
```

font 파일 연결

```
@import url("./fonts.css");
연결후에
body 태그에
font-family: 'Noto Sans Regular', sans-serif;
넣어준다.
```

web font 는 다운로드를 받고 보여지기 때문에 느리다는 단점이 있다.



### cdn 구글폰트사용

[https://fonts.google.com]:

원하는 글꼴을 선택후 +버튼은 누르면 설명이나온다.

@import 를 눌러서 url 복사해서 쓰면된다.



### ul태그에 블릭 , a태그에 밑줄을 없애준다.

```
/* 블릭기호 삭제 */

ul{
list-style-type: none;
}
a{
text-decoration: none;
}
```



###  부모로 부터 상속받는 속성

```
color: inherit; // 폰트 컬러를 부모의 속성을 이어받는다.
```



### 숨김콘텐츠 모듈화

```
legend의경우 화면에 보이지 않게끔 만들어준다.

읽어줄 목적으로만든 legend 이기 떄문에 display : none 은 권장하지 않는다.

<legend>검색 폼</legend>

/* 숨김 콘텐츠 */ 모듈
legend{
    width: 1px;  // 0으로했을경우 포커싱이 안됨.
    height: 1px;
    overflow: hidden;
    margin:  -1px;   // 마진을 음수값으로 줄수있다.
    position: absolute;
    clip: rect(0,0,0,0);    // clip 속성은 position:absolute 를 써야한다.
}
```



## float

1. float은 left, right 정렬만 가능할 뿐, 속성 값에 center를 주는 것은 불가능하다.

2. float 되는 순간 좌측 혹은 우측에 다른 요소를 배치하기 위해 **자신의 너비를 최소화**하게 된다.

3. float을 빈 엘리먼트로 clear 하는 방법 : float값이 지정된 엘리먼트 뒤에 빈 엘리먼트를 넣고 빈 엘리먼트에 clear: both 속성을 부여하여 clear해주는 방법입니다.

   단점 - 의미 없는 빈 엘리먼트를 사용하기 때문에 이 역시 권장되는 방법은 아닙니다.

   ## 가상 요소 선택자

   가상 요소 선택자(:before, ::before)

   1. :을 하나만 찍는 것은 예전 방식이고, 2개를 찍는 것이 요즘 방식이다.

   2. float을 가상 선택자 :after로 clear 하는 방법

      ```
      1. .clearfix::after {
           content: "";
           clear: both;
           display: block;
         }
         가상의 엘리먼트를 생성 시킨 다음 content:""; display: block; clear:both; 처리를 추가하게 되면 의미 없는 빈 엘리먼트를 사용하지 않으면서도 엘리먼트를 이용하여 깔끔하게 float이 clear 됩니다.
      ```

      ​
