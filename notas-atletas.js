let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaAtletas(objAtletas) {

    for (let i = 0; i < objAtletas.length; i++) {

        let nome = objAtletas[i].nome;
        let notas = objAtletas[i].notas;

        // Ordena as notas do menor para o maior
        notas.sort((a, b) => a - b);

        // Remove a menor e a maior nota
        let notasValidas = notas.slice(1, 4);

        // Soma das notas válidas
        let soma = 0;
        notasValidas.forEach(function(nota) {
            soma = soma + nota;
        });

        // Calcula a média
        let media = soma / notasValidas.length;

        // Exibe o resultado
        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notas}`);
        console.log(`Média Válida: ${media}`);
        console.log("");
    }
}

calcularMediaAtletas(atletas);