//navbar
function setActiveNav() {
  const currentPage = window.location.pathname;

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    link.classList.remove("active");

    const normalizedHref = href.startsWith("/") ? href : "/" + href;

    if (
      currentPage === normalizedHref ||
      (currentPage === "/" && normalizedHref === "/index.html")
    ) {
      link.classList.add("active");
    }
  });
}
fetch("/includes/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar-placeholder").innerHTML = html;
    setActiveNav();
  });
// backtotop
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", function () {
  var e = document.querySelector(".back-to-top");
  window.scrollY > 100 ? e.classList.add("show") : e.classList.remove("show");
});
