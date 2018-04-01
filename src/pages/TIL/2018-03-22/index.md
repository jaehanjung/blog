---
title: html & css 수업 4일차
date: "2018-03-22"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# html & css

접근성 관점이 중요하다.

## 전역속성

```
id -> 아이디속성

class -> 클랜스

title -> 타이틀

lang ->언어

data-* ->사용자정의
```

## head 설정

```html
다음 2개의 meta 태그는 같은 인코딩 속성을 설정한다.

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
 HTML4.1 방식
<meta charset="UTF-8"> HTML5 방식

'lang'은 global attribute로 웹 접근성과 밀접한 관련이 있다.
'id'라는 content가 있을 때 lang="ko"면 "이드"라 읽고 lang="en"일 때 "아이디"라 읽는다.
<html lang="en"></html>

meta charset="UTF-8을 꼭 head가 들어가자마자 첫 줄에 선언해줘야 그 다음 줄부터 위치하는 tag들도 인코딩이 깨지지 않는다.

UI에 대한 변경을 해주고 싶을 때 사용하는 meta 속성
<meta name="viewport">

X는 비표준, UA는 User Agent를 의미한다.
content="ie=edge": 설치되어 있는 브라우저 중에 최신 버전으로 설정
"ie=8": 11 버전을 쓰고 있더라도 8 버전으로 렌더링
<meta http-equiv="X-UA-Compatible" content="ie=edge">

title 의경우 중요한 핵심 키워드 로 사용하는게좋다.
(시각 장애인의 경우 title 먼저 듣기 때문에 page에 타이틀은 핵심 키워드로 사용.)
```



## 설계단계

1. 구조

   1. html : 뼈대를 만드는 작업
   2. css :스타일을 입히는 작업
   3. javascript :동적으로 움직이는 작업

2. 섹셔닝

   1. header: 로고(h1), 멤버(ul), 검색 홈(form)
   2. nav: 메인 메뉴(ul) , 주요 nav는 한개만 하는게 좋다.
   3. main: 메인은 1개만 존재 해야 한다
      1. 트위터나 뉴스 콘텐츠처럼 배포 목적이 있을 때 article로 보는 것도 좋다.
      2. div로 구분할 시에 `헤딩 처리`를 통해 암묵적인 아웃라인을 형성햐여야 한다.
      3. section과 article도 역시 헤딩을 가져야 한다.
   4. 연관된 콘텐츠는 section, 독립된 콘텐츠는 주로 article로 마크업한다.
   5. article 은 section 과 비슷하지만 아티클은 독립적인 정보 기사 하나하나가 article 이다.
   6. footer: 주소(address), 저작권(div)

3. 네이밍 방식

   1. camelCase :낙타 표기법 (camel**C**ase)
   2. kebab-case : 하이픈 방식 (kebab-case)
   3. snake_case : 뱀방식 (type_name)

4. 마크업시작

   1. header.header+nav.navigation
   2. main.main+article.slogan+footer.footer

   ```html
   <body>
       <div class="container">
           <header class="header">헤더</header>
           <nav class="navigation">네비게이션</nav>
           <main class="main">메인</main>
           <article class="slogan">슬로건</article>
           <footer class="footer">푸터</footer>
       </div>
   </body>
   ```

   # css

   1. grid 속성

      1. ```html
         grid-template-columns: 20% 20% 20% 20% 20%;   // 20% 씩 가로로 박스를 만든다.
         grid-template-rows: 20% 20% 20% 20% 20%;	 // 20% 씩 세로로 박스를 만든다.
         ```

      2. `grid-column-start` 는 가로로 첫번째 에서 시작을 나타낸다.

      3. `grid-column-start`이 단독으로 사용될때는, 한개의 그리드 열(column)을 나타냅니다. 하지만, `grid-column-end` 속성을 같이 사용하면 여러 열(column)에 걸쳐 확장이 가능합니다. 음수로도 설정이 가능하다.

      4.  `grid-area`은 /(슬래쉬)로 구분지어 `grid-row-start`, `grid-column-start`, `grid-row-end`, `grid-column-end`순으로 입력 가능합니다.

         ```html
          grid-area:1/2/4/6   이런식으로 위에서부터 시작을 1번째 부터 그다음 옆으로 시작을 2번째 부터 그다음 높이의 끝이 4번째까지 그리고 옆으로 끝을 6번까지 실행
         ```

      5. 그리드의 모든 요소들은 `order`의 값이 0이지만, `z-index`와 같이 양수와 음수의 값 모두 설정이 가능합니다. ​
