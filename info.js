const btnEntry = document.querySelector("#btn-entry");
const btnOutput = document.querySelector("#btn-out");

const resEntry = document.querySelector("#res-entry");
const resOut = document.querySelector("#res-out");

// função do botão da entrada
btnEntry.addEventListener("click", e => {
  e.preventDefault();
  const entryTextValue = document.querySelector("#entry-input").value;
  const entryNumberValue = Number(
    document.querySelector("#entry-number").value
  );

  resEntry.innerText += `Entradas: ${entryTextValue.toUpperCase()} R$${entryNumberValue.toFixed(
    2
  )}`;

  document.querySelector("#entry-input").value = "";
  document.querySelector("#entry-number").value = "";
});

btnOutput.addEventListener("click", e => {
  e.preventDefault();
  const outputTextValue = document.querySelector("#output-input").value;
  const outputNumberValue = Number(
    document.querySelector("#output-number").value
  );

  resOut.innerText += `Saídas: ${outputTextValue.toUpperCase()} R$${outputNumberValue.toFixed(
    2
  )}`;

  document.querySelector("#output-input").value = "";
  document.querySelector("#output-number").value = "";
});
