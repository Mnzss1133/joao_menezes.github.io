const verificaSenha = () => {
    const entrada = document.getElementById("entrada").value;
    const senha = '81dc9bdb52d04dc20036dbd8313ed055'; // MD5 da senha "1234"

    if (hex_md5(entrada) === senha) {
        localStorage.setItem('senha', entrada); // Armazena a senha no localStorage
        localStorage.setItem('coiso', 'qualquer valor');
        window.location = 'SelecaoAtletas/selecaoatletas.html';
    } else {
        alert('Senha incorreta!');
    }
}
    
    
    document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
  
    // Crie a div "minhaDiv"
    const minhaDiv = document.createElement('div');
    minhaDiv.id = "minhaDiv";
  
    // Crie a primeira div com o ID "titulo"
    const divTitulo = document.createElement('div');
    divTitulo.id = "titulo";
  
    // Crie a segunda div com o ID "caixinha"
    const divCaixinha = document.createElement('div');
    divCaixinha.id = "caixinha";
    // Crie a segunda div com o ID "escudoimagem"
    const divImagem = document.createElement('div');
    divImagem.id = "escudoimagem";
  
    // Adicione os elementos à div "titulo"
    const head = document.createElement("h1");
    head.innerText = "Atletas do Botafogo em 2023-2";
    divTitulo.appendChild(head);
  
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = "Criado com objetivos exclusivamente didáticos para a disciplina Desenvolvimento Web do Ibmec Rio.";
    divTitulo.appendChild(paragrafo);
  
    // Adicione os elementos à div "caixinha"
    const caixa = document.createElement("input");
    caixa.type = "text";
    caixa.id="entrada"
    caixa.placeholder='Entre com a senha: 1234'
    divCaixinha.appendChild(caixa);
  
    const botao = document.createElement("button");
    botao.id='senhabotao'
    botao.innerHTML='Entrar'
    botao.addEventListener("click", verificaSenha);
   
    divCaixinha.appendChild(botao);
  
    const escudo = document.createElement("img");
    escudo.src = "https://images.uncyc.org/pt/0/01/Escudo_do_Botafogo.png";
    divImagem.appendChild(escudo);
  

  
    // Adicione as divs "titulo" e "caixinha" à div "minhaDiv"
    minhaDiv.append(divImagem)
    minhaDiv.appendChild(divTitulo);
    minhaDiv.appendChild(divCaixinha);
  
    // Adicione a div "minhaDiv" ao corpo do documento
    body.appendChild(minhaDiv);
    
   

    document.addEventListener("DOMContentLoaded", function () {
        // Verificar se a senha está presente no armazenamento local
        if (localStorage.getItem('senha')) {
            // Redirecionar para a página "selecaoatletas.html" se a senha estiver presente
            window.location.replace('selecaoatletas.html');
        }
    
        
    });
});  