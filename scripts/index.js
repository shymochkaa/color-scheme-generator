const selectColorForm = document.querySelector("#select-color-form");
const colorDivs = document.querySelectorAll(".color");
const hexColorCodes = document.querySelectorAll(".hex-color-code");

selectColorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectColorFormData = new FormData(selectColorForm);
  const selectedColor = selectColorFormData
    .get("selectedColor")
    .replace("#", "");

  let selectElement = document.querySelector("#color-schemes");
  let selectedMode = selectElement.value;

  fetchData(selectedColor, selectedMode);
});

const fetchData = (selectedColor, selectedMode) => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor}&format=json&mode=${selectedMode}&count=6`
  )
    .then((response) => response.json())
    .then((data) => {
      colorDivs.forEach((colorDiv, index) => {
        const color = data.colors[index].hex.value;
        colorDiv.style.backgroundColor = color;
      });

      hexColorCodes.forEach((hexColorCode, index) => {
        const color = data.colors[index].hex.value;
        hexColorCode.textContent = color;
      });
    });
};

const hexColors = document.querySelectorAll(".hex-color");

hexColors.forEach((hexColor) => {
  hexColor.addEventListener("click", () => {
    const hexColorCode = hexColor.querySelector(".hex-color-code").textContent;
    const tooltip = hexColor.querySelector(".tooltiptext");

    navigator.clipboard.writeText(hexColorCode).then(() => {
      tooltip.textContent = "Copied!";
      hexColor.classList.add("show-tooltip");

      setTimeout(() => {
        hexColor.classList.remove("show-tooltip");
        tooltip.textContent = "Copy to clipboard";
      }, 600);
    });
  });
});
