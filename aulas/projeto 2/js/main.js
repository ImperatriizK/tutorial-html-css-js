//alert("Olá, seja bem-vindo ao meu site!");

//criando função para abrir a janela do botão de add
function openModal(idModal) {
    const modal = document.getElementById(idModal);//document é um objeto que representa a página (ou documento HTML)
    //getElementById -> busca o modal pelo id passado como parâmetro
    //modificar o id do modal
    modal.style.display = "flex"; //modifica o estilo do modal para exibir ele na tela (estava em NONE e mudou pra FLEX)
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; //seleciona um elemento e muda o estilo pelo JS usando ponto (.) e o nome da propriedade do estilo (backgroundColor)
    

}
function closeModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none"; //modifica o estilo do modal para fechar ele da tela (estava em FLEX e mudou pra NONE)
}

function addStock(event){
    event.preventDefault(); //previne o comportamento padrão do formulário (que é enviar os dados e recarregar a página)
    const form = event.target; //pega o formulário que foi enviado

    console.log(event.target.stockName.value); //exibe o valor do input com id stockName no console do navegador -> é outra forma de pegar o valor, mas a melhor forma é a que está abaixo, usando um objeto
    
    const stock = {
        ticket: form.stockTicker.value, //pega o valor do input com id stockTicket
        name: form.stockName.value, //pega o valor do input com id stockName
        price: form.stockPrice.value, //pega o valor do input com id stockPrice}
        quantity: form.stockQuantity.value //pega o valor do input com id stockQuantity
    }
    //const stockList = document.getElementById("stockList"); //pega o elemento com id stockList (a lista de ações)

    //stockList.innerHTML = `<h1>Trocando Lista por um titulo</h1>`; //limpa a lista de ações e adiciona um título deum texto qualquer (aspas simples ou duplas) -> innerHTML é uma propriedade que permite modificar o conteúdo HTML de um elemento; crases (``) permitem concatenar variáveis dentro de uma string usando ${variavel} no meio do texto(string) - define o limite de uma string

    //aqui  o innerHTML do stockList é modificado para adicionar um card de ação com as informações do objeto stock criado acima, usando crases (``) para permitir a interpolação de variáveis dentro da string
    const stockList = document.getElementById("stockList")
    stockList.innerHTML +=
    `<div class="stockCard">
        <header>
            <div>
                <h2>${stock.ticket}</h2>
                <span>${stock.name}</span>
            </div>
            <span class="stockValue up" >${stock.price}</span>
        </header>
        <footer class="stockPosition">
            <span><b>${stock.quantity}</b> ações</span>
            <div>
                <span>Total</span>
                <span class="totalValue">${stock.price * stock.quantity}</span>
            </div>
        </footer>
        <div class="stockActions">
            <button onclick="loadEditForm(this)" class="openModal">Editar</button>
            <button onclick="removeStock(this)" class="removeStock">Remover</button>
        </div>
    </div>`

    closeModal('addStockModal'); //fecha o modal de adicionar ação
    console.log(stock); //exibe o objeto stock no console do navegador
}

function loadEditForm(buttomEdit){
    const stockCard = buttonEdit.closest('.stockCard'); // Acha o card correto
    
    const stock ={
        ticket: stockCard.querySelector('header h2').   textContent,

        name: stockCard.querySelector('header span').textContent,

        price: stockCard.querySelector('.stockValue span span').textContent,

        quantity: stockCard.querySelector('.stockPosition span').textContent

        /*ticket: stockCard.querySelector('header h2').textContent,
        name: stockCard.querySelector('header span').textContent,
        price: stockCard.querySelector('.stockValue').textContent.replace('$', '').trim(),
        quantity: stockCard.querySelector('.stockPosition b').textContent*/
    }
    //query Selector -> busca qualquer elemento dentro do card de ação -descendentes(stockCard) usando um seletor CSS (como se fosse no CSS mesmo, com classes, ids e tags)
    //textContent -> pega o texto dentro do elemento selecionado
    //closet busca nos ascendentes do elemento (botão) até encontrar o elemento com a classe stockCard, que é o card de ação que contém o botão clicado

    const editForm = document.getElementById('editStockForm'); //pega o formulário de edição de ação
    editForm.stockTicker.value = stock.ticket;
    editForm.stockName.value = stock.name;
    editForm.stockPrice.value = stock.price;
    editForm.stockQuantity.value = stock.quantity;

    openModal('editStockModal'); //abre o modal de editar ação
}

function removeStock(buttomRemove){
    const stockCard = buttomRemove.closest('.stockCard'); //pega o card de ação mais próximo do botão de remover clicado
    stockCard.remove(); //remove o card da tela
}