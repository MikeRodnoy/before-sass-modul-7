
  const refs = {
    openModalBtn: document.querySelector('.data-modal-open'),
    closeModalBtn: document.querySelector('.data-modal-close'),
    modal: document.querySelector('.data-modal'),
};
  
// console.log(refs.modal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  console.log('clicked');
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  