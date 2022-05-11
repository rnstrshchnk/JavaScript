// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
// Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
//Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
const fs = require('fs');
const usersArray = require('./hmw_4_task2');

const task_2 = (usersArray) => {
    const names = [];
  return usersArray.filter(user => {
       if(!names.includes(user.name)){
           return user && names.push(user.name)
       }
   })
}
console.log(task_2(usersArray));
console.log(usersArray.length);
console.log(task_2(usersArray).length);