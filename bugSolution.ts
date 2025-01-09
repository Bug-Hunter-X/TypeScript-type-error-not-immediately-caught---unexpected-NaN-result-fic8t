function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

// Using type guards to improve type safety:
function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Both arguments must be numbers')
  }
}

let result1 = add(1, 2); // Works correctly
console.log(result1); // Output: 3

try {
  let result2 = add(1, '2'); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error); // Output: Error: Both arguments must be numbers
}

let result3 = addSafe(1,2);
console.log(result3); //Output: 3

try {
  let result4 = addSafe(1, '2'); // Throws an error
  console.log(result4);
} catch (error) {
  console.error(error); // Output: Error: Both arguments must be numbers
}
