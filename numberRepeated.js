function numberRepeated(arr)
{
    var flag = 1, count = 0, i;

    for(i = 0; i < arr.length; i++)
    {
        count = 0;
        for(j = 0; j < arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
        }
        if(count >= arr[i])
        {
            flag = 0;
            break;
        }
    }
    return flag;
}
console.log(numberRepeated([2, 3, 3, 4, 4]));
console.log(numberRepeated([2, 3, 3, 4, 4, 2]));
console.log(numberRepeated([2, 3, 3, 4, 4, 4]));
console.log(numberRepeated([2, 3, 1, 3, 4, 4]));



