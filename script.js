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

document.querySelectorAll(".photo-input").forEach((input) => {
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    const card = input.closest(".participant-card");
    const image = card.querySelector(".participant img");
    const status = card.querySelector(".photo-status");

    if (!file.type.startsWith("image/")) {
      status.textContent = "Escolha um arquivo de imagem.";
      input.value = "";
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const preview = new Image();
    preview.onload = () => {
      if (image.dataset.objectUrl) URL.revokeObjectURL(image.dataset.objectUrl);
      image.src = objectUrl;
      image.dataset.objectUrl = objectUrl;
      status.textContent = "Foto atualizada.";
      input.value = "";
    };
    preview.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      status.textContent = "Não foi possível carregar essa imagem.";
      input.value = "";
    };
    preview.src = objectUrl;
  });
});