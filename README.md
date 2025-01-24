## Required

- [22 >= Nodejs >= 20](https://nodejs.org/ko/download)

## Get started

```sh
$ npm i -g @nestjs/cli
$ nest new .
```

nest 명령을 못 찾는 경우

```sh
$ npm config get prefix
$ cd $(npm config get prefix)
```

npm 글로벌 패키지 경로 확인 후 경로를 path에 등록

- 윈도우의 경우만, 파워 쉘 스크립트 실행 정책으로 허용되지 않는 경우

```sh
$ Get-ExecutionPolicy
> Restricted 보이면 실행 차단된 상태
$ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
$ Get-ExecutionPolicy -Scope CurrentUser
> RemoteSigned 보이면 성공
```

## Project setup

```sh
$ npm install
$ npm run start
```
