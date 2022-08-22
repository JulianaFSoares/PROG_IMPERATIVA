
function microondas (opcao,tempo) {

                 
    if((opcao ==1 && tempo >=10 && tempo <=20) || (opcao ==2 && tempo >=8 && tempo <=16) || (opcao ==5 && tempo >=8 && tempo <=16) || 
    (opcao ==3 && tempo >=15 && tempo <=30) || (opcao ==4 && tempo >=12 && tempo <=24)) {
        console.log ('Prato pronto, bom apetite!');
        return opcao && tempo
      
    }
    
    else if ((opcao ==1 && tempo >20 && tempo <=30) || (opcao ==2 && tempo >16 && tempo <=24) || (opcao ==5 && tempo >16 && tempo <=24) 
    || (opcao ==3 && tempo >30 && tempo <=45) || (opcao ==4 && tempo >24 && tempo <=36)) {
        console.log ('Comida queimou!');
        return opcao && tempo
        
    }

    else if ((opcao ==1 && tempo <10) || (opcao ==2 && tempo <8) || (opcao ==5 && tempo <8) || (opcao ==3 && tempo <15) || 
    (opcao ==4 && tempo <12)) {
    console.log ('Tempo insuficiente!');
        return opcao && tempo
    }

    else if ((opcao ==1 && tempo >30) || (opcao ==2 && tempo >24) || (opcao ==5 && tempo >24) || (opcao ==3 & tempo >45) || 
    (opcao ==4 && tempo >36)) {
        console.log ('Kabumm!');
        return opcao && tempo
    }

    else ((opcao >=6 && tempo >=1))    
        console.log ('Prato inexistente!');
        return opcao && tempo
}

microondas(1,11);
