const input = document.getElementById("input");
const plus_button = document.getElementById("plus-button");
const minus_button = document.getElementById("minus-button");
const multiply_button = document.getElementById("multiply-button");
const divide_button = document.getElementById("divide-button");
const cache_paragraph = document.getElementById("cache");
const calculate_button = document.getElementById("calculate-button");
const result_list = document.getElementById("result");

let list = [];

const symbol_clicked = symbol => () => {
  {
    if (input.value === "" || !Number.isInteger(Number(input.value))) {
      alert("숫자를 입력하세요!");
      return;
    }

    list.push(Number(input.value));
    list.push(symbol);
    input.value = "";
    cache_paragraph.innerHTML = list.join(" ");
  }
};

const calculate_button_clicked = () => {
  const length = list.length;
  let result = 0;
  list.push(Number(input.value));
  // const list_item = ['<li>', ...list, '</li>'].join(' ');

  for (let i = 0; i < length; i++) {
    if (i == 0) result = list[i];
    if (i % 2 === 1) {
      switch (list[i]) {
        case "+":
          result += list[i + 1];
          break;
        case "-":
          result -= list[i + 1];
          break;
        case "*":
          result *= list[i + 1];
          break;
        case "/":
          result /= list[i + 1];
          break;
      }
    }
  }

  const list_item = document.createElement("li");
  list_item.innerHTML = [...list, "=", result].join(" ");
  result_list.appendChild(list_item);
  input.value = "";
  cache_paragraph.innerHTML = "";
  list = [];
};

plus_button.onclick = symbol_clicked("+");
minus_button.onclick = symbol_clicked("-");
multiply_button.onclick = symbol_clicked("*");
divide_button.onclick = symbol_clicked("/");
calculate_button.onclick = calculate_button_clicked;
