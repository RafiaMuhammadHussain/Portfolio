let text = "Frontend Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
function toggleCertificates() {

  let certificates = document.getElementById("certificate-box");

  certificates.classList.toggle("d-none");
}

function changeTheme(button) {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    button.innerHTML = "☀ Light";
  } else {
    button.innerHTML = "🌙 Dark";
  }
}