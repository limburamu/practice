function repeatedArray(arr)
{
     var i, m, digits = [];
     for(i = 0; i < arr.length; i++)
     {
          while(arr[i] > 0)
          {
               m = arr[i] % 10;
               digits.push(m)
               arr[i] = parseInt(arr[i] / 10);
          }
     }

     digits = digits.filter((c, index) => {
          return digits.indexOf(c) == index;
     });
     
     return digits;
}
console.log(repeatedArray([12, 15, 29, 43]));



