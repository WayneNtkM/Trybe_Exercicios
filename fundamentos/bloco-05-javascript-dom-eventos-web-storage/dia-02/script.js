corPai = document.querySelector("#elementoOndeVoceEsta").parentNode;
corPai.style.color = 'green';
document.getElementById("primeiroFilhoDoFilho").innerText = 'primeiro filho do filho';
let irmao = document.querySelector("#pai");
let conteudo = document.createElement("article");
conteudo.innerText = 'Irmão de OndeEsou!';
irmao.appendChild(conteudo)
let ondeEstou = document.querySelector("elementoOndeEstou");
let lista = ['item 1', 'item 2', 'item 3'];
for (let i = 0; i < lista.length; i += 1) {
    let onde = lista[i];
    let where = document.createElement("li");
    where.innerText = onde;
    ondeEstou.appendChild(where)
}
