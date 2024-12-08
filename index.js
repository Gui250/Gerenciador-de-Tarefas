const containerTarefas = document.querySelector('.container'); 
const btnAdicionar = document.querySelector(".adicionar");
const inputNome = document.querySelector('#nome');
const inputEtiqueta = document.querySelector("#etiqueta");
const qtdTarefasConcluidas = document.querySelector('.qtd-tarefas');
let tarefasConcluidas = 1; 

const atualizarQtdTarefas = () => { 
    qtdTarefasConcluidas.textContent = `${tarefasConcluidas} Tarefa${tarefasConcluidas > 1 ? 's' : ''} concluída${tarefasConcluidas > 1 ? 's' : ''}`;
}

btnAdicionar.addEventListener('click', () => { 
    const nome = inputNome.value; 
    const etiqueta = inputEtiqueta.value;
    if (nome && etiqueta) { 
        const tarefa = document.createElement('div');
        tarefa.classList.add('container-tarefas'); 

        tarefa.innerHTML = `
            <div class="conteudo-tarefa">
                <h3 class="titulo-tarefa">${nome}</h3>
                <div class="conteudo">
                    <p class="frontend">${etiqueta}</p>
                    <p class="date">21/08/2024</p>
                    <button class="concluir">Concluir</button>
                    <img id="checked" />
                </div>
            </div>
        `;

        containerTarefas.appendChild(tarefa);

        inputNome.value = '';
        inputEtiqueta.value = '';
    }
});

containerTarefas.addEventListener('click', (event) => { 
    const btnConcluir = event.target && event.target.classList.contains('concluir');

    if (btnConcluir) { 
        const tarefa = event.target.closest('.conteudo-tarefa');
        const tituloTarefa = tarefa.querySelector('.titulo-tarefa');
        const checkedImg = tarefa.querySelector('#checked');

     
        event.target.style.display = 'none'; 

  
        checkedImg.src = './assets/Checked.png'; 
        checkedImg.style.marginLeft = '12.5rem';  
        checkedImg.style.marginBottom = '29.5px';  

      
        tituloTarefa.classList.add('underline');  

   
        tarefasConcluidas++; 
        atualizarQtdTarefas(); 

      
        setTimeout(() => {
            tarefa.parentElement.remove(); 
            tarefasConcluidas--; 
            atualizarQtdTarefas(); 
        }, 3000); 
    }
});
