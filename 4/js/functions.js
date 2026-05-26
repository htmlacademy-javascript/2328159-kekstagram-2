/*  Задача № 1 ( Функция для  проверки длины строки)*/
function comparephraseLenght(phrase, maxlenght) {
  return(phrase.length <= maxlenght);

}

comparephraseLenght(' Вновь пришла зима' , 18);


/*  Задача № 2(  Фунция проверки является ли строка палиндромом ) */
const Palindrome = (phrase)=> {
  phrase = phrase.replaceAll(' ' , '').tolowerCase();
  let reverseorder = '';
  for(let i = phrase.length - 1; i >= 0; i--){
    reverseorder += phrase[i];
  }
  return phrase === reverseorder;
};

Palindrome('топот');
