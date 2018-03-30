---
title: 18.03.27 HTML & CSS(position,inline,ul,ol) 7일차
date: "2018-03-27"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# HTML & CSS(position,inline,ul,ol)

### position

`static`: 기본값 : top,right,bottom,left,z-index 속성들이 static에서는 아무런 효과도 주지 못합니다. document의 일반적인 흐름(normal flow)을 따라 배치됩니다.

`relative`:  top,right,bottom,left 속성에 의한 좌표로 배치되고 document의 일반적인 흐름(normal flow)을 따라 배치됩니다. 붕 띄워진다.

`absolute` : 요소가 일반적인 문서(document) 흐름에서 제거됩니다. 붕띄워진다. 가장가까운위치에있는 부모의 위치로 배치됩니다.

`fixed` : 페이지의 고정됩니다. 붕 띄워진다. top,left 값을 0으로 지정해줘야한다.



### inline , inlineblock

요소를 inline 요소처럼 표시한다.

1. html 인라인 요소로는 `<span>`,`<a>` 태그 등이 이에 해당됨
2. block 과 달리 줄 바꿈이 되지 않고, width와 height를 지정 할 수 없다.
3. 따라서 콘텐츠의 길이 만큼 요소가 늘어나게 된다.inline-block
4. block과 inline의 중간 형태라고 볼 수 있는데, 줄 바꿈이 되지 않지만 크기를 지정 할 수 있다.
5. 요소는 inline이지만 내부는 block처럼 표현된다. inline처럼 옆으로 늘어선다.
6. IE8부터 지원하는 속성이다.
7. inline-block은 vertical-align 의 속성을 지정할 수 있다.

inline 값의 레이아웃 간 공백의 문제

- li: 공백을 남김. `<li>`와 `</li>`사이의 줄바꿈이 숨겨져 있기 때문이다. 이것이 자식 노드가 되어서 공백을 발생시킨다.<br/>
```html
      <ul class="member">
                <li> <!-- 여기 바로 이 부분!! -->
                    <a href="#">로그인</a>
                </li>
                <li>
                    <a href="#">회원가입</a>
                </li>
                <li>
                    <a href="#">커뮤니티</a>
                </li>
            </ul>
```
- 보완: css에서 .member의 폰트크기를 0으로 하고 개별로 li의 폰트 크기를 지정한다. (ex: 1rem)

### 속성 선택자

아이디말고 type 속성을 css로 불러올수있다.

```html
html
<input aria-label="검색어" type="search" id="search" required placeholder="검색어를 입력하세요.">
```

```html
css  // 속성 선택을 할수있다.
input[type="search"]{

}
```



### button

버튼 클래스는 google,firefox 등 페이지마다 border와 padding 등 넓이와 높이가 달라진다.

현업에서는 button클래스를 잘쓰지않는다.

a태그를 역활모델을 바꾼다.

```html
<a href="#" role="button">검색</a>
```



### ul , li

**ul (unordered list)**
순서가 의미 없는 리스트를 나타냄.
ul의 자식요소로 반드시 li 요소만 포함해야 함. (다른 요소들은 자식요소가 될 수 없다.)
**li (list-item)**
ul(순서 없는 리스트), ol(정렬된 리스트)의 자식요소로 목록의 항목을 나타냄

```html
<ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>
```

##css 속성 적용 우선 순위

```html

1. 속성 값 뒤에 !important 를 붙인 속성
2. HTML에서 style을 직접 지정한 속성
3. id 로 지정한 속성
4. .클래스, :추상클래스 로 지정한 속성
5. 태그이름 으로 지정한 속성
6. 상위 객체에 의해 상속된 속성

```
