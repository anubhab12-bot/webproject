const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");
const tempRealVal = document.getElementById("temp_val");
// const day = document.getElementById("day")
const getInfo = async (e) => {
    // alert("hi")
    e.preventDefault();
    let cityVal = cityName.value
    console.log("value-->", cityVal)
    if (cityVal === "") {
        city_name.innerText = "Please enter a proper city name ";
        dataHide.classList.add("data_hide")
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=820bfce25ec1b32fa7a396e97a163bb6&units=metric`
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data]
            console.log("res---->", arrData)
            tempRealVal.innerText = arrData[0].main.temp
            const tempStatus = arrData[0].weather[0].main
            if (tempStatus === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempStatus === 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if (tempStatus === 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`

            dataHide.classList.remove("data_hide")
        } catch {
            city_name.innerText = "Please enter a correct city name ";
            dataHide.classList.add("data_hide")
        }
    }
}

submitBtn.addEventListener('click', getInfo)