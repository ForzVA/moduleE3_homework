function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}

const sumFunc = sum(32);
sumFunc(9);
