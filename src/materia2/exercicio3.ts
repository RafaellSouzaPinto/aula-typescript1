function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
  
  const numeros: number[] = [1, 2, 3, 4, 5]; 
  console.log(inverterArray(numeros));
  
  const palavras: string[] = ["typescript", "é", "muito", "legal"];
  console.log(inverterArray(palavras));
  