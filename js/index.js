toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-modal')
})

// show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// hide Modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})
