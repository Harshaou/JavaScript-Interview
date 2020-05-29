// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution one
function stringReverse(str){
    return str.split('').reverse().join('')
}

// Solution 2
function stringReverse(str){
    let reversed = ''

    for(let char of str){
        reversed = char + reversed
    }
    return reversed
}

//Solution 3
function stringReverse(str){
    return str.split('').reduce((char, reversed) => reversed + char,'')
}

console.log(stringReverse('hey there'))