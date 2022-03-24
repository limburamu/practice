/* let a = [2, 4, 5, 7, 5, 9]
maxcount = 0;
n = 0;
for(i = 0; i < a.length; i++)
{
    count = 1;
    for(j = i + 1; j < a.length; j++)
    {
        if(a[i] == a[j])
        {
            count++;
        }
    }
    if(maxcount < count)
    {
        maxcount = count;
        n = a[i];
    }
}
console.log(n + " occurs " + maxcount + " times");    */

var arr = [2, 4, 2, 5, 7, 5, 9];
maxCount = 0;
n = 0;
function number(arr, n)
{
    for(i = 0; i < arr.length; i++)
    {
        count = 1;
        for(j = i + 1; j < arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                count++
            }
        }
        maxCount = count;
        n = arr[i];
        console.log(n + " occurs " + maxCount + " times");
    }
    return maxCount;
}
console.log(number(arr, 9));