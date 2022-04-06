let slides = [];
for (let each of document.getElementsByClassName('slides')) {
    slides.push(each);
}
for (let each of slides) {
    num = slides.indexOf(each);
    num += 1;
    each.querySelector('.number-text').innerText = num + '/4';
}
for (let each of slides.slice(1, slides.length)) {
    each.style.display = 'none';
}
let next_counter = 0;
let prev_counter = 0;

let i = 0;

const next_button = document.getElementById('next');
const prev_button = document.getElementById('previous');
const first_dot = document.getElementById('dot1');
const second_dot = document.getElementById('dot2');
const third_dot = document.getElementById('dot3');
const fourth_dot = document.getElementById('dot4');


function goToNext() {
    if (i < slides.length - 1) {
        i += 1
    } else {
        i = 0
    }      
}

function goToPrev() {
    if (i == (slides.length - slides.length)) {
        i = slides.length - 1
    } else {
        i -= 1
    }
}

next_button.addEventListener('click', () => {
    next_counter += 1;
    slides[i].style.display = 'none';
    goToNext();
    slides[i].style.display = 'block';
})

prev_button.addEventListener('click', () => {
    prev_counter -= 1;
    slides[i].style.display = 'none';
    goToPrev();
    slides[i].style.display = 'block';
})

first_dot.addEventListener('click', () => {
    i = 0;
    next_counter += 1;
    prev_counter -= 1;
    for (let each of slides) {
        if (each.style.display = 'block') {
            each.style.display = 'none';
        }
    }
    slides[0].style.display = 'block';
})

second_dot.addEventListener('click', () => {
    i = 1;
    next_counter += 1;
    prev_counter -= 1;
    for (let each of slides) {
        if (each.style.display = 'block') {
            each.style.display = 'none';
        }
    }
    slides[1].style.display = 'block';
})

third_dot.addEventListener('click', () => {
    i = 2;
    next_counter += 1;
    prev_counter -= 1;
    for (let each of slides) {
        if (each.style.display = 'block') {
            each.style.display = 'none';
        }
    }
    slides[2].style.display = 'block';
})

fourth_dot.addEventListener('click', () => {
    i = 3;
    next_counter += 1;
    prev_counter -= 1;
    for (let each of slides) {
        if (each.style.display = 'block') {
            each.style.display = 'none';
        }
    }
    slides[3].style.display = 'block';
})

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        next_counter += 1
        slides[i].style.display = 'none';
        goToNext();
        slides[i].style.display = 'block'; 
    }
    if (event.key === 'ArrowLeft') {
        prev_counter -= 1;
        slides[i].style.display = 'none';
        goToPrev();
        slides[i].style.display = 'block';
    }
    if (event.code === 'Space') {
        next_counter += 1;
    }
})

function automaticFunction() {
    if (next_counter == 0 && prev_counter == 0) {
        if (i < slides.length - 1) {
            slides[i].style.display = 'none';
            i += 1;
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
            i = 0;
            slides[i].style.display = 'block';
        }
    }
}

function automaticSlides() {
    setInterval(automaticFunction, 5000);
}
automaticSlides();




