// Obtener elementos del DOM
const brightnessRange = document.getElementById('brightness-range');
const brightnessDecreaseButton = document.getElementById('brightness-decrease');
const brightnessIncreaseButton = document.getElementById('brightness-increase');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const fontSizeDecreaseButton = document.getElementById('font-size-decrease');
const fontSizeIncreaseButton = document.getElementById('font-size-increase');

// kkk
// Tamaño de fuente inicial
let fontSize = 16;

// Actualizar el tamaño de fuente
function updateFontSize() {
    document.body.style.fontSize = `${fontSize}px`;
  }
// Ajustar el brillo
function setBrightness(value) {
  document.documentElement.style.filter = `brightness(${value}%)`;
}


brightnessDecreaseButton.addEventListener('click', () => {
  let brightnessValue = parseInt(brightnessRange.value);
  brightnessValue = Math.max(brightnessValue - 10, 0);
  brightnessRange.value = brightnessValue;
  setBrightness(brightnessValue);
});

brightnessIncreaseButton.addEventListener('click', () => {
  let brightnessValue = parseInt(brightnessRange.value);
  brightnessValue = Math.min(brightnessValue + 10, 100);
  brightnessRange.value = brightnessValue;
  setBrightness(brightnessValue);
});

// Cambiar a modo oscuro
darkModeToggle.addEventListener('click', () => {
 

  document.body.classList.toggle('dark-mode');
  

  const elementos = document.querySelectorAll('.sticky-top');
  const etiquetaa = document.querySelectorAll('a')
  const IMGtienda = document.querySelectorAll('.imgTIENDA')
  const IMGtienda1 = document.querySelectorAll('.logo2')
  const title = document.querySelectorAll('.title')


// Alternar la clase "dark-mode" en cada elemento
elementos.forEach(elemento => {
  if (elemento.classList.contains('dark-mode')) {
    elemento.classList.remove('dark-mode');
  } else {
    elemento.classList.add('dark-mode');
  }
});

etiquetaa.forEach(etiquetaa => {
  if (etiquetaa.classList.contains('dark-mode')) {
    etiquetaa.classList.remove('dark-mode');
  } else {
    etiquetaa.classList.add('dark-mode');
  }
});

IMGtienda.forEach(IMGtienda => {
  if (IMGtienda.classList.contains('logo')) {
    IMGtienda.classList.remove('logo');
  } else {
    IMGtienda.classList.add('logo');
  }
});
IMGtienda1.forEach(IMGtienda1 => {
  if (IMGtienda1.classList.contains('logo1')) {
    IMGtienda1.classList.remove('logo1');
  } else {
    IMGtienda1.classList.add('logo1');
  }
});

title.forEach(title => {
  if (title.classList.contains('title-b')) {
    title.classList.remove('title-b');
  } else {
    title.classList.add('title-b');
  }
});

});

// Botón de disminución de tamaño de fuente
fontSizeDecreaseButton.addEventListener('click', () => {
  if (fontSize > 16) {
    fontSize -= 2;
    updateFontSize();
  }
  });
  // Botón de aumento de tamaño de fuente
  fontSizeIncreaseButton.addEventListener('click', () => {
    if (fontSize < 30) {
      fontSize += 2;
      updateFontSize();
    }
  });
  
  // Actualizar el tamaño de fuente inicial
updateFontSize();