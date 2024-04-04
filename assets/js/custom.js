// Page Loader
$(function () {
  $("#topNavbar").load("layouts/top-navbar.html");
});

$(function () {
  $("#header").load("layouts/header.html");
});

$(function () {
  $("#footer").load("layouts/footer.html");
});

// Berat Button
var btnBerat1 = document.getElementById("btnBerat1");
var btnBerat2 = document.getElementById("btnBerat2");

$(btnBerat1).click(function () {
  $(this).removeClass("btn-secondary");
  $(this).addClass("btn-success");
  $(this).addClass("btn-outline-secondary");
  $(btnBerat2).removeClass("btn-success");
  $(btnBerat2).removeClass("btn-outline-secondary");
  $(btnBerat2).addClass("btn-secondary");
});

$(btnBerat2).click(function () {
  $(this).removeClass("btn-secondary");
  $(this).addClass("btn-success");
  $(this).addClass("btn-outline-secondary");
  $(btnBerat1).removeClass("btn-success");
  $(btnBerat1).removeClass("btn-outline-secondary");
  $(btnBerat1).addClass("btn-secondary");
});
