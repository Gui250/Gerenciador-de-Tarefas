const containerTarefas = document.querySelector('.container'); 
const btnAdicionar = document.querySelector(".adicionar");
const inputNome = document.querySelector('#nome');
const inputEtiqueta = document.querySelector("#etiqueta");
const btnConcluir = document.querySelector('.concluir');
const checkedImg = document.querySelector('#checked');
const btnConcluirSegundo = document.querySelector('#concluir-segundo');
const tituloTarefa = document.querySelector('.titulo-tarefa');
const qtdTarefasConcluidas = document.querySelector('.qtd-tarefas');
let tarefasConcluidas = 1; 


const atualizarQtdTarefas = () => { 
    qtdTarefasConcluidas.textContent = `${tarefasConcluidas} Tarefa${tarefasConcluidas > 1 ? 's' : ''} concluída${tarefasConcluidas > 1 ? 's' : ''}`;
}


btnAdicionar.addEventListener('click', () => { 
    const nome = inputNome.value; 
    const etiqueta = inputEtiqueta.value;
    if(inputNome && inputEtiqueta) { 
       const tarefa = document.createElement('div');
       tarefa.classList.add('container-tarefas'); 

       tarefa.innerHTML += `
         <div class="conteudo-tarefa">
                <h3>${nome}</h3>
                <div class="conteudo">
                    <p class="frontend">${etiqueta}</p>
                    <p class="date">21/08/2024</p>
                    <button id="concluir" class="concluir">Concluir</button>
                </div>
            </div>
       `

        containerTarefas.appendChild(tarefa);

        inputNome.value = '';
        inputEtiqueta.value = '';
    }
})


btnConcluir.addEventListener('click', () => { 
    if(btnConcluir) { 
        btnConcluir.style.display = 'none';
        checkedImg.src = './assets/Checked.png';
        checkedImg.style.marginLeft = '12.5rem';
        checkedImg.style.marginBottom = '29.5px';
        tituloTarefa.classList.add('underline');
        tarefasConcluidas++;
        atualizarQtdTarefas();
    }
})

