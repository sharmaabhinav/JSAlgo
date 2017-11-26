function checkStringBothHalfs (str) {
  var start = 0
  var end = str.length-1
  var i
  var map = {}

  for(i=97;i<=122;i++){
    map[String.fromCharCode(i)] = 0
  }

  while(start < end) {
    map[str[start]] += 1
    map[str[end]] -= 1
    start += 1
    end -= 1
  }

  var keys = Object.keys(map)
  for(i=0;i<keys.length;i++) {
    if (map[keys[i]] !== 0) {
      return false
    }
  }
  return true
}