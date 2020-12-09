answer = document.querySelector(".answer");
tosolve = document.querySelector(".tosolve");

function getvalue(x) {
  tosolve.innerHTML += x;
}

function solve() {
  try {
    if (eval(tosolve.innerHTML)) {
      answer.innerHTML = eval(tosolve.innerHTML);
      tosolve.innerHTML = "";
    }
  } catch (error) {
    alert("invalid operation please check and try again");
  }
}

function clean() {
  tosolve.innerHTML = "";
}

function removeback() {
  tosolve.innerHTML = tosolve.innerHTML.substring(
    0,
    tosolve.innerHTML.length - 1
  );
}
