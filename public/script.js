// Slider Testimoni
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let slideInterval;

// Buat dot navigasi
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.onclick = () => moveToSlide(i);
  dotsContainer.appendChild(dot);
}

const updateSlider = () => {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentIndex);
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
};

const moveToSlide = (index) => {
  currentIndex = index;
  updateSlider();
};

const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
  clearInterval(slideInterval);
};

updateSlider();
startAutoSlide();

slides.parentElement.addEventListener('mouseenter', stopAutoSlide);
slides.parentElement.addEventListener('mouseleave', startAutoSlide);
