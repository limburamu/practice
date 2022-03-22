num = 19;
s = " ";
while(num > 0)
{
    s = (num % 2 ) + s;
    num = parseInt(num / 2);
}
console.log(s);

