const wrapper = document.getElementById('star-wrapper');
const stars = wrapper.querySelectorAll('.fa-star');
const rating = document.getElementById("rating-value");
let active = -1;

if (stars.length > 0) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("click", () => {
            active = i + 1;
            rating.innerText = i+1
        });

        stars[i].addEventListener("mouseenter", (e) => {
            const ratingVal = e.target.dataset.ratingValue;
          fill(ratingVal)
        });

        stars[i].addEventListener("mouseleave", () => {
            fill(active)
        });
    }
}

function fill(ratingVal) {
    for (let i = 0; i < 5; i++) {
        if (i < ratingVal) {
            stars[i].classList.remove("fa-regular");
            stars[i].classList.add("fa");
        } else {
            stars[i].classList.add("fa-regular");
            stars[i].classList.remove("fa");
        }
    }
}


