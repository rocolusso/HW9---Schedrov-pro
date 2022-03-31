'use strict';

// Задание 1
//
// Скомбинировать инструкции if которые проверяю данные введенные пользователем в 1 одну
// инструкцию (объединить проверки с помощью логических операторов),
// получается что вместо 3 if..else..if
//     http://joxi.ru/V2VyLyZI8eOnDm у вас должен быть только один if с объединенным условием
// // и инструкция else которая срабатывает при успешном введении данных
//



//Решение 1

// const numOrsStr = prompt ('Enter string or number');
//
//  (numOrsStr === null) ? console.log('Вы отменили') :
//
//     (numOrsStr === '') ? console.log('Emty string') :
//
//         isNaN(+numOrsStr) ? console.log(' number is Ba_NaN') : console.log(+numOrsStr);



// //Решение 2
//
// const numOrsStr = prompt('Enter string or number');
// console.log( numOrsStr );
// if( numOrsStr === null || numOrsStr.trim() === '' || isNaN( +numOrsStr ) ) {
//     console.log('error');
// } else {
//     console.log(+numOrsStr);
// }



// Задание 2
//
// Переписать код ниже с использованием конструкции switch…case
//
//
//
// let numOrStr = prompt('input number or string');
//     console.log(numOrStr)
//
//     if(numOrStr === null) {
//         console.log('вы отменили')
//     } else if( numOrStr.trim() === '' ) {
//         console.log('Empty String');
//     } else if( isNaN( +numOrStr ) ) {
//         console.log(' number is Ba_NaN')
//     } else {
//         console.log('OK!')
//     }
//

// Решение:

// let numOrStr = prompt('Enter number or string');
// console.log(numOrStr);
// switch (true) {
//
//     case numOrStr === null :
//         console.log('Вы отменили');
//         break;
//     case numOrStr.trim() === '':
//       console.log('Empty string');
//       break;
//
//     case  isNaN( +numOrStr )  :
//         console.log('number is Ba_NaN');
//         break;
//     default:
//         console.log(+numOrStr);
//         break;
// }

