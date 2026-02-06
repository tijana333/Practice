const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.remove("active");

  btn1.classList.add("active");
});

btn2.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.remove("active");

  btn2.classList.add("active");
});
