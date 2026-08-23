const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☼";
  } else {
    themeIcon.textContent = "☾";
  }
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    menuButton.textContent = "×";
  } else {
    menuButton.textContent = "☰";
  }
});

