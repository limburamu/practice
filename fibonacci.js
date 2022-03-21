fibo = 0;
f1 = 0
f2 = 1;
console.log(f1);
console.log(f2);
for(i = 0; i < 10; i ++)
{
    fibo = f1 + f2;
    f1 = f2;
    f2 = fibo;
    console.log(fibo);
}
