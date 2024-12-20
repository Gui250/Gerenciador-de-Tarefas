const setTasksInLocalStorage = (tasks) => {
    // Salvar as tarefas no localStorage
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasksFromLocalStorage = () => {
    // Recuperar as tarefas do localStorage, se existirem
    const tasks = window.localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

const createTask = (event) => {
    event.preventDefault();

    // Pegando os valores dos inputs
    const inputNome = document.querySelector('.nome-tarefa').value;
    const inputEtiqueta = document.querySelector('.etiqueta').value;

    // Criação de um novo objeto tarefa
    const newTask = {
        id: new Date().getTime(), // Usando o timestamp para garantir id único
        description: inputNome,
        etiqueta: inputEtiqueta,
        date: `Criado em: ${new Date().toLocaleDateString()}`,
        checked: false
    };

    // Adiciona a nova tarefa ao array de tarefas
    tasks.push(newTask);

    // Atualiza o localStorage
    setTasksInLocalStorage(tasks);

    // Atualiza a lista de tarefas no DOM
    renderTasks();

    // Limpar os inputs após adicionar a tarefa
    document.querySelector('.nome-tarefa').value = '';
    document.querySelector('.etiqueta').value = '';
};

const renderTasks = () => {
    const gerenciadorLista = document.getElementById('gerenciador-lista');
    gerenciadorLista.innerHTML = ''; // Limpar a lista antes de renderizar

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

        checkbox.textContent = 'Concluir';
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

        checkbox.addEventListener('click', function () {
            task.checked = !task.checked;

            if (task.checked) {
                description.classList.add('concluida');
                checkbox.remove();
                checkboxImage.src = 'assets/Checked.png';
                checkboxImage.style.marginLeft = '30px';
                btnContainer.appendChild(checkboxImage);
            }

            // Atualizar o localStorage após a mudança
            setTasksInLocalStorage(tasks);

            // Remover a tarefa após 2 segundos (simulando conclusão)
            setTimeout(() => {
                li.remove();
                // Remover a tarefa do array e atualizar o localStorage
                tasks = tasks.filter(t => t.id !== task.id);
                setTasksInLocalStorage(tasks);
            }, 2000);
        });
    });
};

window.onload = function () {
    const gerenciadorLista = document.getElementById('gerenciador-lista');
    const btnAdicionar = document.getElementById('adicionar');

    // Carregar as tarefas do localStorage ao carregar a página
    tasks = getTasksFromLocalStorage();

    // Renderiza as tarefas armazenadas
    renderTasks();

    // Adicionar evento ao botão para criar novas tarefas
    btnAdicionar.addEventListener('click', createTask);
};
