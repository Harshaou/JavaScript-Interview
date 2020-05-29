// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//SOLUTION 1
function intReversal(n) {
    let int = n.toString().split('').reverse().join('')

   return parseInt(int) * Math.sign(n)
}

//SOLUTION 2
function intReversal(n) {
    let int = n.toString().split('').reverse().join('')

    if(n < 0){
        return parseInt(int) * -1
    } else {
        return parseInt(int)
    }
}

console.log(intReversal(-58))