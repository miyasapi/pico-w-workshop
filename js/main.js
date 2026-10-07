const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".nav-toggle");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const detail = document.getElementById("pin-detail");
const led = document.getElementById("onboard-led");

document.querySelectorAll(".pins button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pins button").forEach((el) => el.classList.remove("is-active"));
    button.classList.add("is-active");
    detail.textContent = `${button.dataset.pin} — ${button.dataset.use}`;
    led.style.opacity = button.dataset.pin === "LED" ? "1" : "0.35";
  });
});

const form = document.getElementById("apply-form");
const status = document.getElementById("form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const experience = String(data.get("experience") || "").trim();

  if (!name || !email || !experience) {
    status.textContent = "必須項目を入力してください。";
    status.style.color = "#ff8aa0";
    return;
  }

  status.style.color = "";
  status.textContent = `${name} さん、仮申し込みを受け付けました。確認は ${email} 宛に送る想定です。`;
  form.reset();
});
