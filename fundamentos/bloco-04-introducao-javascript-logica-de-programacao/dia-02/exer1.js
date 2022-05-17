// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let media = 0;
// let maior = 0;
// let impar = [];


// 1.
// for (index = 0; index < numbers.length; index+=1) {
//     console.log(numbers[index])
// }


// .2 .3 .4
// for (const num of numbers) {
//     sum += num;
//     media = sum / numbers.length;
// }
// console.log(sum)
// console.log(media)

// if (media > 20) {
//     console.log('valor maior que 20')
// } else {
//     console.log('valor menor ou igual a 20')
// }


// .5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;

// for (var index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// } console.log(maior)


// .6
// for (var index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] % 2 !== 0) {
//         impar.push(numbers[index])
//     }
// } console.log(impar)


// .7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = Number.POSITIVE_INFINITY;

// for (let index = 0; index < numbers.length; index+=1) {
//     menor = Math.min(menor, numbers[index])
// }
// console.log(menor)

// Resolução extra
// let menor = Math.min(...numbers);
// console.log(menor)


// .8
let numeros = [];
let num = 0;

for (var index = 0; index < 25; index+=1) {
    num += 1;
    numeros.push(num)
}
// console.log(numeros)


// .9
for (let div of numeros) {
    div = div / 2;
    console.log(div)
}