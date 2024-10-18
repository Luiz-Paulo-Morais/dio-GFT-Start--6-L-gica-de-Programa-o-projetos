//Escrevendo as classes de um Jogo

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    apresentar() {
        console.log(`Ola sou ${this.nome}, tenho ${this.idade} anos, sou um ${this.tipo}`)
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.definirTipoDeAtaque(this.tipo)}`)
    }

    definirTipoDeAtaque(tipo){
        let ataque = ""
        switch (tipo) {
            case "mago":
                ataque = "magia"                
                break;
            case "guerreiro":
                ataque = "espada"                
                break;        
            case "monge":
                ataque = "artes marciais"                
                break;
            case "ninja":
                ataque = "shuriken"                
                break;        
            default:
                ataque = "ataque indefinido"
                break;
        }
        return ataque
    }
}

// variaveis de input
let nome = "Pedro"
let idade = 10
let tipo = "guerreiro" // opcoes: guerreiro, mago, monge, ninja

// instanciar objeto heroi
let heroi1 = new heroi(nome, idade, tipo)

// saida
heroi1.apresentar()
heroi1.atacar()