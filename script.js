


// button links
    const goToPage = page => window.location.href = page + ".html"
    const trails = document.querySelector(".explore")
    const skals = document.querySelector(".skals-link")
    const flensborg = document.querySelector(".flensborg-link")
    const borup = document.querySelector(".borup-link")
    
if (trails) {
    trails.addEventListener('click', () => goToPage('trails'))
}
if (skals) {
    skals.addEventListener('click', () => goToPage('skals'))
}
if (flensborg) {
    flensborg.addEventListener('click', () => goToPage('flensborg'))
}
if (borup) {
    borup.addEventListener('click', () => goToPage('borup'))
}






// fade in effect for text and images
const fadeInElementsX = document.querySelectorAll('.fade-in-effect-x')
const fadeInElementsY = document.querySelectorAll('.fade-in-effect-y')
const fadeInElements = document.querySelectorAll('.fade-in-effect')

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
)   {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        }   else {
            entry.target.classList.add('visible')
            appearOnScroll.unobserve(entry.target)
        }
    })
})

fadeInElementsX.forEach(fader => {
    appearOnScroll.observe(fader)
})

fadeInElementsY.forEach(fader => {
    appearOnScroll.observe(fader)
})
fadeInElements.forEach(fader => {
    appearOnScroll.observe(fader)
})

window.addEventListener('load', function() {
    console.log("Page loaded!");
    document.body.classList.add("visible");
});
