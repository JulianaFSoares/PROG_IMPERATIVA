function podeSubir(altura, acompanhado){
    if( altura > 140 && altura < 200){
        console.log("Acesso liberado")
        return true
    }

    else if(altura > 200){
        console.log("Acesso negado")
        return false
    }

    else if(altura <140){
        console.log("Acesso liberado com acompanhante")
        return true
    }

    else if(altura <120){
        console.log("Acesso negado")
        return false
    }

}

console.log(podeSubir(115));










