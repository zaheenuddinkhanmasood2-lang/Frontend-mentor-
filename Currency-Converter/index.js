// GET https://v6.exchangerate-api.com/v6/5462e50b6d133ece06a3e713/latest/USD
// https://flagcdn.com/24x18/ua.png

// console.log(currencyToCountry)



// let selectcontainer = document.querySelectorAll(".selectcontainer")
// console.log(selectcontainer)
// selectcontainer.forEach(e => {
//     let img=document.createElement("img")
//     e.prepend(img)
// }
// )

for (const key in currencyToCountry) {

    const element = currencyToCountry[key];
    let selectopt = document.createElement("option");
    selectopt.innerText = key;
    selectopt.setAttribute("value", `${element.toLowerCase()}`)
    let optionsforto = document.querySelector(".to select")
    optionsforto.appendChild(selectopt)
    // document.querySelector(".selectcontainer img").setAttribute("src",`https://flagcdn.com/24x18/${element}.png`)

}

for (const key in currencyToCountry) {
    const element = currencyToCountry[key];
    let selectopt = document.createElement("option");
    selectopt.innerText = key;
    selectopt.setAttribute("value", `${element.toLowerCase()}`)
    let optionsforfrom = document.querySelector(".from select")
    optionsforfrom.appendChild(selectopt)

}


// Functions For changing flags on select change
document.querySelector(".from select").addEventListener("change", async function (selectedcurrency) {
    let countrycode = selectedcurrency.target.value
    console.log(countrycode)
    document.querySelector(".from img").setAttribute("src", `https://flagcdn.com/24x18/${countrycode}.png`)
})
document.querySelector(".to select").addEventListener("change", async function (selectedcurrency) {
    let countrycode = selectedcurrency.target.value
    console.log(countrycode)
    document.querySelector(".to img").setAttribute("src", `https://flagcdn.com/24x18/${countrycode}.png`)
})

function entirefunctionforselected() {
    let alloptionsoffromcurrencyseect=document.querySelectorAll(".From options")

}