---
title: article,figure,target,nth-child,텍스트 말줄임 11일차
date: "2018-04-04"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# HTML & CSS


### 텍스트 말줄임 처리

```html
.board-list li a {
/* 다음 3가지 속성을 같이 기입할 것 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

```

- `white-space`속성은 요소안의 공백(whitespace)이 어떻게 처리될지를 나타내는데 사용된다.
  - `normal` : 기본값, 연속된 공백이 하나로 병합되고 줄바꿈을 위한 코드가 유효하며 줄 박스를 채우기 위해 필요에 의해 끊어진다.
  - `nowrap` : 강제로 개행을 막는다. (텍스트 줄바꿈을 하지 않는다.)
  - `pre` : 코드 작성시 기입한 연속된 공백이 보존된다.(preserve) 줄바꿈을 위한 코드는 유효하다.
  - `pre-wrap` : 연속된 공백이 보존됩니다. 줄바꿈을 위한 코드가 유효하며 줄 박스를 채우기 위해 필요에 의해 끊어서 줄바꿈을 한다.
  - `pre-line` : 연속된 공백이 하나로 병합된다. 줄은 줄바꿈 문자,
    , 그리고 줄 박스를 채우기 위해 필요에 따라 끊어진다.
- `text-overflow` 는 overflow되어 텍스트가 잘렸을 경우 텍스트의 잘린 부분을 표시하는 방법을 나타낸다.
  - `clip`: 기본값, 내용 영역의 한도에서 텍스트를 자르므로 문자의 중간에서 잘릴 수 도 있다. 브라우저에서 지원되는 경우 빈 문자열로 지정할 수 있다. text-overflow: '';.
  - `ellipsis`: 클리핑 된 텍스트를 나타내는 줄임표 (…)로 표시한다. 줄임표는 내용 영역 안에 표시되어 표시되는 텍스트의 양을 줄인다. 생략 부호를 표시 할 공간이 충분하지 않으면 잘린다.
  - `string`: 잘린 텍스트를 표시하는 데 사용한다. 문자열은 내용 영역 내에 표시되며 표시된 텍스트의 크기를 줄인다. 문자열 자체를 표시 할 공간이 충분하지 않으면 잘린다.
  - `fade` : overflow된 인라인 내용을 잘라내어 가장자리에서 완전한 투명도로 라인 상자의 가장자리 근처에 페이드 아웃 효과를 적용한다.



### article

article 태그는 독립적, 배포할 가치를 지니는 완결된 정보일때 사용한다.

문서, 페이지, 애플리케이션,  또는 사이트 안에 독립적으로 구분되거나 재사용 가능한 영역을 구성할 수 있습니다. 포럼의 글, 매거진/신문의 기사, 블로그 글 등이 여기에 포함 된다.



### figure

figure 태그는 독립적인 콘텐츠를 표현합니다. 흔히  figcaption 과 함께 사용된다.

```html
<figure class="twitter-profile">
  <img src="./images/seulbinim.jpg" alt="" class="twitter-thumbnail" aria-labelledby="profile-img">
  <figcaption class="a11y-hidden" id="profile-img">사용자 프로필</figcaption>
</figure>

```

- img의 aria-labelledby와 figcaption의 id를 동일하게 값을 주어 연결한다.



### target 속성

target 속성을 사용했다면 값은 반드시 유효한 브라우징 문맥 이름 또는 키워드를 제공해야 한다.

```html
<a href="http://ko.learnlayout.com/" target="_blank">내용</a> // 새로운창을 열어서 a태그를 연결해준다.
```

| _self   | 현재의 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)를 나타냅니다. |
| ------- | ---------------------------------------- |
| _parent | 현재의 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)에 부모 창이 있다면 그 부모 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)에서 링크가 열립니다. |
| _top    | 최상위 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)에서 링크가 열립니다. |
| _blank  | 새로운 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)에서 링크가 열립니다. |
| 사용자 정의  | 설정 값이 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)의 이름이 되는 텍스트라면 해당 [브라우징 문맥](http://html5.clearboth.org/browsers.html#browsing-context)에서 링크가 열립니다. |



### nth-child()

- `nth-child()` 는 형제 사이의 요소 위치를 나타낼 수 있게 해주며, 숫자를 기반으로 요소를 선택한다.


- `odd` 와 `even` 키워드를 통해 홀수/짝수 요소를 선택할 수도 있다.



### nth-of-type()

- `nth-of-type()` 은 숫자를 기반으로 요소를 선택하는 데 사용된다.
- `nth-child()` 와는 조금 다른 방식으로 작동하는데, 동일 레벨 노드의 동일한 유형 요소 사이에서 요소의 위치를 나타낸다.
- `nth-child()` 와 마찬가지로 `an + b` 와 같이 선택하고자 하는 것을 표현할 수 있으며, `odd`, `even` 도 사용 가능하다.
- 위 예시 코드에서 `nth-child` 라는 키워드만 바꾼다면, 원하는 요소를 선택할 수 있다.

```html
.parent div:nth-of-type(1) {
  color: #00f;
}
<div class="parent">
  <p>this is paragraph.</p>
  <div>this is divider.</div><!-- This element will selected. -->
  <p>this is paragraph.</p>
  <div>this is divider.</div>
</div>
```

- 위 선택자가 요소를 선택하는 순서는 다음과 같다.
  - `.parent div` 인 요소를 모두 선택한다.
  - 선택된 요소들 중, 1 번째 요소를 찾는다.



### 순서대로 번호 리스트를 만드는 방법.

- counter 는 html문서에 쓰지 않고도 css 로 숫자를 생성하면서 자동으로 번호를 매기는 역할을 한다.
- counter를 쓸떄는 counter-reset 속성과 counter-increment 속성과 함께 사용 한다.

```html
.favorite-site-list li {
  counter-increment: number;   // 카운터를 줄 이름을 지정해준다
  line-height: 2.5rem;
  background-color: blue;
}
// 번호를 줄 before 요소의 콘텐츠 카운터안에 이름을 넣어 준다.
.favorite-site-list li::before{
  content: counter(number);
}
이렇게 하면 li요소에 번호순서대로 넣어줄수있다.
```

