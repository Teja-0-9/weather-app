const apikey="34b9da41c7cd47dbe56c61eb64215830";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.getElementById("searchbar");
const btn=document.getElementById("btn");
let img=document.querySelector(".weather-icon");
async function checkweather(city) {
    const response=fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=data.main.temp +"&deg;c";
       document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind-details").innerHTML=data.wind.speed +"KM/H";

        if(data.weather[0].main=="Clouds"){
            img.src="/pngs/clouds.png";
        }
        
        else if(data.weather[0].main=="drizzle"){
            img.src="/pngs/drizzle.png";
        }
        
        else if(data.weather[0].main=="clear"){
            img.src="/pngs/clear.png";
        }
           else if(data.weather[0].main=="mist"){
            img.src="/pngs/mist.png";
        }
        else if(data.weather[0].main=="rain"){
            img.src="/pngs/rain.png";
        }
        else{
          img.src="/pngs/snow.png";
        }

}
btn.addEventListener("click",()=>{
  checkweather(search.value);
});