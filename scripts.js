// Obter os elementos dos modais
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

// Obter os botões para abrir os modais
var btnTrailer1 = document.getElementById("btnTrailer1");
var btnTrailer2 = document.getElementById("btnTrailer2");
var btnTrailer3 = document.getElementById("btnTrailer3");

// Obter os elementos de fechar os modais
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");

// Quando o botão "Assistir ao Trailer" for clicado, abre o modal
btnTrailer1.onclick = function() {
  modal1.style.display = "block";
}

btnTrailer2.onclick = function() {
  modal2.style.display = "block";
}

btnTrailer3.onclick = function() {
  modal3.style.display = "block";
}

// Quando o usuário clicar no "x", fecha o modal
close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}

close3.onclick = function() {
  modal3.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


// Alternar Tema
document.getElementById("toggle-theme").addEventListener("click", () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle("dark-mode");
  
    // Atualiza o texto do botão
    const isDarkMode = document.body.classList.contains("dark-mode");
    document.getElementById("toggle-theme").textContent = isDarkMode
      ? "Modo Claro"
      : "Modo Escuro";
  });
  
  
  // Validação de Formulário
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });



  