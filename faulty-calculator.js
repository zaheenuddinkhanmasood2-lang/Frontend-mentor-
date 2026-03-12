
const calculator = (a, b, operator) => {
    if (operator == '*') {
        let random = Math.random()
        if (random < .5) {
            return a + b
        }

        else
            return a * b

    }
    // For addition
    if (operator == '+') {
        let random = Math.random()
        if (random < .5) {
            return a - b
        }

        else
            return a + b

    }
    // For subtraction
    if (operator == '-') {
        let random = Math.random()
        if (random < .5) {
            return a / b
        }

        else
            return a - b

    }
    if (operator == '/') {
        let random = Math.random()
        if (random < .5) {
            return a ** b
        }

        else
            return a / b

    }
}


let a = Number(prompt("Enter the number of a "))
let b = Number(prompt("Enter the number of b "))
let operation = prompt("The sign of operation you want to perform")
result = calculator(a, b, operation)
console.log("Your result = ", result);