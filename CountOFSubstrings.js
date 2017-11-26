function countOfSubstrings (str) {
  var map = {}
  var start;
  var end = str.length - 1

  for(i=97;i<=122;i++){
    map[String.fromCharCode(i)] = 0
  }

  for(start=0; start <= end; start++) {
    map[str[start]] += 1
  }

  var keys = Object.keys(map)
  var count = 0
  for(start=0;start < keys.length;start++) {
    var charCount = map[keys[start]]
    count += ( charCount * (charCount + 1)) / 2
  }
  return count
}



console.log(countOfSubstrings('abcab'), countOfSubstrings('aba'))
