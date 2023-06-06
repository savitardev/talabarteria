// Obtener elementos del DOM
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

// Función para mostrar la imagen actual
function showSlide() {
  // Restaurar la opacidad de todas las imágenes
  images.forEach(img => img.classList.remove('active'));

  // Mostrar la imagen actual
  images[currentSlide].classList.add('active');
}

// Función para mostrar la siguiente imagen
function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Función para mostrar la imagen anterior
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide();
}

// Event listeners para los botones de control
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostrar la primera imagen al cargar la página
showSlide();

// Cambiar de imagen automáticamente cada 4 segundos
setInterval(nextSlide, 4000);