class Carro {
    marca: string;
    modelo: string;
    ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInfo(): void {
      console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
  }
  
  const meuCarro1 = new Carro("Toyota", "Corolla", 2022);
  
  meuCarro1.exibirInfo();
  