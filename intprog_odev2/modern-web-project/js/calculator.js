// Gerekli elementleri seçiyoruz
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#calculator button");

// Hesap makinesi işlemleri
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = ""; // Temizle
    } else if (value === "=") {
      try {
        display.value = eval(display.value); // İşlemi değerlendir
      } catch {
        display.value = "Hata!"; // Hata durumunda mesaj göster
      }
    } else {
      display.value += value; // Ekle
    }
  });
});