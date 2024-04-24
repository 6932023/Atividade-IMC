let btn = document.getElementById("btn");

let div = document.getElementById("resultado");

let cards = document.getElementById("cards");

let arrInfo = [];

function cadastrar() {
  let info = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    marca: document.getElementById("marca").value,
    placa: document.getElementById("placa").value,
    fabricacao: document.getElementById("anoFabricacao").value,
    vin: document.getElementById("vin").value,
    combustivel: document.getElementById("combustivel").value,
    kmAtual: document.getElementById("kmAtual").value,
    historico: document.getElementById("historico").value,
    estado: document.getElementById("estado").value,
  };

  arrInfo.push(info);
  console.log(arrInfo);

  imprimirDados();

  console.log(
    info.nome,
    info.sobrenome,
    info.marca,
    info.placa,
    info.fabricacao,
    info.vin,
    info.combustivel,
    info.Atual,
    info.historico,
    info.estado
  );
}

function imprimirDados() {
  div.innerHTML = "";
  cards.innerHTML = "";

  for (let i = 0; i < arrInfo.length; i++) {
    div.innerHTML = `
                <p><strong>Marca:</strong> ${arrInfo[i].marca}</p>
                <p><strong>Placa:</strong> ${arrInfo[i].placa}</p>
                <p><strong>Fabricação:</strong> ${arrInfo[i].fabricacao}</p>
                <p><strong>Nº do Chassi (Vin):</strong> ${arrInfo[i].vin}</p>
                <p><strong>Combustível:</strong> ${arrInfo[i].combustivel}</p>
                <p><strong>Quilometragem em (KM):</strong> ${arrInfo[i].kmAtual}</p>
                <p><strong>Data da Ultima Manutenção:</strong> ${arrInfo[i].historico}</p>
                <p><strong>Estado:</strong> ${arrInfo[i].estado}</p>
         `;

    cards.innerHTML += `
    <div class="col py-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${arrInfo[i].nome} ${arrInfo[i].sobrenome}</h5>
                <p class="card-text">${div.innerHTML}</p>
            </div>
        </div>
    </div>`;
  }
}

btn.addEventListener("click", cadastrar);
