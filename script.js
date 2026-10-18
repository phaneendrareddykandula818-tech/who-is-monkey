const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Primate Assessment Index
const clean = [
  "Entirely human. Remarkably well composed.",
  "No primate traits detected. Excellent posture.",
  "Classification: Human. Suspiciously elegant.",
  "Fully cleared. The committee apologises for the inconvenience.",
];
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("nameIn").value.trim();
  if (!name) return;
  const isSoha = name.toLowerCase().includes("soha");
  const score = isSoha ? 97 : 2 + Math.floor(Math.random() * 8);
  const fill = $("gfill");
  fill.style.width = "0";
  fill.classList.toggle("hi", isSoha);
  $("result").classList.add("on");
  setTimeout(() => {
    fill.style.width = score + "%";
    $("score").textContent = name + ": " + score + " / 100";
    $("class").textContent = isSoha
      ? "Classification: Monkey. High confidence. Banana involvement noted."
      : pick(clean);
  }, 150);
});

// Statements from the accused
const statements = [
  ["I stand by what I said.", "Noted. Please see Exhibit B."],
  ["That was taken out of context.", "The context was a chair. The committee has the footage."],
  ["I was speaking metaphorically.", "The committee notes that metaphors rarely involve bananas."],
  ["I have never climbed anything.", "Reference: 12:30. The chair."],
  ["I refuse to comment.", "She then commented for forty minutes."],
  ["Fine. Maybe a little.", "The committee thanks the accused for her honesty."],
];
let qi = 0;
$("nextQ").onclick = () => {
  qi = (qi + 1) % statements.length;
  $("quote").textContent = "“" + statements[qi][0] + "”";
  $("resp").textContent = "Committee response: " + statements[qi][1];
};

// Appeal
const appeals = [
  "Appeal denied. Please eat a banana and reconsider.",
  "Appeal received, reviewed, and gently ignored.",
  "The committee has consulted the chair. Appeal denied.",
  "Your appeal has been filed under “Monkey, Soha”.",
];
$("appeal").onclick = () => {
  $("appealOut").textContent = pick(appeals);
};
