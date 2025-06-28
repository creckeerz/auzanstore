<script>
  const API_URL = "https://script.google.com/macros/s/AKfycbw40ofEWz69ou4GFjQbf72y1e4yGsdYNo_NKIwracrEv2SJc9Ebq1UG32DSIOQx2oQS/exec?testimoni=true";

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const slidesContainer = document.getElementById("slides");
      const dotsContainer = document.getElementById("dots");

      if (!data.images || data.images.length === 0) {
        slidesContainer.innerHTML = "<p>Belum ada testimoni tersedia.</p>";
        return;
      }

      data.images.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Testimoni " + (index + 1);
        img.style.display = "none"; // Awalnya disembunyikan semua
        slidesContainer.appendChild(img);

        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => showSlide(index);
        dotsContainer.appendChild(dot);
      });

      showSlide(0); // Tampilkan gambar pertama
    })
    .catch(err => {
      console.error("❌ Gagal memuat testimoni:", err);
    });

  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll("#slides img");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });

    dots.forEach((d, i) => {
      d.style.background = i === index ? "#333" : "#bbb";
    });

    currentIndex = index;
  }

  function nextSlide() {
    const total = document.querySelectorAll("#slides img").length;
    showSlide((currentIndex + 1) % total);
  }

  function prevSlide() {
    const total = document.querySelectorAll("#slides img").length;
    showSlide((currentIndex - 1 + total) % total);
  }
</script>
