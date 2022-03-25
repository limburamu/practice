function number(arr, n)
{
    var maxCount = 0, n = 0;

    for(i = 0; i < arr.length; i++)
    {
        count = 0;
        for(j = i + 1; j < arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
        }
        maxCount = count;
        n = arr[i];
        console.log(n + " occurs " + maxCount + " times");
    }
    return maxCount;
}
console.log(number([2, 4, 2, 5, 7, 5, 9], 8));
console.log(number([2, 4, 2, 5, 7, 5, 9], 9));
console.log(number([2, 4, 2, 5, 7, 5, 9], 2));


