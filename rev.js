let arr = [3, 4 ,5 , 6, 7];
let temp = [];

for(i = arr.length - 1, j = 0; i >= 0; i--, j++)
{
    temp[j] = arr[i];
}
console.log(temp);
