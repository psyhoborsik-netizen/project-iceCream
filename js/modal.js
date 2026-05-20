(() => {
  const openBtn = document.querySelector("[data-modal-open-how-made]");
  const modal = document.querySelector("[data-modal-how-made]");
  const closeBtns = document.querySelectorAll("[data-modal-close-how-made]");

  openBtn.addEventListener("click", toggleModal);
  closeBtns.forEach(btn => btn.addEventListener("click", toggleModal));

  function toggleModal() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  console.log('Кнопка открытия:', openMenuBtn);
  console.log('Кнопка закрытия:', closeMenuBtn);
  console.log('Само меню:', menu);

  if (!openMenuBtn || !closeMenuBtn || !menu) {
    console.error('Ошибка: Один или несколько элементов не найдены в HTML! Проверь дата-атрибуты.');
    return;
  }

  function toggleMenu() {
    console.log('Клик сработал! Переключаю класс is-open');
    menu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buyNow]"),
    closeModalBtn: document.querySelector("[data-modal-close-buyNow]"),
    modal: document.querySelector("[data-modal-buyNow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtns = document.querySelectorAll("[data-modal-close]");

  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-open");
      const modal = document.getElementById(modalId);
      if (modal) toggleModal(modal);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("[data-modal]");
      if (modal) toggleModal(modal);
    });
  });

  function toggleModal(modal) {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
