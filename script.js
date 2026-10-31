const participants = document.querySelectorAll(".participant");
const selectionCount = document.querySelector("#selection-count");

participants.forEach((participant) => {
  participant.addEventListener("click", () => {
    const eliminated = participant.getAttribute("aria-pressed") !== "true";
    participant.setAttribute("aria-pressed", String(eliminated));
    participant.querySelector(".state").textContent = eliminated ? "Eliminado" : "Em jogo";

    const name = participant.querySelector(".name").textContent;
    participant.setAttribute("aria-label", `${eliminated ? "Restaurar" : "Eliminar"} ${name}`);

    const count = document.querySelectorAll('.participant[aria-pressed="true"]').length;
    const label = count === 1 ? "participante eliminado" : "participantes eliminados";
    selectionCount.textContent = `${count} de ${participants.length} ${label}`;
  });
});