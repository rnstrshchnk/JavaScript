let item_1;
item_1 = 5;
console.log(item_1)
let item_2;
item_2 = 3;
console.log(item_2)
let item_3;
item_3 = item_1+item_2;
console.log(item_3)
let item_4;
item_4 = "Yolochka";
console.log(item_4)
console.log(item_3+item_4)
console.log(item_3*item_4)
let item_5;
item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type=typeof(item_6);
console.log("item_6 == "+item_6+" item_6_type == "+item_6_type);
let item_7 = String(item_6);
let item_7_type = typeof(item_7);
console.log("item_7 == "+item_7+" item_7_type == "+item_7_type);
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

function checkAge(age){
       
  if(Number(age)){
    if (age < 18){
        alert("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        alert("Welcome !")
    } else if (age > age_3){
        alert("Keep calm and look Culture channel")
    } else{
        alert("Technical work")
    }
} else {
        alert("Error")
    }
}

let task_4 = prompt('Enter age: ');
checkAge(task_4);
