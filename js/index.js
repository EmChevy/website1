toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-modal')
})

// open = document.getElementById('open')
// modal = document.getElementById('modal')
// close = document.getElementById('close')

// // show Modal
// open.addEventListener('click', () => {
//     modal.classList.add('show')
// })

// // hide Modal
// close.addEventListener('click', () => {
//     modal.classList.remove('show')
// })

// // hide Modal on outside click
// window.addEventListener('click', (e) => {
//     if (e.target == modal) {
//         modal.classList.remove('show')
//     }
// })
