sum = 0;
let flag = 1;
for(i = 4; i <= 10; i++)
{
    for(j = 2; j <= i; j++)
    {
        
        if(i % j == 0)
        {
            flag = 0;
            break;
        }
        if(flag == 0)
{
    sum = sum + j;    
}

    }
}
console.log(sum);

