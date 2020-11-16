(function () {
  document.addEventListener("DOMContentLoaded", (event) => {
    const contactForm = document.getElementById("contact-form");
    const buttonFirst = document.getElementById("form-next-1");
    const buttonSecond = document.getElementById("form-next-2");
    const backFirst = document.getElementById("form-back-1");
    const backSecond = document.getElementById("form-back-2");
    const buttonSend = document.getElementById("form-send");
    const step1 = document.querySelector(".form__field--step-1");
    const step2 = document.querySelector(".form__field--step-2");
    const step3 = document.querySelector(".form__field--step-3");
    const errorStepOne = document.getElementById("error-step--one");
    const budgetError = document.getElementById("budget-error");
    const startError = document.getElementById("start-error");
    const firstNameError = document.getElementById("firstName-error");
    const lastNameError = document.getElementById("lastName-error");
    const emailError = document.getElementById("email-error");
    const checkboxes = Array.from(
      document.querySelectorAll(".form__field--checkbox")
    );
    const inputsTwo = Array.from(document.querySelectorAll(".step2-input"));
    const inputsThree = Array.from(document.querySelectorAll(".step3-input"));
    const select = Array.from(
      document.querySelectorAll(".form__field--select")
    );

    const textArea = document.querySelector(".form__field--area");

    const checkStep = (obj) => {
      const check = Object.keys(obj).every((i) => {
        return obj[i] == false;
      });
      return check;
    };

    const checkStepTwo = (obj) => {
      const check = obj["Budget"] && obj["Start"];

      if (obj["Start"] == false) {
        startError.style.display = "block";
      } else {
        startError.style.display = "none";
      }
      if (obj["Budget"] == false) {
        budgetError.style.display = "block";
      } else {
        budgetError.style.display = "none";
      }
      return check;
    };

    const checkStepThree = (obj) => {
      const check = obj["FirstName"] && obj["LastName"] && obj["Email"];

      if (obj["FirstName"] == false) {
        firstNameError.style.display = "block";
      } else {
        firstNameError.style.display = "none";
      }
      if (obj["LastName"] == false) {
        lastNameError.style.display = "block";
      } else {
        lastNameError.style.display = "none";
      }
      if (obj["Email"] == false) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
      return check;
    };

    const handleOnChange = (el, obj, checkbox) => {
      el.addEventListener("change", (e) => {
        const name = e.target.name;
        const value = checkbox ? e.target.checked : e.target.value;
        obj[name] = value;
      });
    };

    const formState = {
      stepOne: {
        Branding: false,
        CustomDev: false,
        Ecommerce: false,
        LandingPage: false,
        Other: false,
        WebsiteDesign: false,
      },
      stepTwo: {
        companyName: "",
        Website: "",
        Budget: false,
        Start: false,
        infoArea: false,
      },
      stepThree: {
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
      },
      getValueOne: () => {
        checkboxes.forEach((el) => {
          handleOnChange(el, formState.stepOne, true);
        });
      },
      getValueTwo: () => {
        inputsTwo.forEach((el) => {
          handleOnChange(el, formState.stepTwo);
        });
        select.forEach((el) => {
          handleOnChange(el, formState.stepTwo);
        });
        handleOnChange(textArea, formState.stepTwo);
      },
      getValueThree: () => {
        inputsThree.forEach((el) => {
          handleOnChange(el, formState.stepThree);
        });
      },
    };

    formState.getValueOne();
    formState.getValueTwo();
    formState.getValueThree();

    buttonFirst.addEventListener("click", (e) => {
      e.preventDefault();
      if (!checkStep(formState.stepOne)) {
        step2.style.animation = "none";
        step1.style.animation = "fade-out-left 1s ease-in both";
        errorStepOne.style.display = "none";
        setTimeout(() => {
          step2.style.display = "block";
          step1.style.display = "none";
          window.scrollTo(0, 0);
        }, 500);
      } else {
        errorStepOne.style.display = "block";
      }
    });

    backFirst.addEventListener("click", () => {
      step1.style.animation = "none";
      step2.style.animation = "fade-out-right .5s ease-in both";
      setTimeout(() => {
        step1.style.display = "block";
        step2.style.display = "none";
        window.scrollTo(0, 0);
      }, 500);
    });

    buttonSecond.addEventListener("click", (e) => {
      e.preventDefault();
      if (checkStepTwo(formState.stepTwo)) {
        startError.style.display = "none";
        budgetError.style.display = "none";
        step3.style.animation = "none";
        step2.style.animation = "fade-out-left 1s ease-in both";
        setTimeout(() => {
          step3.style.display = "block";
          step2.style.display = "none";
          window.scrollTo(0, 0);
        }, 500);
      } else {
        return false;
      }
    });

    backSecond.addEventListener("click", () => {
      step2.style.animation = "none";
      step3.style.animation = "fade-out-right .5s ease-in both";
      setTimeout(() => {
        step2.style.display = "block";
        step3.style.display = "none";
        window.scrollTo(0, 0);
      }, 500);
    });

    buttonSend.addEventListener("click", (e) => {
      e.preventDefault();
      contactForm.reset();
      const dataBase = [];
      if (checkStepThree(formState.stepThree)) {
        console.log("idz dalej");
        firstNameError.style.display = "none";
        lastNameError.style.display = "none";
        emailError.style.display = "none";
        dataBase.push(
          formState.stepOne,
          formState.stepTwo,
          formState.stepThree
        );
        console.log(dataBase);
      } else {
        console.log("brakuje");
      }
    });
  });
})();
