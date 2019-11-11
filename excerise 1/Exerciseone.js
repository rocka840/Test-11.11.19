var A = prompt("Give me A");
A = Number(A);
/*var aString = prompt("Give me A");
var A = Number(aString);*/

var B = prompt("Give me B");
B = Number(B);

if (A > B) {
    var temp = A;
    A = B;
    B = temp;
}
/*old way of switching variables*/

var sum = 0;
for (var i = A + 1; i < B; i++) {
    sum = sum + i;
    console.log(i);
}

console.log(sum);