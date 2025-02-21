interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; 
    exibirInfo(): void; 
  }
  
  const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex",
    exibirInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Motor: ${this.motor ?? "Não especificado"}`);
    }
  };
  
  meuCarro.exibirInfo();
  