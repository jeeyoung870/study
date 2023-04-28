// https://openweathermap.org/ 사이트의 날씨API를 사용해 현재위치의 날씨를 보여준다.
// json으로 가져온 정보를 보여줌, html로 가져와서 아이콘까지 같이 보이면 더 좋을것같음..(하는법 모르겠음;;)
const weather = document.getElementById("weather");
const temparature = document.getElementById("temp");
const cityName = document.getElementById("cityName");

const API_KEY = "86a8612737b8287fb27f88b2633a50e6";

function geoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // fetch() 로 url 부르고, 가져온 json 데이터에서 정보 출력하기
    fetch(url)
        .then(response => response.json())
        .then(data => {
            weather.innerText = data.weather[0].main;
            temparature.innerText = `${data.main.temp}°C`;
            cityName.innerText = data.name;
        }
        );
}
function geoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);