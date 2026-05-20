const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const container = document.querySelector(".container");

// Runaway button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Yes clicked
yesBtn.addEventListener("click", () => {
    container.style.display = "none";
    celebration.classList.remove("hidden");

    document.body.style.background =
        "linear-gradient(135deg,#ff85b3,#ff4d88)";
});
