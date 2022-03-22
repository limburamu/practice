let num = 420;
for(i = 2; i <= num; i++)
{
    if(num % i == 0)
    {
        console.log(i);
        num = num / i;
    }
}

