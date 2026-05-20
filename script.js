const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const container = document.querySelector(".container");

let scale = 1;

const messages = [
    "Are you sure?🥺",
    "Cool cool cool cool cool cool",
    "I hate you😒",
    "Let it happen🏳️‍🌈⃤(ref)",
    "PLEASEEEEEEE🥹",
    "PRETTY PWEEASSSEEEEEE👉👈",
    "I hope you die of rabies🐶",
    "Just press yes already✨"
];

let count = 0;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 250);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    scale *= 0.9;
    noBtn.style.transform = `scale(${scale})`;

    noBtn.style.fontSize = `${Math.max(18, scale * 28)}px`;
    noBtn.style.padding = `${Math.max(15, scale * 25)}px ${Math.max(25, scale * 45)}px`;

    noBtn.textContent = messages[count % messages.length];
    count++;
});

yesBtn.addEventListener("click", () => {
    container.style.display = "none";
    celebration.classList.remove("hidden");

    document.body.style.background =
        "linear-gradient(135deg,#001233,#003566,#00509d)";
});
