(function () {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const fillteredDiv = Array.from(document.querySelectorAll(".filterDiv"));

  fillteredDiv.forEach((el) => {
    el.classList.add("show");
  });

  const filterFunction = (id) => {
    fillteredDiv.forEach((el) => {
      el.classList.remove("show");
    });
    const filtered = fillteredDiv.filter((el) => {
      return el.classList.contains(id);
    });
    filtered.forEach((el) => {
      el.classList.toggle("show");
    });
    console.log(filtered);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.id;
      filterFunction(id);
      console.log(id);
    });
  });
})();
