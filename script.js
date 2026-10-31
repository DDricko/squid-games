const participants = document.querySelectorAll(".participant");
const selectionCount = document.querySelector("#selection-count");

participants.forEach((participant) => {
  participant.addEventListener("click", () => {
    const selected = participant.getAttribute("aria-pressed") !== "true";
    participant.setAttribute("aria-pressed", String(selected));
    participant.querySelector(".state").textContent = selected ? "Selecionado" : "Em jogo";

    const count = document.querySelectorAll('.participant[aria-pressed="true"]').length;
    selectionCount.textContent = `${count} de ${participants.length} participantes selecionados`;
  });
});
