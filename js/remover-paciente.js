var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

  tabela.addEventListener("dblclick", function(){

    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
      paiDoAlvo.remove();
    },500);


  });


// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     paciente.classList.add("fundo-vermelho");
//     console.log("clicou 2x");
//     this.remove();
//   })
// });
