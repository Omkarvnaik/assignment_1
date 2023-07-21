class Starter {
    /**
     * The following exercises will help familiarize you with coding using
     * primitive types (booleans, numbers, strings, etc.) in JavaScript. These
     * exercises will also help familiarize you with JavaScript keywords,
     * statements, and operators, as described throughout Assignment 1.
     */

    AddTwoNumbers(a, b) {
        // TODO: Implement
        return a+b        
    }

    SubtractBFromA(a, b) {
        // TODO: Implement
        return b-a
    }

    MultiplyTwoNumbers(a, b) {
        // TODO: Implement
        return a*b
    }

    DivideAByB(a, b) {
        // TODO: Implement
        return a/b
    }

    CalculateAverageOfTwoNumbers(a, b) {
        // TODO: Implement
        return (a+b)/2
    }
}

let starter=new Starter ()

let addvalue=starter.AddTwoNumbers (1,2)
console.log(addvalue)

let subtractvalue = starter.SubtractBFromA (1,2)
console.log(subtractvalue)

let multiplyvalue = starter.MultiplyTwoNumbers (1,2)
console.log(multiplyvalue)

let dividevalue = starter.DivideAByB (1,2)
console.log(dividevalue)

dividevalue = starter.DivideAByB (2,2)
console.log(dividevalue)

dividevalue = starter.DivideAByB (3,2)
console.log(dividevalue)

dividevalue = starter.DivideAByB (-4,0)
console.log(dividevalue)

let averagevalue = starter.CalculateAverageOfTwoNumbers (1,2)
console.log(averagevalue)