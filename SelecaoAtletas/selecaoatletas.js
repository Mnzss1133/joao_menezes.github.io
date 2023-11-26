document.addEventListener('DOMContentLoaded', function () {

  

  

  const body = document.body;

  const head = document.createElement('h1');
  head.innerText = "Atletas do Botafogo";

  const simbolo = document.createElement('img');
  simbolo.src = "https://img.elo7.com.br/product/main/29FAAE3/patch-bordado-time-botafogo-termo-colante-8cm-escudo.jpg";

  const DivVoltar = document.createElement('div');
  DivVoltar.id = "voltar";
  const botao_voltar = document.createElement('a');
  botao_voltar.innerHTML = "Voltar";

  const buttonsDiv = document.createElement('div'); // Nova div para os botões

  const elencoButtonsDiv = document.createElement('div'); // Nova div para os botões de Elenco
  elencoButtonsDiv.id = 'elencoButtons';
 

  const botao_masculino = document.createElement('button');
  botao_masculino.id = "Masculino";
  botao_masculino.innerHTML = "Masculino";
  const botao_feminino = document.createElement('button');
  botao_feminino.id = "Feminino";
  botao_feminino.innerHTML = "Feminino";
  const botao_all = document.createElement('button');
  botao_all.id = "All";
  botao_all.innerHTML = "Todos";

  const selecionar_elenco = document.createElement('button');
  selecionar_elenco.id = 'Elenco';
  selecionar_elenco.innerHTML = 'Escolha o Elenco';

  const elencoSelect = document.createElement('select');
  elencoSelect.id = 'elencoSelect';
  elencoSelect.style.display = 'none'; 

  const opcao_vazia = document.createElement('option');
  opcao_vazia.value = "";
  opcao_vazia.innerHTML = "Escolha o Elenco";
  opcao_vazia.disabled = true;
  opcao_vazia.selected = true;

  const opcao_masculino_select = document.createElement('option');
  opcao_masculino_select.value = "ElencoMasculino/atletasmasculinos.html";
  opcao_masculino_select.innerHTML = "Masculino";

  const opcao_feminino_select = document.createElement('option');
  opcao_feminino_select.value = "ElencoFeminino/atletasfemininos.html";
  opcao_feminino_select.innerHTML = "Feminino";

  const opcao_todos_select = document.createElement('option');
  opcao_todos_select.value = "URL_da_nova_pagina_Todos";
  opcao_todos_select.innerHTML = "Todos";

  body.appendChild(head);
  body.appendChild(simbolo);
  DivVoltar.appendChild(botao_voltar);
  body.appendChild(DivVoltar);
  body.appendChild(buttonsDiv);
  

  buttonsDiv.appendChild(botao_masculino);
  buttonsDiv.appendChild(botao_feminino);
  buttonsDiv.appendChild(botao_all);
  body.appendChild(elencoSelect);

  elencoSelect.appendChild(opcao_vazia);
  elencoSelect.appendChild(opcao_masculino_select);
  elencoSelect.appendChild(opcao_feminino_select);
  elencoSelect.appendChild(opcao_todos_select);

  function updateLayout() {
    // Exibir o botão select apenas em telas menores ou iguais a 768 pixels
    elencoSelect.style.display = window.innerWidth <= 768 ? 'block' : 'none';
  
    // Ocultar os botões quando a tela é menor ou igual a 768 pixels
    buttonsDiv.style.display = window.innerWidth <= 768 ? 'none' : 'block';
    elencoButtonsDiv.style.display = window.innerWidth <= 768 ? 'none' : 'flex';
  }


  updateLayout();

  // Add event listener for window resize
  window.addEventListener('resize', updateLayout);


  botao_masculino.addEventListener("click", function () {
    // Abra uma nova página quando o botão "Masculino" for clicado
    window.location.href = "../ElencoMasculino/atletasmasculinos.html";
  });

  botao_feminino.addEventListener("click", function () {
    // Abra uma nova página quando o botão "Feminino" for clicado
    window.location.href = "../ElencoFeminino/atletasfemininos.html";
  });

  botao_all.addEventListener("click", function () {
    // Abra uma nova página quando o botão "Todos" for clicado
    window.location.href="../ElencoGeral/geral.html";
  });


  elencoSelect.addEventListener("change", function () {
    const selectedOption = elencoSelect.options[elencoSelect.selectedIndex];
    if (selectedOption.value !== "") {
      window.location.href = selectedOption.value;
    }
  });

  // Event listener for the Elenco button
  selecionar_elenco.addEventListener("click", function () {
    // Toggle the visibility of Elenco buttons
    elencoButtonsDiv.style.display = elencoButtonsDiv.style.display === 'none' ? 'flex' : 'none';

    // Toggle the visibility of other buttons
    botao_masculino.style.display = botao_masculino.style.display === 'none' ? 'inline-block' : 'none';
    botao_feminino.style.display = botao_feminino.style.display === 'none' ? 'inline-block' : 'none';
    botao_all.style.display = botao_all.style.display === 'none' ? 'inline-block' : 'none';
  });

  // Event listener for the "Voltar" button
  botao_voltar.addEventListener("click", function () {
    // Remover a senha do localStorage
    localStorage.removeItem("senha");

    // Redirecionar para a página inicial
    window.location.href = "../index.html";
  });
  

  
 
 
});