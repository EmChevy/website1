open = document.getElementById('open')
model = document.getElementById('model')
close = document.getElementById('close')


// show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-model')
})

// hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-model')
})

// hide Modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-model')
    }
})