for (let index = 0; index < 10; index++) {
    let element = index;
    console.log(++element);
}
for (let i = 0; i < 10; i++) {
    const element = i;
    const O = 0
    console.log("the element variable value", element)
    console.log("thee const variable value", O);

}
let khan = {}
let object = {
    "Name": "Nazim Ud Din",
    "Caste": "Mehsood",
    "roll-No": 2440,
    "Department": "Computer Science",
    "DOB": "15th March 2007",
}
console.log(object);
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;

    // const element = object[key];
    // console.log(object[key],object.DOB);
    console.log(key, ":", object[key]);
    console.log("\"{'key'}\"", ":", object[key]);


}

for (const element of "Sajjad Hussain") {
    console.log(element);
    console.log((typeof (element)));
}


