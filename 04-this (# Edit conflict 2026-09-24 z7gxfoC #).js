const veiculoIMT = {
  marca: "Toyota",
  modelo: "Corolla",
  velocidadeAtual: 50,

  /* exibirDetalhes: function () {
    console.log(`Veículo: ${this.marca} ${this.modelo} a ${this.velocidadeAtual} km/h`);
  }, */

  
  exibirDetalhesIncorreto: () => {
    console.log(`Veículo: ${this.marca} ${this.modelo}`); 
  },

 
  acelerarComDelay: function () {
    console.log(`Velocidade inicial: ${this.velocidadeAtual} km/h`);

    
    setTimeout(() => {
      this.velocidadeAtual += 20;
      console.log(`[Após 1s] Nova velocidade: ${this.velocidadeAtual} km/h`);
    }, 1000);
  }
};

 function exibirDetalhes () {
    console.log(`Veículo: ${this.marca} ${this.modelo} a ${this.velocidadeAtual} km/h`);
  }

  exibirDetalhes();
/* veiculoIMT.exibirDetalhes(); 
 */
veiculoIMT.exibirDetalhesIncorreto(); 

veiculoIMT.acelerarComDelay();