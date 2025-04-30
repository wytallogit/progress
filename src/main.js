const dataInicio = new Date(2025, 2, 7); // 7 de março de 2025
const dataFim = new Date(2025, 10, 30);    // 30 de novembro de 2025
const hoje = new Date();
let numeroFaltas = 4;
const limiteFaltas = 30;

const total = dataFim - dataInicio;
passado = hoje - dataInicio; // Quanto tempo já passou desde 7 de março

let percentual = Math.max(0, Math.min(100, (passado / total) * 100)); // Proteção para ficar entre 0 e 100
percentual = percentual.toFixed(2); // duas casas decimais

// Atualiza a barra
document.getElementById('progress-bar').style.width = percentual + '%';
document.getElementById('progress-text').innerText = `Progresso: ${percentual}%`;

let percentualFaltas = Math.max(0, Math.min(100, (numeroFaltas / limiteFaltas) * 100)); // Proteção para ficar entre 0 e 100
percentualFaltas = percentualFaltas.toFixed(2); // duas casas decimais

document.getElementById('lack-bar').style.width = percentualFaltas + '%';
document.getElementById('lack-text').innerText = `Progresso: ${percentualFaltas}%.\nVocê faltou ${numeroFaltas}/${limiteFaltas}`;
