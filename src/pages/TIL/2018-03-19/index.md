---
title: 18.03.19 쉘과 명령어 수업 1일차
date: "2018-03-19"
category: "TIL"
thumbnail: "./TIL.jpg"
---

## 쉘과 명령어

Bash

디렉터리 확인하는법.

- pwd
- ls: 현재 디렉토리의 리스트

#### 파일 경로 이동하기.

- cd Documents && pwd
- cd .. && pwd
- cd / && pwd
- cd ~ && pw

#### 경로에는 2가지 경로가있다.

- 상대경로 : 작업 디렉터리에 기준으로  (.) , (..)

cd ..  하게되면 상위 폴더로 이동하게된다.

상위폴더로 가게되면 /c 폴더에 있기때문에 다시 users폴더로 이동하려면

cd Users 를 치면 다시 users 폴더로 이동한다.

- 절대경로 : 작업 디렉터리와 상관없음 (/) , (~)

cd ~ 홈 디렉터로 이동.



ls 파일 리스트 보기

cd 하고 가고싶은 폴더로이동

cd hello-code

#### 파일 및 디렉터리 조작

파일생성

- `touch`  새로운 파일을 만들어줌.

touch fastcampus   파일을 새로만듬

ls

- `cp`  파일복사

cp fastcampus fastcampus2

ls

- `mv` 파일이동

mv fastcampus fastcampus3

ls

- `mkdir` 폴더생성

mkdir fastcampus

ls

- `rm` 파일삭제

rm fastcampus2

ls

비어있지 않은 폴더를 지울때는 rm -rf fastcampus2 를 사용한다.

- `rmdir` 폴더삭제

rmdir fastcampus

ls



#### 터미널 화면을 깨끗하게 하고싶을떄

clear 사용



#### 파일의 내용 표시

-  `less` : 스크롤 기능사용

less /etc/profile



#### GUI 쉘을 통해 파일 실행시키기

start hello.txt   : txt 창이 뜸



## Visual Studio Code



#### 기본 사용법

- ctrl + ` : 터미널 키는법
- ctrl + p : 빠르게 파일을 실행 시킬 수 있다.
- ctrl + shift + p : 명령 팔레트 실행



#### 터미널로 vs코드 열기.

1. mkdir hello-code : hello-code 폴더생성
2. cd hello-code: hello-code 폴더로 이동
3. code . : hello-code 폴더에 코드를 실행.

