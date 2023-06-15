console.log("acesso a camera");
const videoBotao = document.querySelector("[data-video-botao]");
const camera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const mensagem = document.querySelector('[data-mensagem ="semCamera"]');
const enviar = document.querySelector('[data-enviar]')

//ligar a caemra
videoBotao.addEventListener("click", (e) => {
  iniciarVideo();
});
// Variável para manter a referência do MediaStream
var videoPlay = "";
async function iniciarVideo() {
  console.log("iniciar video");
  // try vasia tentar fazer a cominação webcam com o navegador
  //catch caso aconteca algum erro
  try {
    videoPlay = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });

    videoBotao.style.display = "none";
    camera.style.display = "block";

    video.srcObject = videoPlay;
    console.log(videoPlay);
    capturarFotoWebCam();
  } catch (e) {
    mensagem.style.display = "block";
    console.log(video);
    mensagem.innerHTML =
      '<img src="/img/Gato.png" alt="gatinho de erro"><br>Sem camera<br><br>';
    console.log("nao exite video>", e);
  }
}
//capturar foto da camera
const mensagemCanvas = document.querySelector('[data-mensagem="canvas"]');
const canvas = document.querySelector("[data-video-canvas]");
function capturarFotoWebCam() {
  mensagem.style.display = "none";
  console.log("----------");
  console.log(mensagemCanvas);
}

let imgURL = "";
tirarFoto.addEventListener("click", () => {
  console.log(video);
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height); //construido uma imagem a partir de um local
  imgURL = canvas.toDataURL("image/jpeg"); // transformando
  console.log(canvas);
  mensagemCanvas.style.display = "block";
  console.log(imgURL);
  videoBotao.style.display = "block";
  //video.srcObject= null;
  //srcObject -> para mediaStream
  console.log(videoPlay);
  stopMediaStream();
  console.log(videoPlay);
  camera.style.display = "none";
  // console.log(mensagemCanvas)
});

// Função para parar a 1.midia do navegador e as 2.faixas de mídia
function stopMediaStream() {
  // Parar todas as 2.faixas de mídia
  if (videoPlay) {
    videoPlay.getTracks().forEach(function (track) {
      console.log(track);
      track.stop();
    });
  }
  // 1.Definir midia do navegador como null
  videoPlay = null;
}

// enviar dado 
enviar.addEventListener("click",(event) => {
  console.log(localStorage.getItem("cadastro1"))
  let dado1 =localStorage.getItem("cadastro1")
  dado1= JSON.parse(dado1)
  // condiçoes pra qual img adicionar
  dado1.imagem = imgURL
  // add img ao obj
  console.log(JSON.stringify(dado1))
  //transformar o obj 
  localStorage.setItem("cadastro1", JSON.stringify(dado1))
  console.log(dado1);

  window.location.href = "./abrir-conta-form-3.html"
})


// add foto (sem camera)
const file = new FileReader();
const pegarFoto2 = document.querySelector("#img-input");
const preview = document.getElementById("preview");
/*
//mostar a foto em modo data sem precisar de servidor 
//dinamicamente 
pegarFoto2.addEventListener("change", (e) => {
  mensagemCanvas.style.display="none"
  e.target.files[0] && e.target.files
    ? file.readAsDataURL(e.target.files[0]) // ativa o evento passando o elemento
    : (preview.src = "");
});

file.addEventListener("load", (e) => {
    console.log(e.target)
  preview.src = e.target.result;
});
*/
/*
function readImage() {
  console.log(this.files);
  if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function (e) {
      // console.log(e.target.result);
      document.getElementById("preview").src = e.target.result;
      console.log(document.getElementById("preview"));
    };
    file.readAsDataURL(this.files[0]);
  }
}
document.getElementById("img-input").addEventListener("change", readImage, false);
*/
/*
const previewFoto = document.querySelector("[data-foto-preview]")
const camera2 = document.querySelector("[data-camera2]")
const salvarFoto = document.querySelector("[data-salvar-foto2]")
camera2.style.display = "block";
salvarFoto.addEventListener("click", ()=>{
    const  foto = document.querySelector("#myFile")
    console.log(foto.files)
    console.log(foto.files[0])
    var file = new FileReader();
    console.log(file)
    file.onload = (e)=>{
        previewFoto.src = e.target.result;
    };
     file.addEventListener("load",(e)=>{
        previewFoto.src = e.target.result;
     })

    file.readAsDataURL(foto.files[0]);// ativa o escutador
})
*/
