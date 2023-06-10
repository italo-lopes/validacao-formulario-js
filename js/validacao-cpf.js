export default function cpfValido(cpfElemento) {
  const cpf = cpfElemento.value.replace(/\.|-/g, "");
  const recebeValidacao1 = primeiroDigidoValidacaoCPF(cpf);
  console.log(recebeValidacao1);
  console.log(cpfRepetido(cpf));
  // operador ternario
  primeiroDigidoValidacaoCPF(cpf) ||
  segundoDigidoValidacaoCPF(cpf) ||
  cpfRepetido(cpf)
    ? console.log("Nao exite")
    : console.log("exite");

  // if normal
  if (primeiroDigidoValidacaoCPF(cpf) ||segundoDigidoValidacaoCPF(cpf) ||cpfRepetido(cpf)) {
    // se algum retornar true é que achou um erro na logica de requisitos
    console.log("Nao exite");
  } else {
    console.log("exite");
  }
}
// bloco de logica em function
function cpfRepetido(cpf) {
  const numeroRepetidosInvalido = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  // retorna false o erro = valido
  return numeroRepetidosInvalido.includes(cpf);
}
// logica de validação do -xx  dos dois ultimos dig do cpf
function primeiroDigidoValidacaoCPF(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma = soma + cpf[tamanho] * multiplicador;
    multiplicador--;
  }
  console.log(soma);
  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) soma = 0;

  console.log(soma);
  // retorna false o erro = valido
  return soma != cpf[9];
}

function segundoDigidoValidacaoCPF(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma = soma + cpf[tamanho] * multiplicador;
    multiplicador--;
  }
  console.log(soma);
  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) soma = 0;

  console.log(soma);
  // retorna false o erro = valido
  return soma != cpf[10];
}
