function updateStatus(i, status) {
  // Contoh request ke endpoint API update status paket i
  fetch('/api/updateStatus', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index: i, status })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      console.log('Status paket #' + (i+1) + ' berhasil diperbarui');
    } else {
      alert('Gagal update status');
    }
  })
  .catch(err => {
    alert('Gagal update status');
    console.error(err);
  });
}

const statusButtons = document.querySelectorAll('.status-btn');
statusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let i = parseInt(btn.dataset.index);
    if (btn.textContent === "Tersedia") {
      btn.textContent = "Kosong";
      btn.classList.add("kosong");
      updateStatus(i, "Kosong");
    } else {
      btn.textContent = "Tersedia";
      btn.classList.remove("kosong");
      updateStatus(i, "Tersedia");
    }
  });
});
