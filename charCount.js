function charCount(str, letter) {
    var letterCount = 0;
    for (var position = 0; position < str.length; position++) {
       if (str.charAt(position) == letter) {
         letterCount += 1;
         }
     } 
     return letterCount;
   }
   
   console.log(charCount('harshad', 'h'));


  
   
   