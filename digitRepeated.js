function repeated(arr, n)
{
     var count = 0;
     var digits = [];

     for(i = 0; i < arr.length; i++)
     {
          while(arr[i] > 0)
          {
               m = arr[i] % 10;
               digits.push(m);
               arr[i] = parseInt(arr[i] / 10);
          }
     }
     for(i = 0; i < digits.length; i++)
     {
          if(digits[i] == n)
          {
               count++;
          }
     }
     return count;
}
console.log(repeated([12, 15, 29, 43], 2));
console.log(repeated([12, 15, 29, 43], 1));
console.log(repeated([12, 15, 29, 43], 9));
