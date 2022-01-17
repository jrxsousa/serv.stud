const concluirTarefa = (atualiza, id) => {
    const tarefaCadastrads = JSON.parse(localStorage.getItem ('tarefas'));
    
    tarefaCadastrads[id].concluida = !tarefaCadastrads[id].concluida;
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastrads));

    atualiza()
}

const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement ('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir tarefa';
    botaoConclui.addEventListener ('click', () => concluirTarefa (atualiza, id));

    return botaoConclui; 
}

export default BotaoConclui