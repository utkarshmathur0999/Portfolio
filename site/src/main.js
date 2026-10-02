import { profile, links, stats, about, aboutFocus, experience, skills, project, certifications, education } from "./data/portfolio.js";

const $ = (id) => document.getElementById(id);
const isSet = (u) => u && !u.includes("_HERE");
const ext = (u, label, cls = "btn") => isSet(u) ? `<a class="${cls}" href="${u}" target="_blank" rel="noopener noreferrer">${label}</a>` : "";
const chips = (a) => a.map((t) => `<li>${t}</li>`).join("");
const mono = (t) => t.replace(/[^A-Za-z0-9]/g, "").slice(0, 2);

// ---------- Hero ----------
$("tagline").textContent = profile.tagline;
$("intro").textContent = profile.intro;
$("heroStack").innerHTML = chips(profile.heroStack);
const heroImg = $("heroPhoto");
heroImg.src = profile.photo; heroImg.alt = profile.photoAlt;
heroImg.onerror = () => { heroImg.closest(".photo").classList.add("fallback"); heroImg.remove(); };
$("heroCta").innerHTML = `
  <a class="btn primary" href="#projects">View my work</a>
  <a class="btn" href="${links.resume}" download="${links.resumeDownloadName}">Download resume</a>
  <a class="btn" href="#contact">Contact me</a>
  ${ext(links.linkedin, "LinkedIn")}${ext(links.github, "GitHub")}`;
$("stats").innerHTML = stats.map((s) => `<div><dt>${s.value}</dt><dd>${s.label}</dd></div>`).join("");

// ---------- About ----------
$("aboutText").innerHTML = about.map((p) => `<p>${p}</p>`).join("");
$("aboutFocus").innerHTML = chips(aboutFocus);
if (profile.aboutPhoto) { const i = $("aboutPhoto"); i.src = profile.aboutPhoto; i.alt = profile.photoAlt; i.hidden = false; i.onerror = () => i.remove(); }

// ---------- Experience ----------
$("timeline").innerHTML = experience.map((e) => `
  <li class="job">
    <div class="job-head"><h3>${e.role}</h3><p class="when">${e.period}</p></div>
    <p class="where">${e.company} · ${e.location}</p>
    ${e.metrics.length ? `<ul class="metrics">${e.metrics.map((m) => `<li>${m}</li>`).join("")}</ul>` : ""}
    <ul class="points">${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
  </li>`).join("");

// ---------- Skills ----------
$("filters").innerHTML = ["All", ...skills.map((s) => s.title)].map((t, i) => `<button class="f${i ? "" : " on"}" data-f="${t}" aria-pressed="${!i}">${t}</button>`).join("");
$("skillGrid").innerHTML = skills.map((s) => `
  <section class="skill-group" data-cat="${s.title}">
    <h3>${s.title}</h3>
    <ul>${s.items.map((i) => `<li><span class="mono" aria-hidden="true">${mono(i)}</span>${i}</li>`).join("")}</ul>
  </section>`).join("");
$("filters").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll(".f").forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); });
  document.querySelectorAll(".skill-group").forEach((g) => g.hidden = b.dataset.f !== "All" && g.dataset.cat !== b.dataset.f);
});

// ---------- Project ----------
const flow = (a, cls) => `<ol class="flow ${cls}">${a.map((n) => `<li>${n}</li>`).join("")}</ol>`;
$("project").innerHTML = `
  <div class="proj-top">
    <h3>${project.title}</h3>
    <ul class="chips">${chips(project.stack)}</ul>
    <p class="lead">${project.summary}</p>
    <div class="cta">${ext(project.projectUrl, "View project", "btn primary")}${ext(project.githubUrl, "GitHub")}</div>
  </div>
  <div class="proj-cols">
    <div><h4>Key features</h4><ul class="points">${project.features.map((f) => `<li>${f}</li>`).join("")}</ul></div>
    <div><h4>AI assistant</h4><ul class="points">${project.aiPoints.map((f) => `<li>${f}</li>`).join("")}</ul></div>
  </div>
  <div class="diagrams">
    <figure><figcaption>Application architecture</figcaption>${flow(project.appFlow, "v")}</figure>
    <figure><figcaption>AI assistant flow (RAG)</figcaption>${flow(project.aiFlow, "v")}</figure>
  </div>`;

// ---------- Certifications ----------
$("certs").innerHTML = certifications.map((c, i) => `
  <article class="cert">
    <button class="cert-img" data-i="${i}" aria-label="View ${c.name} certificate"><img src="${c.image}" alt="${c.imageAlt}" loading="lazy"></button>
    <div class="cert-body">
      <h3>${c.name}</h3>
      <p>${c.issuer}</p>
      <p class="muted">Issued ${c.issued} · Expires ${c.expires}</p>
      <div class="cta"><button class="btn" data-i="${i}">View certificate</button>${ext(c.verifyUrl, "Verify credential", "btn primary")}</div>
    </div>
  </article>`).join("");
const lb = $("lightbox"), lbImg = $("lbImg");
const closeLb = () => { lb.hidden = true; };
$("certs").addEventListener("click", (e) => {
  const t = e.target.closest("[data-i]"); if (!t) return;
  const c = certifications[t.dataset.i]; lbImg.src = c.image; lbImg.alt = c.imageAlt; lb.hidden = false; $("lbClose").focus();
});
lb.addEventListener("click", (e) => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// ---------- Education ----------
$("edu").innerHTML = `<h3>${education.degree}</h3><p>${education.school}</p><p class="muted">${education.location} · ${education.years}</p><p class="cgpa"><b>${education.cgpa}</b> CGPA</p>`;

// ---------- Resume ----------
$("resumeCard").innerHTML = `
  <div class="resume-prev" aria-hidden="true"><span>PDF</span><i></i><i></i><i></i><i class="s"></i></div>
  <div>
    <h3>${profile.name} — Resume</h3>
    <p class="muted">Backend Software Engineer · Java, Spring Boot, Banking &amp; FinTech</p>
    <div class="cta">
      <a class="btn primary" href="${links.resume}" download="${links.resumeDownloadName}">Download resume</a>
      <a class="btn" href="${links.resume}" target="_blank" rel="noopener noreferrer">Open resume</a>
    </div>
  </div>`;

// ---------- Gallery (hidden unless photos are listed) ----------
if (profile.gallery.length) {
  $("gallery-sec").hidden = false;
  $("gallery").innerHTML = profile.gallery.map((g) => `<img src="${g.src}" alt="${g.alt}" loading="lazy">`).join("");
}

// ---------- Contact & footer ----------
const row = (k, v) => `<div><span class="muted">${k}</span><span>${v}</span></div>`;
$("contactList").innerHTML = `
  <div class="rows">${row("Email", `<a href="mailto:${links.email}">${links.email}</a>`)}${row("Phone", `<a href="tel:+91${links.phone}">${links.phone}</a>`)}</div>
  <div class="cta"><a class="btn primary" href="mailto:${links.email}">Email me</a>${ext(links.linkedin, "LinkedIn")}${ext(links.github, "GitHub")}<a class="btn" href="${links.resume}" target="_blank" rel="noopener noreferrer">Resume</a></div>`;
const foot = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"], ["Certifications", "#certifications"], ["Resume", "#resume"], ["Contact", "#contact"]];
$("footNav").innerHTML = foot.map(([t, h]) => `<a href="${h}">${t}</a>`).join("") +
  (isSet(links.linkedin) ? ext(links.linkedin, "LinkedIn", "") : "") + (isSet(links.github) ? ext(links.github, "GitHub", "") : "");

// ---------- Nav ----------
const burger = $("burger"), menu = $("menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
const links$ = [...menu.querySelectorAll("a")];
const io = new IntersectionObserver((es) => es.forEach((en) => {
  if (en.isIntersecting) links$.forEach((a) => a.classList.toggle("act", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main > section").forEach((s) => io.observe(s));

// ---------- Theme ----------
$("theme").addEventListener("click", () => {
  const n = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = n; try { localStorage.setItem("theme", n); } catch (e) {}
});

// ---------- One reveal: timeline draws in; sections are otherwise static ----------
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const jobs = document.querySelectorAll(".job");
if (!reduce) {
  const ro = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } }), { threshold: 0.15 });
  jobs.forEach((j) => ro.observe(j));
} else jobs.forEach((j) => j.classList.add("in"));

// ---------- Subtle grid background ----------
const cv = $("grid"), ctx = cv.getContext("2d");
function drawGrid() {
  const d = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * d; cv.height = innerHeight * d;
  ctx.scale(d, d); ctx.clearRect(0, 0, innerWidth, innerHeight);
  const light = document.documentElement.dataset.theme === "light";
  ctx.fillStyle = light ? "rgba(14,22,38,.14)" : "rgba(150,180,255,.16)";
  for (let x = 0; x < innerWidth; x += 36) for (let y = 0; y < innerHeight; y += 36) ctx.fillRect(x, y, 1.2, 1.2);
}
drawGrid(); addEventListener("resize", drawGrid);
new MutationObserver(drawGrid).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
