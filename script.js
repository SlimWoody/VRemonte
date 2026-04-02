    // Модальное окно логика
    const modal = document.getElementById('callbackModal');
    const openBtns = document.querySelectorAll('[id^="openModalBtn"]');
    const closeBtn = document.getElementById('closeModal');

    function openModal() {
        modal.style.display = 'flex';
    }
    function closeModalFunc() {
        modal.style.display = 'none';
    }
    openBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    closeBtn.addEventListener('click', closeModalFunc);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunc();
    });

    // Обработка формы (демо)
    const form = document.getElementById('modalForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Заявка принята! Мы свяжемся с вами в ближайшее время по номеру: ' + form.querySelector('input[type="tel"]').value);
        closeModalFunc();
        form.reset();
    });