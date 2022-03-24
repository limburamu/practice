/* let arr = [1, 2, 3]
s = 0;
for(i = 0; i < arr.length; i++)
{
    s = (s * 10) + arr[i];
}
console.log(s);  */

var arr = [1, 2, 3, 6, 8];
function number(arr) 
{
    s = 0;
    for(i = 0; i < arr.length; i++)
    {
        s = (s * 10) + arr[i];
    }
    return s;
}
console.log(number(arr));