document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById('music');
    const backBtn = document.getElementById('back');
    const photos = document.querySelectorAll('.photo');
    let currentPhoto = 0;
  
    // --- Musik otomatis ---
    const canPlay = sessionStorage.getItem('playMusic');
    if (canPlay === 'true') {
      music.play().catch(() => {
        console.log("Autoplay gagal, akan coba lagi setelah interaksi.");
      });
      startBalloons();
      sessionStorage.removeItem('playMusic');
    } else {
      // Kalau langsung buka halaman ini, tetap munculkan balon
      startBalloons();
    }
  
    // --- Slideshow Foto ---
    if (photos.length > 1) {
      setInterval(() => {
        photos[currentPhoto].classList.remove('active');
        currentPhoto = (currentPhoto + 1) % photos.length;
        photos[currentPhoto].classList.add('active');
      }, 3000); // ganti setiap 3 detik
    }
  
    // --- Tombol back ---
    backBtn.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  });
  
  
  // --- Efek Balon Terbang ---
  function startBalloons() {
    setInterval(createBalloon, 600);
  }
  
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.innerHTML = Math.random() > 0.5 ? '💖' : '🎈';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.body.appendChild(balloon);
  
    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }
  