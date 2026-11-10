// Shows one language: the one in the URL (#de), else the browser's, else English.
(() => {
  const langs = ["en", "de", "es", "it", "fr"];
  const pick = () => {
    const hash = location.hash.slice(1);
    if (langs.includes(hash)) return hash;
    const browser = (navigator.languages || [navigator.language]).map(l => l.slice(0, 2)).find(l => langs.includes(l));
    return browser || "en";
  };
  const show = () => {
    const lang = pick();
    document.documentElement.lang = lang;
    document.querySelectorAll("section[lang]").forEach(s => s.classList.toggle("on", s.lang === lang));
    document.querySelectorAll("nav.langs a").forEach(a => a.toggleAttribute("aria-current", a.hash === "#" + lang));
    const title = document.querySelector(`section[lang="${lang}"] h1`);
    if (title) document.title = title.textContent + " – Life Dinner";
  };
  document.documentElement.classList.add("js");
  addEventListener("hashchange", show);
  show();
})();
