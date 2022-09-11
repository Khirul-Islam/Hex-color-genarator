const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

function hexCode() {
  const allCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  let hash = "#";
  let hash2 = "#";
  for (let i = 0; i < 6; i++) {
    let num01 = Math.round(Math.random() * 15);
    let num02 = Math.round(Math.random() * 15);

    let revarce = allCode.reverse();
    let num2 = allCode[num01];
    let num3 = revarce[num02];
    hash += num2;
    hash2 += num3;
    console.log(hash2);
  }
  input.value =
    " Background Color (" + hash + ")   /  " + "Button Color (" + hash2 + ")";
  container.style.backgroundColor = hash;
  btn.style.backgroundColor = hash2;
}
