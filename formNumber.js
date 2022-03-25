function number(arr) 
{
    var s = 0, i;
    for(i = 0; i < arr.length; i++)
    {
        s = (s * 10) + arr[i];
    }
    return s;
}
console.log(number([1, 2, 3, 4, 6, 8]));