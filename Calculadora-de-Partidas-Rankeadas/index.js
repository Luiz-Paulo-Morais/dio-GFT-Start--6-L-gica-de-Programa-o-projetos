// Desafio Calculadora de Partidas Rankeadas

// variaveis
let vitorias = 110
let derrotas = 5
let saldoVitorias = 0
let nivel = ""


// processamento
calcularSaldo(vitorias, derrotas)
classificarJogador(saldoVitorias)

// saida
exibirResultado(saldoVitorias, nivel)

// funcoes
// calcular o saldo de vitorias
function calcularSaldo(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}
// classificar o jogador quanto ao seu nivel
function classificarJogador(saldoVitorias) {
    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendario"    
    } else {
        nivel = "Imortal"
    }
    return nivel
}
// imprimir o resultado
function exibirResultado(saldoVitorias, nivel) {
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}