document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <span class="close">&times;</span>
      <img class="modal-content" src="${image.src}" alt="${image.alt}">
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});
