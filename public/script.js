let currentSlide = 0;
let images = [];

async function loadTestimoni() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzqa6eCcoOEbbGpSnxnC9Q_hMBHHX1awg1Zebv8k4ZnrZIxwH6aHp0VZk-Rvd2QAsVa/exec?testimoni=true');
    const data = await response.json();
    images = data.images || [];

    if (images.length === 0) {
      document.getElementById("slideImage").src = "https://via.placeholder.com/400x300?text=Belum+ada+testimoni";
      return;
    }

    renderSlide();
    renderDots();

  } catch (error) {
    console.error("❌ Gagal memuat testimoni:", error);
  }
}

function renderSlide() {
  const img = document.getElementById("slideImage");
  img.src = images[currentSlide];
  updateDots();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  renderSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  renderSlide();
}

function renderDots() {
  const dotsContainer = document.getElementById("dots");
  dotsContainer.innerHTML = "";

  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = i === currentSlide ? "active" : "";
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll("#dots span");
  dots.forEach((dot, index) => {
    dot.className = index === currentSlide ? "active" : "";
  });
}

window.onload = loadTestimoni;
