str = 'madam';
for(i = 0; i < str.length / 2; i++)
{
    if(str[i] !== str[str.length - 1 - i])
    {
        console.log(str + ' is not palindrome');
        break;
    }
}
if(i == str.length / 2)
{
    console.log(str + ' is palindrome');
}