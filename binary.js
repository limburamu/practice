function binary(num)
{
    var s = " ";
    while(num > 0)
    {
        s = (num % 2) + s;
        num = parseInt(num / 2);
    }
    return s;
}
console.log(binary(14));
console.log(binary(4));
console.log(binary(10));

