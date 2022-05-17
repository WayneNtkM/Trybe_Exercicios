// 1 - Fatorial

// let fatorial = 10;
// let resultado = fatorial;

// for (i = 1; i <fatorial; i+=1) {
//     resultado *= i;
// }
// console.log(resultado)


// 2 - Inverter

// let word = 'tryber';
// let reverse = "";

// for (var i = word.length - 1; i >= 0; i-=1) {
//     reverse += word[i]
// }
// console.log(reverse)


// 3 - Maior e Menor

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = array[0];
// let menor = array[0];

// for (let i = 0; i < array.length; i+=1) {
//     if (array[i].length > maior.length) {
//         maior = array[i]
//     } else if (array[i].length < menor.length) {
//         menor = array[i]
//     }
// }
// console.log(maior)
// console.log(menor)


// 4 - Número primo

// let maiorPrimo = 0;

// for (let num = 0; num <= 50; num+=1) {
//     let primo = true;
//     for (let div = 2; div < num; div +=1) {
//         if (num % div === 0) {
//             primo = false;
//         }
//     }
//     if (primo) {
//         maiorPrimo = num;
//     }
// }
// console.log(maiorPrimo)


let maiorPrimo = 0;
let numbers = [];

for (let i = 0; i <= 50; i+=1) {
    numbers.push(i)
}
console.log(numbers)

for (let i = 0; i <= 50; i+=1) {
    let primo = true;
    for (let div = 2; div < 50; div +=1) {
        if (numbers[i] % div === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = numbers[i];
    }
}
console.log(maiorPrimo)