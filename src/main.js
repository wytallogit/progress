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

function calcularProgresso() {
    let oFim = (hoje - dataInicio) / (dataFim - dataInicio) * 100;
    return Math.min(oFim, 100).toFixed(2);
}

function atualizarProgressoCirculo(valorPorcento) {
    const circulo = document.querySelector('.progress');
    const offset = 251.2 * (1 + valorPorcento / 100);
    circulo.style.strokeDashoffset = offset;
}

function diasFaltando(hoje, fim) {
    return Math.ceil((fim - hoje) / (1000 * 60 * 60 * 24));
}

function faltas(numFaltas, maxFaltas) {
    return ((numFaltas / maxFaltas) * 100).toFixed(2);
}

function guardaDiasUteis(dataInicio, dataFim) {
    let count = 0;
    let atual = new Date(dataInicio);
    const fim = new Date(dataFim);
  
    while (atual <= fim) {
      const dia = atual.getDay();
      if (dia !== 0 && dia !== 6) count++;
      atual.setDate(atual.getDate() + 1);
    }
  
    return Math.floor(count / 25);
}


let porcento = calcularProgresso();
trocarTexto('.text-progress', `${diasFaltando(hoje, dataFim)} dias restantes`);
trocarTexto('.percentage-um', `${porcento}%`);
atualizarProgressoCirculo(porcento);

trocarTexto('.text-faltas', `${numFaltas}/${maxFaltas}`);
trocarTexto('.percentage-dois', `${faltas(numFaltas, maxFaltas)}%`);
atualizarProgressoCirculo()

trocarTexto('.text-vermelha', `1/${guardaDiasUteis(dataInicio, dataFim)}`);
trocarTexto('.percentage-tres', `${faltas(1, guardaDiasUteis(dataInicio, dataFim))}%`);
