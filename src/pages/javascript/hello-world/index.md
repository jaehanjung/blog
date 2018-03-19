---
title: contains 메소드를 이용한 modal 만들기
date: "2018-03-15"
category: "javascript"
thumbnail: "./javascript_img.jpg"
---

###  modal 만들기

- 모달을 켜는 버튼을 처음 눌렀을때는 모달이 켜지고, 다시한번 눌렀을때는 모달이 닫히는 기능을 만들었다.

```html
<body>
    <button class="button">버튼</button>
      <div class="bgc">
          <div class="box">
              <div class="modal obj-center">
                  <div class="modal-box obj-center">
                      <span>modal이 만들어졋다.</span>
                  </div>
                  <button class="close-button">닫기</button>
              </div>
          </div>
      </div>
      <script>
          let button = document.querySelector(".button")
          let box = document.querySelector(".box")
          let bgc = document.querySelector(".bgc")
          button.addEventListener("click", function () {
            if(box.classList.contains("active")){
                //만약 box클래스에 active 가 추가되있으면
                box.classList.remove("active")
                //박스에 클래스 active를 삭제하고
            } else{
                //아니면
                //box.classList.add("active")
                //박스에 active를 추가해라
            }
          })
          let close_button = document.querySelector(".close-button")
          close_button.addEventListener("click", function () {
          	// close 버튼을 클릭 했을때
              box.classList.remove("active")
              bgc.classList.remove("active")
              // box 에 active 를 삭제한다.
              // bgc 에 active 를 삭제한다.
          })
      </script>
  </body>
```
모달이 켜지기 위해서는 모달에 'active' class가 추가되어야 하고 닫힐때는 'active'가 사라져야한다.

그래서 버튼을 눌렀을때 모달에 active가 있으면 active를 지워주고, active가 없으면 active를 추가해주는 코드를 만들었다.

이때 모달에 active가 있는지 없는지를 확인해 주기 위해서 사용한 코드가

classList.contains("active")이다.

classList.contains()에 전달한 class의 이름이 있는지 없는지 확인해서 있으면 true 없으면 false를 돌려준다.

![Chinese Salty Egg](./javascript_img.jpg)
