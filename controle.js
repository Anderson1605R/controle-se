const share = document.querySelector(".share");

share.addEventListener("click", () => {
  const element = document.querySelector(".profit");
  const opt = {
    margin: [10, 10, 10, 10],
    fileName: "controle.pdf",
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orietantion: "portrait",
    },
  };
  html2pdf().set(opt).from(element).save();
});
