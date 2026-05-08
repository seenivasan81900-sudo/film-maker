// backtotop
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", function () {
  var e = document.querySelector(".back-to-top");
  window.scrollY > 100 ? e.classList.add("show") : e.classList.remove("show");
});
