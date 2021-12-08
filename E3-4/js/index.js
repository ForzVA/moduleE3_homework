function counter(start, stop) {
  let current = start;

  let timerId = setInterval(function () {
    console.log(current);
    if (current === stop) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

counter(5, 15);
