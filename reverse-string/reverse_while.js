 var str="Phoenix is learning"
  var temp = '';
  var i = str.length;

  while (i > 0) {
    temp += str.substring(i - 1, i);
    i--;
  }
  console.log(temp);


/*
var op="";
var str="hello world"
var i = str.length;
while (i > 0) {
 op += str.substr(1)+ str.charAt(0);
  i--;
}
console.log(op);
*/


