let n = 7;
flag = 1;
for(i = 2; i < n; i++)
{
    if(n % i == 0)
    {
        flag = 0;
    }
}

if(flag = 1)
{
    console.log(n + 'is a prime number');
}else{
    console.log(n + ' is composit prime number');
}