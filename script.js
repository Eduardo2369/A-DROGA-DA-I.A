const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto passava o tempo em suas redes sociais descobriu a existencia de uma nova tecnologia chamada Inteligencia Artificial. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ficou com medo e permaneceu longe dessa tecnologia. "
            },
            {
                texto: "Pode ser interessante!",
                afirmacao: "mesmo com medo dessa nova tecnologia, deu uma chance a ela."
            }
        ]
    },
    {
        enunciado: "Pesquisando mais sobre essa ferramenta de chat vê que se usado da maneira correta pode ser bastante util. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Decide usar a ferramenta para montar um cronograma para sua semana.",
                afirmacao: "Conseguiu utilizar a IA para fazer uma planilha com horarios e tarefas a serem feitas na semana, alterando apenas algumas coisa para que o cronograma fizesse mais sentido."
            },
            {
                texto: "Decidiu montar o cronograma por si mesmo, com medo de acabar ficando dependente da ferramenta para tudo que precisasse.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Apos o uso dessa tecnologia e ver o que ela proporciona, o que vocer faz?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Você vê o implantamento das IAs no seu local de trabalho algumas semanas depois de descobrir sobre elas. Qual sua decisão??",
        alternativas: [
            {
                texto: "Defende sua aplicação.",
                afirmacao: "Será de grande ajuda, pode acelerar diversas demandandas dentro da empresa."
            },
            {
                texto: "E contra sua aplicação.",
                afirmacao: "Vai acabar gerando um grande numero de desempregos na empresa, e muitas pessoas não conseguirão novas vagas no fututro, gerando mais desemprego!"
            }
        ]
    },
    {
        enunciado: "Sobre uso da IA e seu chat na empresa. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
