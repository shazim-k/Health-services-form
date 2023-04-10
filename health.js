
var onSwitch = document.querySelector(".on-switch");
var offSwitch = document.querySelector(".off-switch");

onSwitch.addEventListener("click", function () {
  onSwitch.style.display = "none";
  offSwitch.style.display = "block";
});

offSwitch.addEventListener("click", function () {
  offSwitch.style.display = "none";
  onSwitch.style.display = "block";
});


var onSwitches = document.querySelectorAll(".on-switch");
var offSwitches = document.querySelectorAll(".off-switch");

onSwitches.forEach(function (onSwitch) {
  onSwitch.addEventListener("click", function () {
    onSwitch.style.display = "none";
    onSwitch.nextElementSibling.style.display = "block";
  });
});

offSwitches.forEach(function (offSwitch) {
  offSwitch.addEventListener("click", function () {
    offSwitch.style.display = "none";
    offSwitch.previousElementSibling.style.display = "block";
  });
});



$(document).ready(function () {
  $("#datepicker").datepicker();
});



const buttons = document.querySelectorAll('.btn-3');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
      btn.querySelector('.ticks-check').style.display = 'block';
      btn.querySelector('.on-btn').style.display = 'none';
    });
    button.classList.add('active');
    button.querySelector('.ticks-check').style.display = 'none';
    button.querySelector('.on-btn').style.display = 'block';
  });
});


const dropdownMenu = document.querySelector(".dropdown-menu");
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const listItem = document.createElement("li");
      const linkItem = document.createElement("a");
      linkItem.classList.add("dropdown-item");
      linkItem.dataset.value = country.name.common;
      linkItem.textContent = country.name.common;
      listItem.appendChild(linkItem);
      dropdownMenu.appendChild(listItem);
    });
  });
