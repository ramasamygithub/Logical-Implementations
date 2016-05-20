
var str = "My name is ramasamy"
var temp = '';
var i = str.length;

while (i > 0) {
  temp += str.substring(i - 1, i);
  i--;
}

console.log(temp);



