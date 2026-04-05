const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

function updateDisplay() {
  display.innerText = input || "0";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      input = "";
    }

    else if (value === "⌫") {
      input = input.slice(0, -1);
    }

    else if (value === "=") {
      try {
        input = eval(input).toString();
      } catch {
        input = "";
        display.innerText = "Error";
        return;
      }
    }

    else {
      input += value;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {

  if ("0123456789+-*/.%".includes(e.key)) {
    input += e.key;
  }

  else if (e.key === "Enter") {
    try {
      input = eval(input).toString();
    } catch {
      input = "";
      display.innerText = "Error";
      return;
    }
  }

  else if (e.key === "Backspace") {
    input = input.slice(0, -1);
  }

  else if (e.key === "Escape") {
    input = "";
  }

  updateDisplay();
});