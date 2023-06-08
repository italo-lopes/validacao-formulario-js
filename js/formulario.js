console.log("italo")

const submit = document.querySelector('[data-formulario]')
console.log(submit)

submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    //event.target permite identificar o elemento específico que acionou um evento 
    //em seguida, tomar ações específicas com base nesse elemento.
    console.log(e)
    console.log(e.target.nome.value)
    console.log(e.target.email.value)
    console.log(e.target.rg.value)
    console.log(e.target.cpf.value)
    console.log(e.target.aniversario.value)
    console.log(e.target.termos.value)
} )