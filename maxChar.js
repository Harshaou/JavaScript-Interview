// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
    let chars = {}
    let max = 0
    let bigChar = ''

    for(let char of str){
        !chars[char] ? chars[char] = 1 : chars[char] ++
    }

    for(let char in chars){
        if(chars[char] > max){
            max = chars[char]
            bigChar = char
        }
    }
    
    return bigChar
}

console.log(maxChar('haaarshad'))