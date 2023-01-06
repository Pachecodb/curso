const notas = [n = 7, n2 = 8, n3 = 10];

const media = (n + n2 + n3) / 3;

console.log("Sua nota é: ", media.toFixed(1));

if (media >= 7) {
    console.log("Parabens, voce foi aprovado! ");
} else if (media >= 5 && media <= 6.9) {
    console.log("Voce esta em recuperação");
} else {
    console.log("Infelizmente voce foi reprovado, estude mais");
}
console.log("Fim");