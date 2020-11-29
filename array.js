let num = [1, 3, 7, 2];
let temp;

temp = num[0];
num[0] = num[3];
num[3] = temp;

console.log(num);