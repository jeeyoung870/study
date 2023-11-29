#### test.js 실행
```js
    $ npm i @types/node -D
    $ node test.js
```

#### typescript 설치
```js
    $ npm i typescript ts-node -D
```
#### ts-node로 test.js 실행하기
**package.json 수정**
```js
    "scripts": {
        "start": "ts-node test.js"
    },
```
#### test.ts 작성 및 실행하기
**package.json 수정**
```js
    "scripts": {
        "start": "ts-node test.ts"
    },
```
#### type-converage 설치 및 실행하기
```js
    $ npm i typescript type-coverage -D
```
```js
    $ npx type-coverage --detail
```