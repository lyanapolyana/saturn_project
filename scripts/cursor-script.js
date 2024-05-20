//Курсор 1 (рабочий по всему сайту, но нет лимита)

// document.addEventListener('mousemove', function(e) {
//     setTimeout(function() {
//         const comet = document.createElement('div');
//         comet.className = 'comet';
//         comet.style.left = e.pageX + 'px';
//         comet.style.top = e.pageY + 'px';
//         document.body.appendChild(comet);

//         setTimeout(function() {
//         comet.remove();
//         }, 220);
//     }, 100);
//   });



//Курсор 2 (нерабочий по всему сайту, но есть лимит. (через массив))

// const trailLimit = 1
// let queue = []

// for (let i = 0; i < trailLimit; i++) {
//     const element = document.createElement('div')
//     element.classList.add('trail')
//     // element.style.transition = `all ${(i + 1) / 100}s ease`
//     document.body.appendChild(element)
// }

// const trailList = document.getElementsByClassName('trail')

// document.addEventListener('mousemove', e => {
//     const x = e.clientX, y = e.clientY
//     if (queue.length === trailLimit) {
//         queue = []
//     }
//     queue.push({ x, y})

//     for (let i = 0; i < queue.length; i++) {
//         trailList[i].style.top = queue[i].y + 'px'
//         trailList[i].style.left = queue[i].x + 'px'     
//     }
// })



// GPT

// document.addEventListener('mousemove', function (e) {
//     var cursor = document.querySelector('.custom-cursor');
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });

// var hoverElements = document.querySelectorAll('.btn-orange');
// hoverElements.forEach(function (element) {
//     element.addEventListener('mouseenter', function () {
//         var cursor = document.querySelector('.custom-cursor');
//         cursor.style.width = '30px';
//         cursor.style.height = '30px';
//         cursor.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
//     });

//     element.addEventListener('mouseleave', function () {
//         var cursor = document.querySelector('.custom-cursor');
//         cursor.style.width = '50px';
//         cursor.style.height = '50px';
//         cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     });
// });



// Улучшенный код всех кодов

// Функция для обновления позиции курсора
function updateCursorPosition(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}

// маусэнтер
function handleMouseEnter() {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.width = '120px';
    cursor.style.height = '120px';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    cursor.style.border = 'none'
}

// мауслив
function handleMouseLeave() {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.border = 'none'
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

// .cursor-hover
function handleHoverElements(event) {
    var target = event.target;
    if (target.classList.contains('cursor-hover')) {
        handleMouseEnter();
    }
}

function handleHoverElementsLeave(event) {
    var target = event.target;
    if (target.classList.contains('cursor-hover')) {
        handleMouseLeave();
    }
}

document.addEventListener('mousemove', updateCursorPosition);
document.addEventListener('mouseover', handleHoverElements);
document.addEventListener('mouseout', handleHoverElementsLeave);

// Плавный курсор
function animateCursor(cursor, e) {
    var start = performance.now();
    var duration = 800; // продолжительность анимации в миллисекундах

    function step(timestamp) {
        var progress = timestamp - start;
        var deltaX = e.pageX - parseFloat(cursor.style.left);
        var deltaY = e.pageY - parseFloat(cursor.style.top);

        if (progress < duration) {
            cursor.style.left = parseFloat(cursor.style.left) + (deltaX / duration) * progress + 'px';
            cursor.style.top = parseFloat(cursor.style.top) + (deltaY / duration) * progress + 'px';
            requestAnimationFrame(step);
        } else {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        }
    }

    requestAnimationFrame(step);
}

// Обработчик события движения курсора
function handleMouseMove(e) {
    var cursor = document.querySelector('.custom-cursor');
    animateCursor(cursor, e);
}

// Делегирование события движения курсора
document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.custom-cursor');
    updateCursorPosition(cursor, e);
    handleMouseMove(e);
});