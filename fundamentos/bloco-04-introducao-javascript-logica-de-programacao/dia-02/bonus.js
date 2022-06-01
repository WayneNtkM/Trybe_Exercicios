let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];


// Crescente:

// for (let index = 0; index < numbers.length; index+=1) {
//     for (let j = 0; j < index; j+=1) {
//         if (numbers[index] < numbers[j]) {
//             let aux = numbers[index];
//             numbers[index] = numbers[j];
//             numbers[j] = aux;
//         }
//     }
// }
// console.log(numbers)


// Decrescente:

// for (let index = 0; index < numbers.length; index+=1) {
//     for (let j = 0; j < index; j+=1) {
//         if (numbers[index] > numbers[j]) {
//             let aux = numbers[index];
//             numbers[index] = numbers[j];
//             numbers[j] = aux;
//         }
//     }
// }
// console.log(numbers)


// Novo array:


// for (let index = 0; index < numbers.length; index+=1) { 
//     if (index == numbers.length - 1) {
//         numbers2.push(numbers[index] * 2)
//         } else {
//             numbers2.push(numbers[index] * numbers[index + 1])
//         }
// }
// console.log(numbers2)
// console.log(numbers)
