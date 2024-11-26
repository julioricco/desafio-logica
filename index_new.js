// Variável para armazenar o nome e a experiência do herói
let nomeHeroi = prompt("Digite o nome do herói:");
let experiencia = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para classificar o nível do herói com base na XP
if (experiencia < 1000) {
    nivelHeroi = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivelHeroi = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivelHeroi = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivelHeroi = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivelHeroi = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivelHeroi = "Imortal";
} else if (experiencia >= 10001) {
    nivelHeroi = "Radiante";
} else {
    nivelHeroi = "Nível inválido"; // Caso de entrada inesperada
}

// Mensagem ao final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
