function factorsSum(n)
{
    sum = 0;
    for(i = 1; i < n; i++)
    {
        if(n % i == 0)
        sum = sum + i;
    }
    return sum;
}
console.log(factorsSum(14))  