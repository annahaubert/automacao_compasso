var list = [1, 6, 9, 15, 24, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 40, 45, 49, 50]
var soma = 0
var media = 0
var cont = 0

for(let i = 0; i < list.length; i++){ 
    if(list[i] % 2 == 0){ 
        cont ++
        soma += list[i]
    }
}

media = soma / cont
console.log(`A média aritmética é: ${media}`)