
function adicionar(par1, par2){
    return par1+par2
      
}

function subtracao(par1, par2){
    return par1-par2

}

function multi(par1, par2) {
    return par1*par2
}

function div(par1, par2) {
    return par1/par2
    
}

function quadradoDoNumero(num) {
    return num*num
}

function mediaDeTresNumeros(par1, par2, par3) {
    return adicionar(par1, par2)+par3/3
}

function calculaPorcetagem(par1, par2) {
    return multi(par1, par2)/100
}



console.log ("-------------- Teste de Operações / Calculador --------------")

console.log(adicionar(3,1));
console.log(subtracao(4,1));
console.log(multi(5,2));
console.log(div(9,0));
console.log(quadradoDoNumero(2));
console.log(mediaDeTresNumeros(2,2,1));
console.log(calculaPorcetagem(300,15));





