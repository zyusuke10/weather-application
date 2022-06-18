let weather = {
    "apiKey": "47033cd7f93524fd6fad7218f5bcdc0e",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey
        ).then((response)=>response.json())
        .then((data)=>this.showWeather(data))
        .catch(e=>window.alert('Type in a city name!'));
    },
    showWeather: function(data){
        const { name } = data;
        const { icon, description }= data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind; 
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = `${temp}℃`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.windspeed').innerText = `Wind speed: ${speed}km/h`;
        document.querySelector('.right').classList.remove("loadpage");
        const right = document.querySelector('.right');
        right.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"

    },
    search: function(){
        this.fetchWeather(document.querySelector('#search').value);
    }

};

const search = document.querySelector('#search');

const checkBtn = document.querySelector('.check-btn');
checkBtn.addEventListener('click', function(){
    weather.search();
    search.value='';
});

search.addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        weather.search();
        search.value = '';
    }
});

const burgerMenu = document.querySelector('.burgerMenu');
const navBar = document.querySelector('.nav-bar');

burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    navBar.classList.toggle('active');
})

