let rodadaCount = 1;
let pessoasCount = 0;
const getPessoas = document.getElementsByTagName('tr');
const getTable = document.getElementById('tabela');

function criaPessoa() {
  const criaNovaPessoa = document.createElement('tr');
  criaNovaPessoa.className = 'Pessoa' + pessoasCount;
  pessoasCount++;
  getTable.appendChild(criaNovaPessoa).lastChild;
}

function criaNome(string) {
  const criaNome = document.createElement('th');
  criaNome.id = 'Pessoa' + pessoasCount;
  criaNome.textContent = string;
  const pessoa = document.querySelector('.Pessoa'+(pessoasCount-1));
  pessoa.appendChild(criaNome);
  console.log(getPessoas.length);
}

// ativando o recebimento do input via click
const btnCriaPessoa = document.getElementById('addPessoa');
btnCriaPessoa.addEventListener('click', () => {
  const getInputNames = document.querySelector('#inputNames');
  if (getInputNames.value == '') {
    window.alert('Erro! Nome vazio ou inválido!')
    return;
  } else {
    criaPessoa();
    criaNome(getInputNames.value);
    getInputNames.value = '';
  }
});

// ativando o recebimento do input via teclado
document.addEventListener("keypress", function(e) {
  const getInputNames = document.querySelector('#inputNames');
  if (e.key === "Enter") {
    if (getInputNames.value == '') {
      window.alert('Erro! Nome vazio ou inválido!')
      return;
    } else {
      criaPessoa();
      criaNome(getInputNames.value);
      getInputNames.value = '';
    }
  }
});

const getBtnNewRound = document.getElementById('newRound');
getBtnNewRound.addEventListener('click', criaNovaRodada);

// function alteraPontos(item) {
//   const getInputPontos = document.getElementById('inputPontos');
//   item.value = ;
// }

function criaPontos() {
  for(let index = 1; index < getPessoas.length; index++) {
    const pontos = document.createElement('th');
    pontos.className = 'pontos';
    //pontos.textContent = 10;
   // pontos.addEventListener('click', alteraPontos());
    document.querySelectorAll('tr')[index].appendChild(pontos).lastChild;
  }
 }

function criaNovaRodada() {
  const rodadas = document.getElementById('linha-rodadas');
  const createRodadas = document.createElement('th');
  createRodadas.textContent = 'Rodada ' + rodadaCount;
  rodadaCount++;
  rodadas.appendChild(createRodadas).lastChild;
  criaPontos();
}
