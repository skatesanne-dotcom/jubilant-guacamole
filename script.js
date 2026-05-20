const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const container = document.querySelector(".container");

let scale = 1;

const messages = [
    "Are you sure?🥺",
    "Cool cool cool cool cool cool",
    "I hate you",
    "Let it happen(ref)",
    "PLEASEEEEEEE",
    "We'd be legend-wait for it-dary",
    "Just press yes already✨"
];

let count = 0;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    scale *= 0.82;
    noBtn.style.transform = `scale(${scale})`;

    noBtn.textContent = messages[count % messages.length];
    count++;
});

yesBtn.addEventListener("click", () => {
    container.style.display = "none";
    celebration.classList.remove("hidden");

    document.body.style.background =
        "linear-gradient(135deg,#001233,#003566,#00509d)";
});
