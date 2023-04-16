const buttons = document.querySelectorAll(".btn-mentor");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    alert(
      "Obrigado por entrar em contato! Em breve receberá as informações no seu Email."
    );
  });
});
