function adjectives() {
    let random = Math.random()
    if (random < .33)
        return ' Crazy'
    else if (random > .33 && random < .66)
        return " Amazing"
    else
        return " Fire"


}

function Shopnames() {
    let random = Math.random()
    if (random < .33)
        return ' engine'
    else if (random > .33 && random < .66)
        return " Foods"
    else
        return " Garments"
}


function endswith() {
    let random = Math.random()
    if (random < .33)
        return ' Bros'
    else if (random > .33 && random < .66)
        return " Limited"
    else
        return " Hub"
}


for (let index = 0; index < 5; index++) {
    let shop_name=adjectives()+Shopnames()+endswith()
    console.log(shop_name);

}