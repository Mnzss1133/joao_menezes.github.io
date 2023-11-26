const url = "https://botafogo-atletas.mange.li/all";

const grid = document.createElement('div');
grid.id = 'grid-container';
document.body.appendChild(grid);

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    

    const DivVoltar = document.createElement('div');
    DivVoltar.id = "voltar";
    const botao_voltar = document.createElement('button');
    botao_voltar.innerHTML = "Voltar";

    const botao_saiba_mais = document.createElement('button');
    botao_saiba_mais.id = 'Detalhes'
    botao_saiba_mais.innerHTML = "Saiba Mais";

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(imagem);
    container.appendChild(botao_saiba_mais);
    container.appendChild(titulo);

    container.onclick = handleClick;

    document.body.appendChild(container);
    DivVoltar.appendChild(botao_voltar);
    document.body.appendChild(DivVoltar);

    grid.appendChild(container);

    botao_voltar.addEventListener("click", function () {
        window.location.href = "../SelecaoAtletas/selecaoatletas.html";
    });

    botao_saiba_mais.addEventListener("click", function () {
        const atletaId = container.dataset.id;
        setCookie('id', atletaId);
        window.location.href = `detailsgeral.html?id=${atletaId}`;
    });

   
};

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    const atletaId = artigo.dataset.id;
    setCookie('id', atletaId);
    setCookie('nome_completo', artigo.dataset.nome_completo);
    setCookie('nascimento', artigo.dataset.nascimento);
    setCookie('altura', artigo.dataset.altura);
};

const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/`;
};

const getCookie = (name) => {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : '';
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

pegar_coisas(`${url}`).then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
);

