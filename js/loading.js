loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 90

int = setInterval(blurring, )

function blurring () {
    load++
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"

}
