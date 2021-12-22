function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click' , ()=> {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function  clearActiveClasses() {
   slides.forEach((slide) => {
    slide.classList.remove('active')
   })
}

}

slidesPlugin(0)




// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function(event) {
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth"
//             block: "start"
//         })
//     })
// }



