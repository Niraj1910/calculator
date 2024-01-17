const buttons = document.querySelectorAll("button");
const inputTag = document.querySelector("input");
inputTag.setAttribute("readonly", true);

let inputvalue = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const btnvalue = button.innerText;

    if (btnvalue === "=") {
      calculate(inputvalue);
    } else {
      if (btnvalue === "AC") {
        if (inputvalue.length > 0) inputvalue = "";
        else return;
      } else if (btnvalue == "DE") {
        if (inputvalue.length > 0) {
          inputvalue = inputvalue.slice(0, -1);
        } else return;
      } else {
        inputvalue += btnvalue;
      }

      inputTag.value = inputvalue;
    }
  });
});

function calculate(inputvalue) {
  inputTag.value = eval(inputvalue);
}
