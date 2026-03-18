document.addEventListener("submit", e => {
    e.preventDefault()
})
let selects = document.querySelectorAll("select")

for (const select of selects) {
    for (const currencycode in currencyToCountry) {
        const country_name = currencyToCountry[currencycode];
        let option = document.createElement("option")
        option.innerText = currencycode;
        option.value = currencycode
        if (select.id === "currto" && currencycode === "PKR") {
            option.selected = true;
        }
        else if (select.name === "currencyFrom" && currencycode === "USD") {
            option.selected = true;
        }
        select.append(option)
    }
    select.addEventListener("change", e => {
        let flagsrc = getflag(e.target)
        if (select.id === "currto") {
            document.querySelector(".toflag img").src = flagsrc
            console.log(document.querySelector(".toflag img"))
        }
        else if (select.id === "currfrom") {
            document.querySelector(".fromflag img").src = flagsrc
            console.log(document.querySelector(".fromflag img"))
        }
    })
}


function getflag(option) {
    flagcode = currencyToCountry[option.value].toLowerCase()
    console.log(flagcode)
    return `https://flagcdn.com/24x18/${flagcode}.png`
}


// Function for Message showing the real ouptput of our Currency Converster


document.querySelector(".submitaction").addEventListener("click", async e => {

    let fromvalue = document.querySelector(".amount-input").value
    let from = document.querySelector("#currfrom").value
    let to = document.querySelector("#currto").value
    console.log(to)
    let rawresult = await fetch(`https://v6.exchangerate-api.com/v6/5462e50b6d133ece06a3e713/latest/${from}`)
    let resultobject = await rawresult.json()
    let moneyobject = resultobject.conversion_rates
    let rate=moneyobject[`${to}`]
    console.log(`${fromvalue} ${from} = ${fromvalue * rate} ${to}`)
    // 1000 USD = 279052 PKR
    document.querySelector(".message").innerText=(`${fromvalue} ${from} = ${fromvalue * rate} ${to}`)
})