function toggleMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('toggleButton');
    menu.classList.toggle('show');
    button.classList.toggle('open');
    button.innerHTML = menu.classList.contains('show') ? '✕' : '☰';
  }