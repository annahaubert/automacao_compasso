var idade = 19
var compara = ""

if (idade >= 18) {
    compara = "Maior de idade"
}

else if (idade > 12 && idade < 18) {
    compara = "Você é um adolescente"
}

else {
    compara = "Você é uma criança"
}

console.log(compara)