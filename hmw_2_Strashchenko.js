let line = prompt ('Enter the line: ')


let countError = 0;

if (!(line.length>=5 && line.length<=64)){
    alert('Length of line is invalid')
    countError++;
}
if (!(/[a-zа-яё]/i.test(line))){
    alert('Line doesn\'t have letters')
    countError++;
}
// (line.match(/[A-ZА-ЯЁ]/))
if (!(/[A-ZА-ЯЁ]/.test(line))){
       alert('Line doesn\'t have uppercase letters')
    countError++;
}

if (!(/[0-9]/i.test(line))){
    alert('Line doesn\'t have numbers')
    countError++;
}

if (!(/[@]/i.test(line))){
    alert('Line doesn\'t have a "@"')
    countError++;
}

countError === 0 ? alert('Length of line is valid') : alert ('Line consists '+ countError + ' mistakes')






// if (line.length>=5 && line.length<=64){
//     if (/[a-zа-яё]/i.test(line) ){

//         if (line.toUpperCase()){

//             if (/[0-9]/i.test(line)){

//                 if(/[@]/i.test(line)){

//                   alert('Line is valid')
                  
//                 } else {
//                     alert('Line doesn\'t have a "@"')
//                 }
//             } else {
//                 alert('Line doesn\'t have numbers')
//             }
//         }
//         else {
//             alert ('Line doesn\'t have uppercase letters')
//         }
//     } else {
//         alert('Line doesn\'t have letters')
//     }
// } else (
//     alert('Length of line is invalid')
// )