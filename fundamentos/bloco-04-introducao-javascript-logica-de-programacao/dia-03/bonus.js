// Quadrado

// var n = 5;
// var aux = "";

// for (var l = 1; l <= n; l+=1) {
//     for(var c = 1; c <= n; c+=1) {
//         aux += "*";
//     }
//     console.log(aux);
//     aux = "";
// }


// Triângulo retângulo

// var n2 = 5;
// var aux2 = "";

// for (var l = 1; l <= n2; l+=1) {
//     for (var c = 1; c <= n2; c+=1) {
//         if (l === c) {
//             aux2 += "*";
//         }
//     }
//     console.log(aux2)
// }


// Triângulo invertido

var n3 = 5;
var aux3 = "";

for (var l = 1; l <=n3; l += 1) {
        for (var c = 1; c <= n3; c += 1) {
            if (l === 0 || l === n3 - 1) {
                aux3 += "*";
            } else {
                if (c === 0 || c === n3 - 1) {
                    aux3 += " ";
                } else {
                    aux3 += " ";
                }
            }
    }
    aux3 += "\n";
}
console.log(aux3)