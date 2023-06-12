// validaçaõ e regra de negocio  atribuido a erro customError
export default function ehMaiorDeIdade(campo){
    console.log(campo.value)
    const dataDeNascimento = new Date(campo.value)
    console.log("=======//2=======")
    console.log(!validaIdade(dataDeNascimento))
    if(!validaIdade(dataDeNascimento)){
        console.table(campo.validity)
        console.log("v1")
        campo.setCustomValidity('O usuario não é maior de idade') //  campo.setCustomValidity('string') retorna true   
    }

    // console.log(validaIdade(dataDeNascimento))
    // if(!validaIdade(dataDeNascimento)){
    //     console.log("nao tem idade")
    // }else{
    //     console.log("tem idade")
    // }
}   

function validaIdade(data){
  //  console.log(data)
    const dataAtual= new Date();
    // pegar valor do dia em questao
    const dataIdade18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());
    // CRIAR UMA DATA COM 18 ANOS NO FUTURO
    // E SABER SE ESSA DATA JA CHEGOU OU SE JA PASSOU 
    return dataAtual >= dataIdade18; 
    
}