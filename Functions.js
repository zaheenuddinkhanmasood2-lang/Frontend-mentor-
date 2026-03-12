function sum(a, b, c = 3) {
    return a + b+c;
}

// let a=prompt("Please enter the value of var a ")
// let b=prompt("Please enter the value of var b ")
let a = 10, b = 20
console.log("the sum of var a and b = ", sum(a, b));


const addition = (a, b, c = 3) => {
    return a + b+c;

}
console.log("the sum of var a and b = ", addition(a, b, 30));

// var wow=addition()
// console.log(wow)

