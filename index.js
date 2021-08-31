let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        next = items[0]
    }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})



const nextBtn = document.querySelector('#next-button')
const prevtBtn = document.querySelector('#prev-button')

// manage click next/back at once
prevtBtn.addEventListener('click', function() {
    $('#carousel1').carousel("prev")
    $('#carousel2').carousel("prev")
    $('#carousel3').carousel("prev")
})
nextBtn.addEventListener('click', function() {
    $('#carousel1').carousel("next")
    $('#carousel2').carousel("next")
    $('#carousel3').carousel("next")
})


const carousel1 = document.querySelector('#carousel1')
const carousel2 = document.querySelector('#carousel2')
const carousel3 = document.querySelector('#carousel3') 

const setIntervalCarousel1 = new bootstrap.Carousel(carousel1, {
    interval: 0
})
const setIntervalCarousel2 = new bootstrap.Carousel(carousel2, {
    interval: 0
})
const setIntervalCarousel3 = new bootstrap.Carousel(carousel3, {
    interval: 0
})



