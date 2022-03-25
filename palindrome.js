function palindrome(num)
{
    var temp = num, s = 0, r;
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
    else
    {
        console.log(temp + ' is not a palindrome number');
    }
    return s;
}
console.log(palindrome(122));
console.log(palindrome(212));
console.log(palindrome(4567));
console.log(palindrome(4554));