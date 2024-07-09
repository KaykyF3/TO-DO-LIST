const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function AddT(){
    if(inputBox.value === ''){
        window.alert("Type something in the box");
    }else {
        //criando uma tag/elemento(lista) no site 
        let li = document.createElement("li")
        //dentro do Li criado iremos colocar oque está escrito no input
        li.innerHTML = inputBox.value;
        //setando o LI dentro do UL 
        listContainer.appendChild(li);
        let span = document.createElement("span");
                        //adicionando um ícone
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

/*
e.target: Isso se refere ao elemento que foi clicado. No contexto desse evento de clique, e.target representa o elemento específico que foi clicado dentro do listContainer.
parentElement: Isso acessa o elemento pai do elemento clicado. Em muitos casos, os elementos dentro de uma lista (como <li>) têm um elemento pai que é o próprio item de lista <li>.
remove(): Esta é uma função que remove o elemento do DOM (Modelo de Objeto de Documento). Quando chamada em um elemento HTML, ela remove esse elemento e todo o seu conteúdo do DOM.

*/

//salvando os dados atuais
function saveData(){
                        //nome dado aos dados que serão salvos     //salvando os dados do elementos listContainer
    localStorage.setItem("data",listContainer.innerHTML);
}

//mostrando os dados salvos

function showData(){
        //colocando os dados no ListContainer //pegando os dados no objeto localStorage
    listContainer.innerHTML = localStorage.getItem("data");
}

//chamando a função para mostrar os dados salvos
showData();