// Открытие по клику и закрытие по кнопке/фону/ESC
document.addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (tile) {
    const id = tile.getAttribute('data-modal');
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('open');
      // фокус на кнопку закрытия для доступности
      const closeBtn = modal.querySelector('[data-close]');
      closeBtn && closeBtn.focus();
    }
  }

  if (e.target.matches('[data-close]')) {
    e.target.closest('.modal')?.classList.remove('open');
  }

  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});


