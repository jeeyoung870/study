// navigator 와 geolocation을 이용해 해당지역 날씨 표시하기

// getCurrentPosition 함수:
// 2개의 인자를 받음. 1: 성공시 실행함수 2: 에러시 실행함수
// 1의 성공시함수는 인자로 GeolocationPosition 객체를 생성해준다.(위치정보가 포함된 객체임)
// 2는 GeolocationPositionError 객체를 생성함
const API_KEY = "86a8612737b8287fb27f88b2633a50e6";
const weatherCon = document.getElementById("weather");

function geoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // fetch() 로 url 부르고, 가져온 json 데이터에서 정보 출력하기
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = weatherCon.querySelector("span:first-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C / ${data.name}`;
        }
        );
}
function geoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

// openweathermap.org 홈페이지 활용하기
// API 탭에 여러 가지 지구상 위치 관련 API가 있음 (로그인 필요) 
// Current Weather Data -> API key 받아서 호출에 사용하기. subscribe하면 My API keys에 키 추가됨
// https://openweathermap.org/current