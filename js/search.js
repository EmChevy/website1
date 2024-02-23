btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListner('click', () => {
    search.classList.toggle('active')
})
