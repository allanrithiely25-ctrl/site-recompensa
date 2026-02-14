setTimeout(() => {
  document.querySelectorAll('.fill').forEach(bar => {
    bar.style.width = "100%";
  });

  document.getElementById("btnNext").classList.remove("hidden");
}, 2500);

document.getElementById("btnNext")?.addEventListener("click", () => {
  window.location.href = "bonus.html";
});
