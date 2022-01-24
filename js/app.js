let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    console.log('click')
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('click')
    
})

const REVIEW = [
    {"reviewer": "Guy Hawkins",
    "role": "Software Engineer",
    "review": "I am very greatful that I chose to join fitness program at co-op gym. Professional trainers, useful equipments and strong community.",
    "img": "images/reviewer.jpg"},

    {"reviewer": "Bruce Wayne",
     "role": "Doctor at Sakura",
     "review": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
     "img": "images/bruce.jpg"},

    {"reviewer": "Raymond Htut",
     "role": "Computer Science Student",
     "review": "Best training and trainers I have ever had in my life!.Super friendly atmosphere,Every session is different and fun",
     "img": "images/raymond.jpg"},

    {"reviewer": "Angela Chole",
     "role": "CEO of teams.",
     "review": "Love this place! Come back every year and can’t wait to come again!!",
     "img": "images/angela.jpg"
    }
]

let swipeBtns = document.getElementsByClassName('swipe-btn')
let reviewCard = document.querySelector('.review-card')

for (let i=0; i<swipeBtns.length; i++) {
    swipeBtns[i].addEventListener('click', (e) => {
        e.preventDefault()

        for (let i=0; i<swipeBtns.length; i++) {
            swipeBtns[i].classList.remove('active')
        }
        swipeBtns[i].classList.add('active')

        review = `
        <div class="reviewer flexbox">
            <div class="left">
                <img src="icons/stars.svg" alt="">
                <div class="reviewer-name">
                    ${REVIEW[i].reviewer}
                </div>
                <div class="reviewer-role">
                    ${REVIEW[i].role}
                </div>
            </div>
            <div class="right review-img">
                <img src="${REVIEW[i].img}" alt="">
            </div>
        </div>  
        <div class="review">
            ${REVIEW[i].review}
        </div>
        `

        console.log(review)

        reviewCard.innerHTML = review
    })
}