const tasks = [
    {id: 10, description: 'Implementar tela de listagem de tarefas', etiqueta: 'frontend', date: 'Criado em: 21/08/2024', checked: false},
    {id: 11, description: 'Criar endpoint para cadastro de tarefas', etiqueta: 'backend', date: 'Criado em: 21/08/2024', checked: false},
    {id: 12, description: 'Implementar protótipo da listagem de tarefas', etiqueta: 'UX', date: 'Criado em: 21/08/2024', checked: true}  // ID único
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
        

        checkbox.textContent = task.checked ? 'Desmarcar' : 'Concluir'; 
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
        
      
        if (task.checked) {
            description.classList.add('concluida');
        }


        details.appendChild(etiqueta);
        details.appendChild(date);
        details.appendChild(btnContainer);
        btnContainer.appendChild(checkbox);
        detailsContainer.appendChild(details);
        li.appendChild(description); 
        li.appendChild(detailsContainer);
        gerenciadorLista.appendChild(li);

   
        checkbox.addEventListener('click', function() {
       
            description.classList.toggle('concluida');

          
            if (task.checked) {
                checkbox.textContent = 'Concluir'; 
            } else {
                checkbox.textContent = 'Desmarcar'; 
            }

            
            task.checked = !task.checked;
        });
    });
};
