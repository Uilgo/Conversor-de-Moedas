
let dolar = 5.21
let euro = 6.18

let botão = document.getElementById("botão")
let select = document.getElementById("select-moedas")



//Essa função é responsável por trocar a bandeira e o nome das moedas

async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta){
        return resposta.json() 
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputvalorEMreais = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEMdolares = inputvalorEMreais / dolar
        inputmoedas.innerHTML = valorEMdolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEMeuros = inputvalorEMreais / euro
        inputmoedas.innerHTML = valorEMeuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }


    textoReal.innerHTML = inputvalorEMreais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function trocaDeMoeda() {

    let textomoeda = document.getElementById("texto-moeda")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textomoeda.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/Dólar.png"
    }

    if (select.value === "€ Euro") {
        textomoeda.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"
    }

    convertermoedas()

}

botão.addEventListener("click", convertermoedas)
select.addEventListener("change", trocaDeMoeda)