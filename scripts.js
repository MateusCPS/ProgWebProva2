var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var btnTrailer1 = document.getElementById("btnTrailer1");
var btnTrailer2 = document.getElementById("btnTrailer2");
var btnTrailer3 = document.getElementById("btnTrailer3");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");

btnTrailer1.onclick = function() {
  modal1.style.display = "block";
}

btnTrailer2.onclick = function() {
  modal2.style.display = "block";
}

btnTrailer3.onclick = function() {
  modal3.style.display = "block";
}

close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}

close3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


document.getElementById("toggle-theme").addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
  
    const isDarkMode = document.body.classList.contains("dark-mode");
    document.getElementById("toggle-theme").textContent = isDarkMode
      ? "Modo Claro"
      : "Modo Escuro";
  });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });



  