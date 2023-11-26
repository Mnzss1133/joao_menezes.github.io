document.addEventListener('DOMContentLoaded', function () {
    // Verificar se a senha está presente no armazenamento local
    if (!localStorage.getItem('senha')) {
        // Se não estiver logado, redirecionar para a página de login
        window.location.href = 'autorizacao.html';
        return;
    }

    // Função para fazer uma requisição à API
    async function fetchAthleteDetails(athleteId) {
        try {
            const response = await fetch(`https://botafogo-atletas.mange.li/${athleteId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar detalhes do atleta na API:', error);
            return null;
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = parseInt(urlParams.get('id'));

    if (!athleteId || isNaN(athleteId)) {
        console.error('ID do Atleta não fornecido ou inválido na URL.');
        // Aqui você pode decidir o que fazer em caso de ID ausente ou inválido.
    } else {
        // Chama a função para buscar detalhes do atleta na API
        fetchAthleteDetails(athleteId)
            .then((player) => {
                if (!player) {
                    console.error(`Atleta com ID ${athleteId} não encontrado.`);
                    // Aqui você pode decidir o que fazer se o jogador não for encontrado.
                } else {
                    const athleteDetailsContainer = document.getElementById('atleta_jogador');
                    athleteDetailsContainer.innerHTML = `
                        <div id="imagem_jogador">
                            <h2>${player.nome}</h2>
                            <img src="${player.imagem}" alt="Imagem de ${player.nome}">
                        </div>
                        <p>Posição: ${player.posicao}</p>
                        <p>Altura: ${player.altura}</p>
                        <p>Nascimento: ${player.nascimento}</p>
                        <p>${player.descricao || 'Descrição não disponível.'}</p>
                    `;
                    
                    const Voltar = document.createElement('div');
                    Voltar.id = "voltar";
                    const link_voltar = document.createElement('a');
                    link_voltar.innerHTML = "Voltar";
                    
                    Voltar.appendChild(link_voltar);
                    document.body.appendChild(Voltar);
                    link_voltar.addEventListener("click", function () {
                        window.location.href = "atletasmasculinos.html";
                    });
                }
            });
    }
});
