import "./styles.css";

const $btnAdd = document.getElementById("btn-add");
const $dlgAdd = document.getElementById("dlg-add");
$btnAdd.addEventListener("click", () => {
  $dlgAdd.classList.remove("hidden");
});

for (const $dlgContainer of document.getElementsByClassName(
  "dialog-container"
)) {
  $dlgContainer.addEventListener("click", (e) => {
    if (e.target === $dlgContainer) {
      $dlgContainer.classList.add("hidden");
    }
  });
}
