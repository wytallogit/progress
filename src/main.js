const dataInicio = new Date(2025, 2, 7); // 7 de março de 2025
const dataFim = new Date(2025, 10, 30);    // 30 de novembro de 2025
const hoje = new Date();
const dataHoje = hoje.toLocaleDateString('pt-BR');

const maxFaltas = 30;
let numFaltas = 4;

function trocarTexto(seletor, novoTexto) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
        elemento.innerText = novoTexto;
    } else {
        console.warn(`Elemento "${seletor}" não encontrado.`);
    }
}

function calcularProgresso(inicio, hoje, fim) {
    let oFim = (hoje - inicio) / (fim - inicio) * 100;
    return Math.min(oFim, 100).toFixed(0);
}

function atualizarProgressoCirculo(elemento, valorPorcento) {
    const circulo = document.querySelector(elemento);
    const offset = 251.2 * (1 + valorPorcento / 100);
    circulo.style.strokeDashoffset = offset;
}

function intervaloEmDias(hoje, fim) {
    return Math.ceil((fim - hoje) / (1000 * 60 * 60 * 24));
}

function porcentagem(num, max) {
    return ((num / max) * 100).toFixed(0);
}


//seção 1 progresso
let porcento = calcularProgresso(dataInicio, hoje, dataFim);
trocarTexto('.text-progress', `${intervaloEmDias(dataInicio, hoje)}/${intervaloEmDias(dataInicio, dataFim)} dias`);
trocarTexto('.percentage-um', `${porcento}%`);
atualizarProgressoCirculo('.progress.color1', porcento);

//seção 2 progresso
let faltasPorcento = porcentagem(numFaltas, maxFaltas);
trocarTexto('.text-faltas', `${numFaltas}/${maxFaltas}`);
trocarTexto('.percentage-dois', `${porcentagem(numFaltas, maxFaltas)}%`);
atualizarProgressoCirculo('.progress.color2', faltasPorcento);


