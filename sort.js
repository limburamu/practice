let arr = [12, 9, 11, 7, 2];

for(i = 0; i < arr.length; i++)
{
    for(j = 0 ; j <  arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
        
    }
    
}
console.log(arr);