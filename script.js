const participants = document.querySelectorAll(".participant");

participants.forEach((participant) => {
  participant.addEventListener("click", () => {
    const eliminated = participant.getAttribute("aria-pressed") !== "true";
    participant.setAttribute("aria-pressed", String(eliminated));
    participant.querySelector(".state").textContent = eliminated ? "Eliminado" : "Em jogo";
    participant.setAttribute("aria-label", `${eliminated ? "Restaurar" : "Eliminar"} participante`);
  });
});