const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartaoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
function esconderCartaoSelecionado() {
   const cartaoSlecionado = document.querySelector(".selecionado");
   cartaoSlecionado.classList.remove("selecionado");
}

function mostrarCartao(indexCartao) {
   cartaoes[indexCartao].classList.add("selecionado");

}
btnAvancar.addEventListener('click', function () {
   if (cartaoAtual === cartaoes.length - 1) return
   esconderCartaoSelecionado();
   cartaoAtual++;
   mostrarCartao(cartaoAtual);

});


btnVoltar.addEventListener('click', function () {
   if (cartaoAtual === 0) return
   esconderCartaoSelecionado();
   cartaoAtual--;
   mostrarCartao(cartaoAtual);

});






