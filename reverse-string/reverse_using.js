var str = "hello world"
var result = "";
var wordArray = str.split(" ");
for (var i = wordArray.length - 1; i >= 0; i--) {
  result += wordArray[i] + " ";
}
console.log(result);
//return result.trim();