function firstPalindromeString (str) {
  var countArray = []
  var i;
  for(i=97;i<=122;i++) {
    countArray[i-97] = 0
  }
  for(i=0;i<str.length;i++) {
    countArray[str[i].charCodeAt()-97] += 1
  }

  var firstString = ''
  var middleString = ''
  for(i=0;i<26;i++){
    if (countArray[i] === 0) {
      continue;
    }
    if(countArray[i] % 2 === 0) {
      firstString += concatChar(String.fromCharCode(i+97), countArray[i] / 2)
    } else {
      middleString = concatChar(String.fromCharCode(i+97), countArray[i])
    }
  }

  return firstString + middleString + firstString.split('').reverse().join('')
}

function concatChar (char, count) {
  var str = ''
  for(var i = 0;i<count;i++) {
    str += char
  }
  return str

}


console.log(firstPalindromeString('malaalam'))