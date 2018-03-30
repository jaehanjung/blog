---
title: 18.03.30 grid,figure,정의형 목록 dl태그 9일차
date: "2018-03-30"
category: "TIL"
thumbnail: "./TIL.jpg"
---

### grid

제일 좋은 그리드 컬럼은 12 컬럼 기반이고, 좀 복잡할 경우 16 컬럼을 사용한다. 더 세밀함이 요구될 때에는 24 컬럼을 사용한다.

```html
display: grid;
  grid-gap: 20px;   // 20px 씩 grid간의 간격을 준다.
  grid-template-columns: repeat(12, 65px);   // 12 컬럼을 65px 씩 만든다.
  grid-template-rows: auto auto;

  그리고 배치하고싶은 클래스마다  grid-area 를 사용하여 이름을 정해준다.
 .book{
  grid-area: book;
 }
 .news{
  grid-area: news;
 }
 .board{
  grid-area: board;
 }
 .site{
  grid-area: site;
 }
 .twitter{
  grid-area: twitter;
 }
  정해준후 grid 를 준 부모영역에 gird-area로 정한 이름을 넣어주는 만큼 배치된다.
  grid-template-areas:
    "book book book book news news news news news news news news"
    "board board board board twitter twitter twitter twitter twitter twitter twitter twitter";
```



### html에 이미지를 포함하는순간 대체 텍스트가필요하다

장식의 의미를 가진 이미지는 html 마크업에 안쓰고 css로  background-image 를 사용하는게 좋다.



### figure

이미지를 가르키는 텍스트가 있는경우 figure 태그를 사용한다. 묶어주는 역활.

```html
<figure class="recommend-book-cover">
   <img class="responsive" src="./images/book_rwd.jpg" alt="" aria-labelledby="cover-caption">
   <figcaption id="cover-caption">반응형웹 핵심 가이드북 도서</figcaption>
</figure>
```

![Chinese Salty Egg](./2018-03-30.png)

### 정의형 목록 dl 태그

한개이상의 dt 와 dd 가 올수있다.

dt와dd는 dt의값이 dd구나 라고 정의할수있다.(dt:이름 dd:값)

특징: 하나이상의 dt와 dd가 올수있는데 dt는 하나인데 dd가 여러개 올수도있다

dl은 dd와 dt만 사용가능하다.

div전으로 묶으려면 dt와 dd 같이 묶어줘야한다.

```html
<dl class="recommend-book-detail">
                    <dt class="recommend-book-author">저자</dt>
                    <dd class="recommend-book-author-name">김데레</dd>
                    <dt class="a11y-hidden">평점</dt>
                    <dd class="recommend-book-grade" aria-label="5점 만점에 4점">★★★★☆</dd>
     </dl>
```
