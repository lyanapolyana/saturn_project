const sliderLine = document.querySelector('.properties-gallery')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

let offset = 0

const next = function () {
    offset += 771
    if (offset >= 2289) {
        offset = 0
        sliderLine.style.right = 0
    } else {
        sliderLine.style.right = offset + 'px'
    }
}

nextBtn.onclick = next

prevBtn.onclick = function () {
    offset -= 771
    if (offset < 0) {
        offset = 1542
        sliderLine.style.right = offset + 'px'
    } else {
        sliderLine.style.right = offset + 'px'
    }
}

//setInterval(next, 10000)

document.getElementById("open-pop-up-btn").addEventListener("click", function () {
    document.getElementById("popUp").classList.add("open")
})

document.getElementById("close-pop-up-btn").addEventListener("click", function () {
    document.getElementById("popUp").classList.remove("open")
})

//Закрыть на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("popUp").classList.remove("open")
    }
})

//Закрыть по клику на пустую область
document.querySelector("#popUp .pop-up-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
})
document.getElementById("popUp").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})


// Переход на Наши спутники
var buttons = document.querySelectorAll('.btn-go-to-sat');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        window.location.href = 'satellites.html';
    });
});

//Переход на Рейю
// var buttons = document.querySelectorAll('.btn-go-to-reya');
// buttons.forEach(function (button) {
//     button.addEventListener('click', function () {
//         window.location.href = '../pages/reya.html';
//     });
// });
