// Sem Closure
let pontos = 12;

function deduzirPontos(qtd) {
    pontos - qtd;
    console.log("Pontos restantes: " + pontos);
};

deduzirPontos(3);

pontos = 0;




// Com Closure

function criarCartaCondutor(nomeCondutor, pontosIniciais) {
  let pontos = pontosIniciais;

  return {
    aplicarInfracao: function (pontosInfracao) {
      pontos -= pontosInfracao;
      console.log(`[${nomeCondutor}] Infração aplicada! Pontos restantes: ${pontos}`);
    },

    consultarPontos: function () {
      console.log(`[${nomeCondutor}] Pontos atuais: ${pontos}`);
    }
  };
}

const carteiraJoao = criarCartaCondutor("João Silva", 12);



carteiraJoao.consultarPontos(); 
carteiraJoao.aplicarInfracao(3); 
carteiraJoao.aplicarInfracao(2); 


console.log(carteiraJoao.pontos); 