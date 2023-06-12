import cpfValido from "./validacao-cpf.js";
import ehMaiorDeIdade from "./validacao-idade.js"

const tipoDeErro = ["valueMissing","patternMismatch","customError","tooShort"]
const mensagens = {
  nome: {
      valueMissing: "O campo de nome não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "Por favor, preencha um nome válido."
  },
  email: {
      valueMissing: "O campo de e-mail não pode estar vazio.",
      typeMismatch: "Por favor, preencha um email válido.",
      tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
      valueMissing: "O campo de RG não pode estar vazio.",
      patternMismatch: "Por favor, preencha um RG válido.",
      tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
      valueMissing: 'O campo de CPF não pode estar vazio.',
      patternMismatch: "Por favor, preencha um CPF válido.",
      customError: "O CPF digitado não existe.",
      tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  aniversario: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
      valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}
const submit = document.querySelector("[data-formulario]");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  //event.target permite identificar o elemento específico que acionou um evento
  //em seguida, tomar ações específicas com base nesse elemento.
  console.log(e.target.elements["nome"].value);
  console.log(e.target.nome.value);
  console.log(e.target.email.value);
  console.log(e.target.rg.value);
  console.log(e.target.cpf.value);
  console.log(e.target.aniversario.value);
  console.log(e.target.termos.value);

  console.log(e.target.elements["nome"].value);
// criando um obj com o form sempre que necessario
  const listaRegistro = {
          "nome": e.target.elements['nome'].value,
          "email": e.target.elements['email'].value,
          "rg": e.target.elements['rg'].value,
          "cpf": e.target.elements['cpf'].value,
          "aniversario": e.target.elements['aniversario'].value,
          "termos":e.target.elements['termos'].value
}
console.table(listaRegistro)
localStorage.setItem("cadastro1",JSON.stringify(listaRegistro))
window.location.href = '/pages/abrir-conta-form-2.html'


});

const obrigatorio = document.querySelectorAll("[required]");
obrigatorio.forEach((campo) => {
  // blur -> sair do cammpo do input em questao
  // usar a função call back precisar passar o parametro ou usar o event
  campo.addEventListener("blur", (e) => campoVerifica(e.target));
  // evento que tirar mensagem de erro padrao
  campo.addEventListener("invalid" , (e) => {
    console.log("erro")
    e.preventDefault()
  })
});

function campoVerifica(elemento) {
// receta informação a cada saida de foco do input a mengaem e o custom erro
  let mensagem = "";
  elemento.setCustomValidity('') 
  //nao tem nada o erro custom retorna false sem erro
  // faz a verificação de requisitos adicionais em arquivos diferentes
        if(elemento.name == "cpf" && elemento.value.length  >= "11"){
             //um cpf com numero necesario 
            cpfValido(elemento)
        }
        if(elemento.name == "aniversario" && elemento.value != ""){
            //um  idade maior que 18 
            ehMaiorDeIdade(elemento)
       }
       // busca erro e msg 
       // salva um array de erros e um obj com input e erros sao seus stributos 
       tipoDeErro.forEach((erro) => {
        // valida qual erro
        if(elemento.validity[erro]){
          mensagem = mensagens[elemento.name][erro];
        }
      })
      // elemento.parentNode- pai do elemento 
      const mensagemError = elemento.parentNode.querySelector(".mensagem-erro")
      // parent com essa class nesse no no caso o seu irmao 
      // verifica se vai mostrar a msg de erro ou nao checkValidity();
      const validInput = elemento.checkValidity();
      // verifica como true ou false a validacao geral(se ainda tem algum erro)
      console.log(validInput)
      console.table(elemento.validity)
      // o que acontece se tem validae ou n
      !validInput? 
       mensagemError.textContent = mensagem : 
       mensagemError.textContent = ""
      //========================
      console.log(mensagemError)
      console.log(mensagemError.textContent)
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
