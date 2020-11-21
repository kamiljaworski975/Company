(function () {
  console.log("dziala");
  const inputs = Array.from(document.querySelectorAll(".ac-input"));
  const texts = Array.from(document.querySelectorAll(".ac-text"));
  console.log(inputs);
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const ID = e.target.id;
      const changeID = ID.replace("ac-", "");
      const fintText = texts.find((text) => text.id === `at-${changeID}`);
      fintText.classList.toggle("acc-show");
    });
  });
})();
