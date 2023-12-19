// Task - 1
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
  }
  
let max = maxOfThree(12, 56, 48);
console.log(max);



// Task - 2
function numbers(num) {
    var birlar = ['', 'bir', 'ikki', 'uch', 'tort', 'besh', 'olti', 'yetti', 'sakkiz', 'toqqiz'];
    var onlar = ['', '', 'yigirma', 'ottiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'toqson'];
    
    var result = '';
    
    if (num < 10) {
      result = birlar[num];
    } else if (num < 20) {
      switch (num) {
        case 10:
          result = 'on';
          break;
        case 11:
          result = 'on bir';
          break;
        case 12:
          result = 'on ikki';
          break;
        case 13:
          result = 'on uch';
          break;
        case 14:
          result = 'on toʻrt';
          break;
        case 15:
          result = 'on besh';
          break;
        case 16:
          result = 'on olti';
          break;
        case 17:
          result = 'on yetti';
          break;
        case 18:
          result = 'on sakkiz';
          break;
        case 19:
          result = 'on toqqiz';
          break;
      }
    } else {
      var onlarDigit = Math.floor(num / 10);
      var birlarDigit = num % 10;
      
      result = onlar[onlarDigit] + ' ' + birlar[birlarDigit];
    }
    
    return result;
  }
  
  console.log(numbers(45)); // "ellik besh"
  console.log(numbers(99)); // "toʻqson toʻqqiz"
  console.log(numbers(12)); // "oʻn ikki"
  