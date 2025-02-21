const number: number[] = [10, 20, 30, 40, 50];

const soma: number = number.reduce((total, numero) => total + numero, 0);

console.log(`A soma dos valores do array é: ${soma}`);
