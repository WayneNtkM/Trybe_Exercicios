const nota = 86;

if (nota >= 80 && nota <= 100){
    console.log("Parabéns, você está aprovado(a)!")
} else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera")
} else if (nota < 60){
    console.log("Você foi reprovada(o)")
} else {
    console.log("Essa nota é desse site mesmo?")
}