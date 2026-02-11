class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  obtemIMC(){
    return this.peso / (this.altura * this.altura)
  }

   obtemCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade === 12 || this.idade === 13) {
            return "Juvenil";
        } else if (this.idade === 14 || this.idade === 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

      obtemMediaValida() {
        
        // Remove menor e maior nota respectivamente
        this.notas.shift();
        this.notas.pop();

        let soma = this.notas.reduce((total, nota) => total + nota, 0);

        return soma / this.notas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log(atleta.obtemMediaValida())
   