//Criando a interatividade da página de trabalhos
function mudarTodos(){
  document.querySelector('.imagens-trab').style.display = "";
  document.querySelector('.imagens-trab2').style.display = "block";
  document.querySelector('.imagens-trab3').style.display = "block";
  document.querySelector('.imagens-trab4').style.display = "block";
  document.querySelector('.imagens-trab5').style.display = "block";
  document.querySelector('.imagens-trab6').style.display = "block";
}

function mudarPilotos(){
  document.querySelector('.imagens-trab').style.display = "none";
  document.querySelector('.imagens-trab2').style.display = "block";
  document.querySelector('.imagens-trab3').style.display = "none";
  document.querySelector('.imagens-trab4').style.display = "none";
  document.querySelector('.imagens-trab5').style.display = "none";
  document.querySelector('.imagens-trab6').style.display = "none";
}

function mudarPromos(){
  document.querySelector('.imagens-trab').style.display = "none";
  document.querySelector('.imagens-trab2').style.display = "none";
  document.querySelector('.imagens-trab3').style.display = "block";
  document.querySelector('.imagens-trab4').style.display = "none";
  document.querySelector('.imagens-trab5').style.display = "none";
  document.querySelector('.imagens-trab6').style.display = "none";
}

function mudarLongas(){
  document.querySelector('.imagens-trab').style.display = "none";
  document.querySelector('.imagens-trab2').style.display = "none";
  document.querySelector('.imagens-trab3').style.display = "none";
  document.querySelector('.imagens-trab4').style.display = "block";
  document.querySelector('.imagens-trab5').style.display = "none";
  document.querySelector('.imagens-trab6').style.display = "none";
}

function mudarCurtas(){
  document.querySelector('.imagens-trab').style.display = "none";
  document.querySelector('.imagens-trab2').style.display = "none";
  document.querySelector('.imagens-trab3').style.display = "none";
  document.querySelector('.imagens-trab4').style.display = "none";
  document.querySelector('.imagens-trab5').style.display = "block";
  document.querySelector('.imagens-trab6').style.display = "none";
}

function mudarCenas(){
  document.querySelector('.imagens-trab').style.display = "none";
  document.querySelector('.imagens-trab2').style.display = "none";
  document.querySelector('.imagens-trab3').style.display = "none";
  document.querySelector('.imagens-trab4').style.display = "none";
  document.querySelector('.imagens-trab5').style.display = "none";
  document.querySelector('.imagens-trab6').style.display = "block";
}