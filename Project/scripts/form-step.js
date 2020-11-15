(function () {
  document.addEventListener("DOMContentLoaded", (event) => {
    const buttonFirst = document.getElementById("form-next-1");
    const buttonSecond = document.getElementById("form-next-2");
    const backFirst = document.getElementById("form-back-1");
    const backSecond = document.getElementById("form-back-2");
    const step1 = document.querySelector(".form__field--step-1");
    const step2 = document.querySelector(".form__field--step-2");
    const step3 = document.querySelector(".form__field--step-3");

    buttonFirst.addEventListener("click", () => {
      step2.style.animation = "none";
      step1.style.animation = "fade-out-left 1s ease-in both";
      setTimeout(() => {
        step2.style.display = "block";
        step1.style.display = "none";
      }, 500);
    });

    backFirst.addEventListener("click", () => {
      step1.style.animation = "none";
      step2.style.animation = "fade-out-right .5s ease-in both";
      setTimeout(() => {
        step1.style.display = "block";
        step2.style.display = "none";
      }, 500);
    });

    buttonSecond.addEventListener("click", () => {
      step3.style.animation = "none";
      step2.style.animation = "fade-out-left 1s ease-in both";
      setTimeout(() => {
        step3.style.display = "block";
        step2.style.display = "none";
      }, 500);
    });

    backSecond.addEventListener("click", () => {
      step2.style.animation = "none";
      step3.style.animation = "fade-out-right .5s ease-in both";
      setTimeout(() => {
        step2.style.display = "block";
        step3.style.display = "none";
      }, 500);
    });
  });
})();
