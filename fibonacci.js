function fibonacci(num)
{
    var fibo = 0 , f1 = 0, f2 = 1, i;
      console.log(f1);
      console.log(f2);
    for(i = 0; i < num; i++)
    {
        fibo = f1 + f2;
        f1 = f2;
        f2 = fibo;
        console.log(fibo);
    }
    return fibo;
}
console.log(fibonacci(5));