document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("downloadBtn");

  if (button) {
    button.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "Harpers_Mythical_Word_Search.pdf";
      link.download = "Harpers_Mythical_Word_Search.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});