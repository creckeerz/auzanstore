const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let slideInterval;

// Generate dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.onclick = () => moveToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function moveToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Start
updateSlider();
startAutoSlide();

// Pause saat hover
slides.parentElement.addEventListener('mouseenter', stopAutoSlide);
slides.parentElement.addEventListener('mouseleave', startAutoSlide);
