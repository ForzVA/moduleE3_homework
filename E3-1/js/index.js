function digitCounter() {
  let arr1 = ["2", "корыто", 5, "2", 0, null, 1, undefined, 1, 0];
  let even = 0;
  let odd = 0;
  let zero = 0;

  arr1.forEach(function (value, index, array) {
    if (typeof value === "number") {
      if (value === 0) zero++;
      else if (value % 2 === 0) even++;
      else if (value % 2 === 1) odd++;
    }
  });
  console.log("Нули: " + zero);
  console.log("Четные числа: " + even);
  console.log("Нечетные числа: " + odd);
}

digitCounter();
