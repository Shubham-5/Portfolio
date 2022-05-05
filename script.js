const currentYear = document.getElementById("currentYear");
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();

  currentYear.innerText = year;
});
