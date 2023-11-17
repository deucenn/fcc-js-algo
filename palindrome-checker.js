function palindrome(str) {
    let newStr = str.toLowerCase().replace(     /[^a-z0-9]/g,     '');
    let reversed = newStr.split("").reverse().join("");
    console.log(reversed)
    if (newStr == reversed) {
      return true;
    } return false
  
    
    
    
    return newStr;
  }
  
  console.log(palindrome("1 eye for of 1 eye."));