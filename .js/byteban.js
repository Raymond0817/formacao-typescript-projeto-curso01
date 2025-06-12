let saldo = 3000;
coonst elementSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;
const elementoFormulario = document.querySelector(.block-nova-transacao form);
const elementoFormulario.add.EventListener("submit", function(event){
    event.preventDefault();
    if(!elementoFormulario.checkValidity()) {
      alert("Por favor, preencha todos os campos da transação");
      return;  
    }
}

