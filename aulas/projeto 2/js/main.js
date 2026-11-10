//alert("Olá, seja bem-vindo ao meu site!");

//criando função para abrir a janela do botão de add
function openModal(idModal) {
    const modal = document.getElementById(idModal);//document é um objeto que representa a página (ou documento HTML)
    //getElementById -> busca o modal pelo id passado como parâmetro
    //modificar o id do modal
    modal.style.display = "flex"; //modifica o estilo do modal para exibir ele na tela (estava em NONE e mudou pra FLEX)
}
function closeModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none"; //modifica o estilo do modal para fechar ele da tela (estava em FLEX e mudou pra NONE)
}

function addStock(event){
    event.preventDefault(); //previne o comportamento padrão do formulário (que é enviar os dados e recarregar a página)
    const form = event.target; //pega o formulário que foi enviado
    const stock = {
        Ticket: form.stockTicket.value, //pega o valor do input com id stockTicket
        name: form.stockName.value, //pega o valor do input com id stockName
        price: form.stockPrice.value, //pega o valor do input com id stockPrice}
        quantity: form.stockQuantity.value //pega o valor do input com id stockQuantity
    }
    closeModal('addStockModal'); //fecha o modal de adicionar ação
    console.log(stock); //exibe o objeto stock no console do navegador
}