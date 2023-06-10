import cpfValido from "./validacao-cpf.js";
console.log("italo");
const submit = document.querySelector("[data-formulario]");
const obrigatorio = document.querySelectorAll("[required]");
console.log(obrigatorio);

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  //event.target permite identificar o elemento específico que acionou um evento
  //em seguida, tomar ações específicas com base nesse elemento.
  console.log(e);
  console.log(e.target.nome.value);
  console.log(e.target.email.value);
  console.log(e.target.rg.value);
  console.log(e.target.cpf.value);
  console.log(e.target.aniversario.value);
  console.log(e.target.termos.value);
});

obrigatorio.forEach((campo) => {
  // blur -> sair do cammpo do input em questao
  // usar a função call back precisar passar o parametro ou usar o event
  campo.addEventListener("blur", (e) => campoVerifica(e.target));
});

function campoVerifica(elemento) {
console.log(elemento);
console.log(elemento.name);
        if(elemento.name == "cpf" && elemento.value.length  >= "11"){
             //um cpf com numero necesario 
            cpfValido(elemento)
        }
}

function campoVerifica2(elemento) {
  const divFilha = elemento;
  const divPai = divFilha.parentElement;
  console.log(divPai);
  const erro = divPai.querySelector(".mensagem-erro");
  erro.innerHTML = "";
  if (!elemento.value) {
    console.log(divPai);
    console.log(elemento.dataset.categoria);
    //template String
    erro.innerHTML = `O ${elemento.dataset.categoria} nao pode esta vazia`;
  }
}
