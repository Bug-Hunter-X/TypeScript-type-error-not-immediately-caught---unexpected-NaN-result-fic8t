function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); // Type Error, but the bug is not caught immediately
console.log(result); //Outputs NaN, which is unexpected