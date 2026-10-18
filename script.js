const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];

function rain(emoji = "🍌", n = 18) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "fall";
    s.textContent = emoji;
    s.style.left = Math.random() * 95 + "vw";
    s.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

// ⭐ Star button
let stars = 99, starred = false;
$("star").onclick = () => {
  starred = !starred;
  stars += starred ? 1 : -1;
  $("starN").textContent = stars;
  if (starred) rain("⭐");
};

// 💬 Leaked chat
const convo = [
  ["s", "Soha: Sai you are a monkey 🐒"],
  ["o", "Sai: Excuse me?? 😤"],
  ["s", "Soha: Yes. Ooh ooh aah aah."],
  ["o", "Sai: Soha… why are you holding a banana?"],
  ["s", "Soha: …No reason 🍌"],
  ["o", "Sai: Why is there a banana peel on your head?"],
  ["s", "Soha: It’s a fashion statement."],
  ["o", "Sai: Case closed. YOU are the monkey 🐵"],
  ["s", "Soha: …ok fine. 🙈"],
];
let playing = false;
$("play").onclick = () => {
  if (playing) return;
  playing = true;
  const chat = $("chat");
  chat.innerHTML = "";
  convo.forEach(([who, text], i) => {
    setTimeout(() => {
      const d = document.createElement("div");
      d.className = "b " + who;
      d.textContent = text;
      chat.appendChild(d);
      if (i === convo.length - 1) { rain("🐒"); playing = false; }
    }, i * 900);
  });
};

// 🔬 Monkey checker
const cuties = [
  "Not a monkey. Just a cutie. 💖",
  "0% monkey. 100% queen. 👑",
  "Monkey-free zone. You’re adorable. ✨",
];
$("check").onclick = () => {
  const name = $("nameIn").value.trim();
  if (!name) { $("out").textContent = "Type a name first! 🙈"; return; }
  const isSoha = name.toLowerCase().includes("soha");
  const pct = isSoha ? 100 : Math.floor(Math.random() * 6);
  $("fill").style.width = "0";
  $("out").textContent = "Scanning " + name + "… 🔎";
  setTimeout(() => {
    $("fill").style.width = pct + "%";
    $("out").textContent = isSoha
      ? name + " is " + pct + "% MONKEY 🐒 (certified)"
      : name + " is " + pct + "% monkey. " + pick(cuties);
    if (isSoha) rain("🍌");
  }, 400);
};

// 🍌 Banana clicker
let count = 0;
const milestones = {
  1: "Soha: ooh a banana 👀",
  5: "Soha is getting excited 🙈",
  10: "Soha: ooh ooh aah aah!!",
  20: "Soha is now climbing the curtains 🧗‍♀️",
  30: "Soha: I am NOT a monkey (eats 12th banana)",
  50: "BREAKING: Soha has fully become a monkey 🐒",
};
$("banana").onclick = () => {
  count++;
  $("count").textContent = count;
  if (milestones[count]) {
    $("msg").textContent = milestones[count];
    if (count >= 20) rain("🍌", 10);
  }
};
