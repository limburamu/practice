num = 68709;
s = 0;
while(num > 0)
{
    r = num % 10;
    s = s * 10 + r;
    num = parseInt(num / 10);
}
console.log(s);
