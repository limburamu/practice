let n = 9;
let flag = 1;
for(i = 2; i < n; i++)
{
    if(n % i == 0)
    {
        console.log(i);
        flag = 0;
        break;
    }
}

if(flag == 1)
{
    console.log(n + ' is a prime number');
}else{
    console.log(n + ' is composite number');
}