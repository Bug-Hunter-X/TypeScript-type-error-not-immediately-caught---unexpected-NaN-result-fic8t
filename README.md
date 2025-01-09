# TypeScript Type Error Not Immediately Caught

This code demonstrates a scenario where a TypeScript type error isn't immediately caught, leading to unexpected NaN results at runtime.

## Bug

The `add` function is defined to accept two numbers. However, when calling the function with a number and a string, TypeScript doesn't throw an immediate error. The string is coerced to a number (resulting in NaN), and the function proceeds without any compile time error messages.  The NaN result is only evident during runtime.

## Solution

The solution is to improve type checking.  By using a more stringent type guard, or by using the type system to prevent the situation entirely, we can improve the robustness of the code and avoid unexpected NaN results. 
