// var a, b;
// var sum, sub, mult, mod, div;

// a = 7;
// b = 11;

// sum = a + b;
// sub = a - b;
// mult = a * b;
// mod = b % a;
// div = a / b;

// console.log(sum)
// console.log(sub)
// console.log(mult)
// console.log(mod)
// console.log(div)



// var a, b;
// a = 21;
// b = 6;

// if (a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }


// var a, b, c;
// a = 30;
// b = 15;
// c = 33;

// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else {
//     console.log(c)
// }


// const valor = 7;

// if (valor > 0) {
//     console.log("positivo")
// } else if (valor < 0) {
//     console.log("negativo")
// } else {
//     console.log("zero")
// }


// const ang1 = 90;
// const ang2 = 45;
// const ang3 = 45;
// var valid;
// var sum = ang1 + ang2 + ang3;

// if (sum == 180) {
//     valid = 'true';
//     console.log(valid)
// } else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
//     console.log('Invalid')
// } else {
//     valid = 'false';
//     console.log(valid)
// }


// let peca = 'TORRE';
// var pecalc = peca.toLowerCase();
// var movimento;

// switch (pecalc) {
//     case 'bispo':
//         movimento = 'diagonal';
//         console.log(movimento)
//         break
//     case 'cavalo':
//         movimento = 'em L';
//         console.log(movimento)
//         break 
//     case 'rainha':
//         movimento = 'tudo?';
//         console.log(movimento)
//         break
//     case 'rei':
//         movimento = 'sei la'
//         console.log(movimento)
//         break
//     case 'torre':
//         movimento = 'reto'
//         console.log(movimento)
//         break
//     case 'peao':
//         movimento = 'uma casa'
//         console.log(movimento)
//     default:
//         console.log('invalido');
// }


// var nota = 100;
// var por = nota /100;

// if (nota >= 90 && nota <= 100) {
//     console.log('A')
// } else if (nota >= 80 && nota < 90) {
//     console.log('B') 
// } else if (nota >= 70 && nota <= 80) {
//     console.log('C')
// } else if (nota >=60 && nota <= 70) {
//     console.log('D')
// } else if (nota <50) {
//     console.log('F')
// } else {
//     console.log('Error')
// }


// const num = 6;
// const num2 = 3;
// const num3 = 4;

// if (num % 2 !== 0|| num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }


// const custo = 100;
// const valorVenda = 1000;
// var lucro;
// const custoTotal = custo + (custo * 20/100);

// if (custo < 0 || valorVenda < 0) {
//     console.log('error')
// } else {
//     lucro = valorVenda - custoTotal;
//     console.log(lucro)
// }


// var salarioBruto = 3000;
// var salarioliquido, salarioinss;

// if (salarioBruto <= 1556.94) {
//     salarioinss = salarioBruto - (salarioBruto * 8/100);
    
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//     salarioinss = salarioBruto - (salarioBruto * 9/100);
    
// } else if (salarioBruto >=  2594.93 && salarioBruto <= 5189.82) {
//     salarioinss = salarioBruto - (salarioBruto * 11/100);
    
// } else {
//     salarioinss = salarioBruto - 570.88;
    
// }

// if (salarioinss <= 1903.98) {
//     salarioliquido = salarioinss;
//     console.log(salarioliquido)
// } else if (salarioinss >= 1903.99 && salarioinss <= 2826.65) {
//     salarioliquido = salarioinss - (salarioinss * 7.5/100 - 142.80);
//     console.log(salarioliquido)
// } else if (salarioinss >= 2826.66 && salarioinss <= 3751.05) {
//     salarioliquido = salarioinss - (salarioinss * 15/100 - 354.80);
//     console.log(salarioliquido)
// } else if (salarioinss >= 3751.06 && salarioinss <= 4664.68) {
//     salarioliquido = salarioinss - (salarioinss * 22.5/100 - 636.13);
//     console.log(salarioliquido)
// } else {
//     salarioliquido = salarioinss - (salarioinss * 27.5/100 - 869.36);
//     console.log(salarioliquido)
// }