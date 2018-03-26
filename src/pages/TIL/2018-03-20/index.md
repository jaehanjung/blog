---
title: 18.03.20 Markdown,git 초기설정 수업 2일차
date: "2018-03-20"
category: "TIL"
thumbnail: "./TIL.jpg"
---

# Markdown

```html
# 1단계 제목   / h1
## 2단계 제목  / h2
...
###### 6단계 제목  /h6
```

![Chinese Salty Egg](./2018-03-20(3).png)

#### 글씨체

```html
*이탤릭체*
**볼드체**
_밑줄_
~~취소선~~
`고정폭`
> 인용문
```

![Chinese Salty Egg](./2018-03-20(2).png)

#### 목록

```html
- 목록은
* 이런 식으로
+ 입력할 수 있습니다.
    - 들여쓰기를 해서
    - 목록의 단계를 나눌 수 있습니다.

1. 번호가 매겨진 목록은
1. 이런 식으로
1. 입력할 수 있습니다.
    1. 들여쓰기를 하면
    1. 번호가 초기화됩니다.
```

ctrl + shift + p 눌러서 >markdown preview  미리보기 열기 누르면 옆에 마크다운 문서를 미리볼수있다.


![Chinese Salty Egg](./2018-03-20(4).png)





## Git

Git 은 아래와 같은 정보를 관리한다.

- 소스코드가 **언제** 바뀌었는지
- 소스코드가 **어떻게** 바뀌었는지
- 소스코드를 **누가** 바꾸었는지
- 소스코드를 **왜** 바꾸었는지





## Git 사용

#### 폴더를 git 저장소로 만들어주는 명령어

```html
git init : 해당폴더에 .git 폴더 생성

깃에 저장하려면 그폴더에 git init 을 하여 저장소를 만들어 줘야한다.
```



#### 현재 상태 확인하기

- `git status` 해당폴더에 폴더명을알려줌.

## Git에서 관리하는 세 영역

![Chinese Salty Egg](./git-scheme.png)


- 작업 디렉토리 (Working directory)
  - 현재 편집 중인 파일이 저장되는 영역
- 스테이징 영역 (Staging area)
  - 저장소에 저장할 변경 사항을 보관하는 임시 저장소
- .git 디렉터리 (Repository)
  - 모든 작업 내역이 영구히 저장되는 저장소



#### 폴더안에 있는 파일을 git이 관리하는 명령어

```html
git add .  / 해당폴더에 git 관리

git status     /  깃폴더내용의 확인

git commit -m "수정내용"   / 깃에 저장 ,수정내용 업로드,변경사항의 묶음

git log  /  저장내용이 저장되었는지 확인

```



## GitHUB

폴더에 저장한 Git 파일을 github 웹 브라우저를 통해 git 저장소를 관리할수있다.



#### Github 초기 설정

해당폴더에 git bash 를 키고

```html
ssh-keyhen : 저장소의 키를 만든다.

cat ~/.ssh/id_rsa.pub  : 생성된 일련번호 가 나온다.

그다음 자신의 깃헙의 들어가서 프로필 셋팅 에 들어간다.

왼쪽에 ssh and gpg keys 들어가서 new sshkey 를누르고 key 칸에 아까 일련번호를 복사 붙여넣기 해준다.

```

깃에 프로필옆에 +버튼을 누르면 new repository  를 눌러 새로운 깃 저장소 폴더를 만든다.



그다음

#### …or push an existing repository from the command line

밑에 보면 폴더이름과 주소가 있다.

```html
git remote add origin git@github.com:jaehanjung/9-.gitgit push -u origin master
```

그주소를 복사해서 git bash 에 복사 붙여넣기 한다음 엔터.

연결 성공.



#### Git Push

- Github 저장소 생성
- `git remote add origin <Github 저장소 주소>`
- `git push -u origin master`

git push 내저장소에있는 커밋들을 원격 저장소에 보내라.



처음 깃 만들떄만 저렇게 사용하고  다음 번 부터는 `git push` 명령만 입력해도 잘 푸시됩니다.



이후에는

```html
해당폴더에서 git add .

git status 확인하고

git commit -m "변경내용저장"

git push  바로 push 하면 저장된다.

```



#### github 안에서 편집하는방법

다른 저장소에 있는 커밋을 내저장소로 하는방법은

해당파일로가서 연필 모양 클릭한다음 내용을 변경해주고 commit 누르고 git bash에서 git pull사용

![Chinese Salty Egg](./2018-03-20(5).jpg)

```html
git pull
```

이방법으로 깃에저장된파일을 내컴퓨터로 불러올수있다.



#### visual studio code 에서 편집하고 깃헙에 업로드하는방법

visual studio code 에서 3번째 소스제어 버튼 누르고 내용을 변경후

메시지에 변경할 수정내용 적은다음 ctrl + enter 누르고 커밋완료



#### visual studio code 에서 커밋과 푸쉬를 동시에하는방법

내용을 변경한다음 3번째 소스제어 버튼을 누르고 내용을 변경후

밑에 master 옆에 화살표 버튼 누르기.



## SourceTree(git 작업)

저장소의 상태가 잘보이기때문에 소스트리를 사용.

```html
add 버튼을눌러 폴더를 정해주고 이름을 만든다.
해당폴더에서 내용을 수정할수있다.
```

vs코드에 파일내용을 변경한후 sourcetree 에서 커밋,푸쉬 버튼을 눌러 편하게 사용가능.
