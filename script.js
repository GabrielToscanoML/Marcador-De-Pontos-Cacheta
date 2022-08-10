let rodadaCount = 1;
let pessoasCount = 0;

const getTable = document.getElementById('tabela');
function criaPessoa() {
  const criaNovaPessoa = document.createElement('tr');
  console.log(pessoasCount);
  criaNovaPessoa.className = 'Pessoa' + pessoasCount;
  pessoasCount++;
  getTable.appendChild(criaNovaPessoa).lastChild;
 // console.log(getTable);
}

function criaNome() {
  const criaNome = document.createElement('th');
  criaNome.textContent = 'Pessoa' + pessoasCount;
  const pessoa = document.querySelector('.Pessoa'+(pessoasCount-1));
  pessoa.appendChild(criaNome);
  
}

const btnCriaPessoa = document.getElementById('addPessoa');
btnCriaPessoa.addEventListener('click', () => {
  criaPessoa();
  criaNome();
});
