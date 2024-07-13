let key="5084d9b03bb1d76e8c9f59776774c8a7";
// let api="https://api.openweathermap.org/data/2.5/weather?q={}&appid={API key}";
let api="https://api.openweathermap.org/data/2.5/weather?q=";


let cityName =document.querySelector(".city_name");
let btn =document.querySelector(".Search");
let result=document.querySelector(".result");
let cityoutput=document.querySelector(".cityoutput");
let discription=document.querySelector(".discription");
let temp=document.querySelector(".temp");
let wind=document.querySelector(".wind");


let tempcon= (temp) =>{
    return (temp-273).toFixed(3);
}

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    result.classList.remove("hide");
    console.log(cityName.value);

    let newApi = `${api}${cityName.value}&appid=${key}`;
    let response = await fetch(newApi);
    let res = await response.json();
    console.log(res);

    cityoutput.innerText=` Weather of ${res["name"]} city`;
    discription.innerText=`Sky condition: ${res["weather"][0]["description"]}`;
    let newTemp = tempcon(res["main"]["temp"]);
    temp.innerText=`Temprater: ${newTemp} c`;
    wind.innerText=`Wind Speed: ${res["wind"]["speed"]}`;
});