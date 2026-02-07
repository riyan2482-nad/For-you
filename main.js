// Ambil semua huruf
const spans = document.querySelectorAll('.greetings span');

let index = 0;

// Jalanin kalau ada huruf
if (spans.length > 0) {
  setInterval(() => {

    // Matikan semua
    spans.forEach(span => {
      span.classList.remove('active');
    });

    // Nyalakan satu
    spans[index].classList.add('active');

    // Pindah
    index = (index + 1) % spans.length;

  }, 250); // Kecepatan (ms)
}