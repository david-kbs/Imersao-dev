let cardContainer = document.querySelector('.card-container');
let dados = [];

// Esta função será chamada para carregar os dados, configurar a busca e exibir os cards na tela.
async function farmando() {
    try {
        let resposta = await fetch('data.json');
        dados = await resposta.json();
        exibirTelaInicial(); // Exibe a tela inicial assim que a página carrega
        const searchInput = document.querySelector('#search-input');
        const searchButton = document.querySelector('#botao-busca');
        const backButton = document.querySelector('#botao-voltar');
        const titleHeader = document.querySelector('header h1');

        // Adiciona um 'escutador' para o botão Voltar
        backButton.addEventListener('click', () => {
            searchInput.value = ''; // Limpa o campo de busca
            exibirTelaInicial();
        });

        // Adiciona um 'escutador' para o título principal, que também volta para o início
        titleHeader.addEventListener('click', () => {
            searchInput.value = ''; // Limpa o campo de busca
            exibirTelaInicial();
        });

        // Adiciona um 'escutador' que reage ao CLIQUE no botão
        searchButton.addEventListener('click', () => buscarErenderizar(searchInput));

        // BÔNUS: Permite buscar ao pressionar "Enter" no campo de texto
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                buscarErenderizar(searchInput);
            }
        });
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Função auxiliar para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarErenderizar(inputElement) {
    // Normaliza o termo de busca: remove acentos e converte para minúsculas
    const backButton = document.querySelector('#botao-voltar');
    const termoBusca = removerAcentos(inputElement.value.toLowerCase());

    // Se o campo de busca estiver vazio, limpa a tela e não mostra nada.
    if (termoBusca.trim() === '') {
        exibirTelaInicial(); // Volta para a tela inicial se a busca for limpa
        // Garante que o botão Voltar esteja escondido na tela inicial
        backButton.classList.add('hidden');
        return;
    }

    const dadosFiltrados = dados.filter(dica => {
        const titulo = removerAcentos(dica.title.toLowerCase());
        const descricao = removerAcentos(dica.description.toLowerCase());
        return titulo.includes(termoBusca) || descricao.includes(termoBusca);
    });

    // Mostra o botão Voltar, pois uma busca foi realizada
    backButton.classList.remove('hidden');
    renderizarCards(dadosFiltrados); // Exibe apenas os cards filtrados
}

function exibirTelaInicial() {
    document.querySelector('#botao-voltar').classList.add('hidden'); // Garante que o botão Voltar esteja escondido
    cardContainer.innerHTML = `
        <div class="tela-inicial">
            <img src="data:image/jpeg;base64,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" alt="Rei do Clash Royale" class="rei-image">
            <h2>Domine a Arena!</h2>
            <p>Bem-vindo ao seu campo de treinamento, recruta! Aqui, as melhores estratégias estão ao seu alcance. Use a busca para encontrar uma tática específica ou comece sua jornada explorando nossas dicas essenciais abaixo.</p>

            <div class="destaques">
                <h3>Comece por Aqui: Dicas Essenciais</h3>
                <ul>
                    <li data-search="ouro">Gerencie Bem seu Ouro e Gemas</li>
                    <li data-search="elixir">Domine a Gestão de Elixir</li>
                    <li data-search="contra-ataque">Aproveite o Contra-Ataque</li>
                    <li data-search="deck">Foque em um Deck Principal</li>
                </ul>
            </div>
        </div>
    `;

    // Adiciona a interatividade aos itens da lista
    const dicasDestaque = document.querySelectorAll('.destaques li');
    const searchInput = document.querySelector('#search-input');

    dicasDestaque.forEach(item => {
        item.addEventListener('click', () => {
            const termo = item.getAttribute('data-search');
            searchInput.value = termo; // Preenche o campo de busca
            buscarErenderizar(searchInput); // Executa a busca
        });
    });
}

function renderizarCards(dados) {
    // Limpa o container para garantir que os cards não sejam duplicados.
    cardContainer.innerHTML = ''; 

    for (let dica of dados) {
        let article = document.createElement('article');
        article.classList.add('card', 'fade-in');
        article.innerHTML = `
            <h2>${dica.title}</h2>
            <p>${dica.description} <a href="${dica.link}" target="_blank" rel="noopener noreferrer">Ver dica</a></p>
        `;
        cardContainer.appendChild(article);
    }
}

// Inicia o processo assim que o script é carregado
farmando();
