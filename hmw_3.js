// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

for (let i=0; i<=10; i++){
console.log(Math.pow(2,i))
}

const mathpow =function(i){
    console.log(Math.pow(2,i))
}

mathpow(10);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
const printSmile_1 = function(stroka){
   for (let i=1; i<=5; i++){
       console.log(stroka.repeat(i));
   }
   }
   
   printSmile_1(':p');
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)

const printSmile_2 = function(stroka, numberOfRows){
for (let i=1; i<=numberOfRows; i++){
    console.log(stroka.repeat(i));
}
}

printSmile_2(':p', 6);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'
const  getWordStructure = function(word){
    let word_arr=word.toLowerCase().split('');
    let vowels = 'аеёиоуыэюяaeiou'; 
    let consonants = 'бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz';

    let numOfVowels = word_arr.reduce( (sum, num) => {
        if (vowels.indexOf (num) !==-1) { 
           sum++; 
        }
        return sum;
     }, 0); 
     let numOfConsonants = word_arr.reduce( (sum, num) => {
        if (consonants.indexOf (num) !==-1) { 
           sum++;
        }
        return sum; 
     }, 0); 
     return [numOfVowels,numOfConsonants];
     
}
 let word = 'Case-list';    
let [numOfVowels, numOfConsonants]= getWordStructure(word);
console.log('Слово ' + word + ' состоит из ' + numOfVowels + ' гласных и ' + numOfConsonants +' согласных букв')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'
function isPalindrom(word) {
   var removeChar = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();
   var checkPalindrome = removeChar.split('').reverse().join('');

    return (removeChar === checkPalindrome);
 }
  console.log(isPalindrom('Abba'))