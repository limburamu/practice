function pSquare(n)
{
    var i, flag = 0;
    for(i = 1; i < n ; i++)
    {
        if(n == i * i)
        {
            flag = 1;
            break;
        }
    }
    return flag;
}
console.log(pSquare(9));
console.log(pSquare(8));