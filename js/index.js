toggle = document.getElementById('toggle')
open = document.getElementById('open')
close = document.getElementById('close')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-li')
})
