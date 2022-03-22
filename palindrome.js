let num = 11211;
temp = num;
s = 0;
while(num > 0)
{
    r = num % 10;
    s = (s * 10) + r;
    num = parseInt(num / 10);
}
if(s == temp)
{
    console.log(temp + ' is a palindrome number');
}
else{
    console.log(temp + ' is not a palindrome number');
}