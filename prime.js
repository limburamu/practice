function prime(num)
{
    var flag = 1, i;
    for(i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            flag = 0;
            break;
        }
    } 
    if(flag == 1)
    {
        console.log(num + ' is a prime number');
    }
    else
    {
        console.log(num + ' is not a prime number');
    }   
    return flag;
}
console.log(prime(17));
console.log(prime(8));
console.log(prime(9));
console.log(prime(11));
