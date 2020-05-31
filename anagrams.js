// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//SOLUTION 1
function anagrams(stringA, stringB) {
    return stringSort(stringA) === stringSort(stringB)
}
function stringSort(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}


//SOLUTION 2
function anagrams(stringA, stringB) {
    function buildCharMap(str){
        let charMap = {}
        for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
            !charMap[char] ? charMap[char] = 1 : charMap[char] ++
        }
        return charMap
    }

    let aCharMap = buildCharMap(stringA)
    let bCharMap = buildCharMap(stringB)

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false
    }
    for(let char in aCharMap){
        if(aCharMap[char].length !== bCharMap[char].length){
            return false
        }
    }
    return true
 
}

console.log(anagrams('rail safety', 'fairy tales'))