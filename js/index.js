open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


// show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

