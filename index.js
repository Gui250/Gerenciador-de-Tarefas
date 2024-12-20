const tasks = [
    {id: 10, description: 'Implementar tela de listagem de tarefas', etiqueta: 'frontend', date: 'Criado em: 21/08/2024', checked: false},
    {id: 11, description: 'Criar endpoint para cadastro de tarefas', etiqueta: 'backend', date: 'Criado em: 21/08/2024', checked: false},
    {id: 12, description: 'Implementar protótipo da listagem de tarefas', etiqueta: 'UX', date: 'Criado em: 21/08/2024', checked: false}  
]; 

window.onload = function() { 
    const gerenciadorLista = document.getElementById('gerenciador-lista'); 

    tasks.forEach((task) => { 
        const li = document.createElement('div');
        const description = document.createElement('p'); 
        const details = document.createElement('div');  
        const etiqueta = document.createElement('p');
        const date = document.createElement('p'); 
        const btnContainer = document.createElement('div');
        const checkbox = document.createElement('button');
        const detailsContainer = document.createElement('div');
        const checkboxImage = document.createElement('img'); 



        checkbox.textContent = 'Concluir'
        checkbox.id = `task-${task.id}`;  
        checkbox.checked = task.checked; 

        description.textContent = task.description;
        
  
        etiqueta.textContent = task.etiqueta; 
        date.textContent = task.date;  

        li.classList.add('item-lista');
        details.classList.add('details-flex');
        etiqueta.classList.add('etiqueta');
        date.classList.add('date');
        btnContainer.classList.add('btn-container');
        checkbox.classList.add('btn-concluir');
        


        details.appendChild(etiqueta);
        details.appendChild(date);
        details.appendChild(btnContainer);
        btnContainer.appendChild(checkbox);
        detailsContainer.appendChild(details);
        li.appendChild(description); 
        li.appendChild(detailsContainer);
        gerenciadorLista.appendChild(li);

   
        checkbox.addEventListener('click', function() {
            task.checked = !task.checked; 

            if (task.checked) {
                description.classList.add('concluida');
                checkbox.remove('button');
                checkboxImage.src = 'assets/Checked.png';
                checkboxImage.style.marginLeft = '30px';
                btnContainer.appendChild(checkboxImage);
                
            }
            
            
            task.checked = !task.checked;


            setTimeout(() => { 
                li.remove();
            }, 2000);
        });
    });
};
