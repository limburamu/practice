function mergedNumber(n1, n2)
{
    var s = 0, i, m;
    for(i = 0; i < 3; i++)
    {
        s = (n1 * 10);
        n1 = s;
        m = s + n2;
    }
    return m;
}
console.log(mergedNumber(123, 789));
