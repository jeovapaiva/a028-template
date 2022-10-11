function insereItem(event){
    const lista = document.getElementById("lista");
    const novali = document.createElement("li");
    const novaliConteudo = document.createTextNode(meuinput.value);
    novali.appendChild(novaliConteudo);
    lista.insertAdjacentElement("beforeend", novali);
    meuinput.value = "";
}
,.jb,b,bnb