let rodadaCount = 1;
let pessoasCount = 0;

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
}

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
