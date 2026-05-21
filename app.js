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