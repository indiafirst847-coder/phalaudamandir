// Simple interactions: language toggle, slider autoplay, gallery lightbox
document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("lang-en");
  const hiBtn = document.getElementById("lang-hi");
  const setLang = (lang) => {
    document
      .querySelectorAll(".en")
      .forEach((el) => (el.style.display = lang === "en" ? "" : "none"));
    document
      .querySelectorAll(".hi")
      .forEach((el) => (el.style.display = lang === "hi" ? "" : "none"));
    if (lang === "en") {
      enBtn.classList.add("active");
      hiBtn.classList.remove("active");
    } else {
      hiBtn.classList.add("active");
      enBtn.classList.remove("active");
    }
    localStorage.setItem("site-lang", lang);
  };
  const saved = localStorage.getItem("site-lang") || "en";
  setLang(saved);

  enBtn.addEventListener("click", () => setLang("en"));
  hiBtn.addEventListener("click", () => setLang("hi"));

  // slider
  let slides = document.querySelectorAll(".slide");
  let cur = 0;
  const show = (i) => {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  };
  setInterval(() => {
    cur = (cur + 1) % slides.length;
    show(cur);
  }, 5000);

  // gallery lightbox
  //const lightbox = document.getElementById("lightbox");
  //const lbImg = document.getElementById("lb-img");
  //document.querySelectorAll(".grid .thumb img").forEach((img) => {
    //img.addEventListener("click", () => {
      //lbImg.src = img.src;
      //lightbox.classList.remove("hidden");
   // });
  //});
  document
    .querySelector(".close-lb")
    .addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });

  // smooth scroll for nav links
  document.querySelectorAll(".nav a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
