function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  let total = 0;
  for (let n of numbers) {
    if (n % 2 === 0) {
      total += n
    }
  }
  return total
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
