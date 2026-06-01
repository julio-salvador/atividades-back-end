let nota1 = 5.6;
let nota3 = 8.3;
let nota2 = 7.4;

const nome = "Lando Norris"

let media = (nota1 + nota2 + nota3) / 3;

if (media >=7){
    console.log("O aluno está: Aprovado")
}

if (media >=5 && media <7){
    console.log("O aluno está de: Se liga")
}

if (media <5){
    console.log("O aluno está: Reprovado")
}

console.log("O aluno " + nome, "tem média: " + media.toFixed(2))

