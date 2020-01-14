
// Ex12
// Write a method to generate the nth Fibonacci number.

function Fibonacci (nb) {
  if (nb < 2)
    return nb;
  return Fibonacci(nb - 1) + Fibonacci(nb - 2);
}
