// document object

// document 객체 : js시점에서 본 html문서 전체.
// document.title, document.body 과 같이 html의 요소들을 다룰 수 있다.
// 객체 사용법과 똑같이 조회,변경 가능하다.
// ex ) document.title = "Hi";

// document.title = "Hello from JS";

const title = document.getElementById("title");     // id 가 title인 객체 가져오기
console.dir(title);     // dir() 객체 구성요소 보여줌
// dir로 보이는 document객체의 모든 파라미터를 js로 변경가능
title.className = "hell";
title.innerText = "Got you!";

// class명으로 객체 가져오기
const grabs = document.getElementsByClassName("grab");  // array로 반환함
//console.log(grabs);
// tag명으로 객체 가져오기
const hello = document.getElementsByTagName("h1"); // array로 반환함
//console.log(hello);

// querySelector / querySelectorAll : element를 css로 검색함 
const helloTitle = document.querySelector(".hello h1"); // hello 클래스 안의 h1을 검색. 결과가 복수개라도 가장 처음 element 1개를 반환한다.
const helloTitle2 = document.querySelectorAll(".hello h1"); // 검색된 모든 element를 array로 반환한다.
console.log(helloTitle2);
// 쿼리셀렉터 해석 : div 안의(띄어쓰기) hello클래스들 중 첫번째(:first-child) 그안의(띄어쓰기) h1들 중 마지막h1 을 선택해라
// 복수개 중에 선택할수 있는데, 하나있으면 그냥 그거 가져옴
const title2 = document.querySelectorAll("div .hello:first-child h1:last-child");
console.log(title2);


/*
[ child 선택 ]
1) (int)로 찾기 : 몇번째인지
2) (an+b) 로 찾기 : a,b는 상수, n은 변수다. n이 0부터 시작해 자식 element들을 순회한다.
3) (even/ odd) 로 찾기 : 홀수/짝수

:nth-child(2) => 2번째 요소 선택(1부터시작)
:nth-child(2n+1) =>  n=0 일때 1, n=1일때 3, n=2일때 5 ... => 홀수번째 요소를 선택한다.
:nth-child(odd) / :nth-child(even) => 각각 홀수/짝수번째 요소 선택함.

*/