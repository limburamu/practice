str = 'hello world';
sub = 'hel';

for(i = 0; i < str.length - sub.length; i++)
{
    flag = 1;
    for(j = 0; j < sub.length; j++)
    {
        if(str[i+j] != sub[j])
        {
            flag = 0;
            break;
        }
    }
    if(flag == 1)
    {
        console.log(sub+' is present in ' + str);
        break;
    }   
}
if(flag == 0)
    {
        console.log(sub+ ' is not present in ' + str);
    }

