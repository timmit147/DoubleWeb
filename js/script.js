const gallery = document.querySelectorAll('.image-gallery > img');
let amounth = gallery.length;
let currentIndex = 0;

gallery.forEach((figure, index) => {
    figure.addEventListener('click', () => {
        currentIndex = index;
        showFullImage();
    });
});

const fullImageView = document.querySelector('.full-image');
const nextButton = document.querySelector('.full-image .controls img[alt="Volgende"]');
const prevButton = document.querySelector('.full-image .controls img[alt="Vorige"]');
let fullImage = document.querySelector('.full-image > img');

fullImageView.addEventListener('click', () => {
    fullImageView.classList.toggle("hide");
});

nextButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    currentIndex = (currentIndex + 1) % amounth;
    showFullImage();
});

prevButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    currentIndex = (currentIndex - 1 + amounth) % amounth;
    showFullImage();
});

function showFullImage() {
    const fullImageUrl = gallery[currentIndex].getAttribute('data-full-image');
    const altText = gallery[currentIndex].getAttribute('alt');
    document.querySelector('.full-image').classList.remove("hide");
    document.querySelector('.full-image p').textContent = (currentIndex + 1) + ' / ' + amounth;
    fullImage.setAttribute('src', fullImageUrl);
    fullImage.setAttribute('alt', altText);
}

document.addEventListener('keydown', (e) => {
    if (fullImageView.classList.contains('hide')) {
        return; 
    }

    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % amounth;
        showFullImage();
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + amounth) % amounth;
        showFullImage();
    } else if (e.key === 'Escape') {
        fullImageView.classList.add("hide");
    }
});


const nieuwsbriefLink = document.querySelector('.nieuwsbrief-link');
const nieuwsbrief = document.querySelector('.nieuwsbrief');

nieuwsbriefLink.addEventListener('click', (event) => {
    event.preventDefault();
    nieuwsbrief.classList.toggle('hide');
});

const closeBtn = nieuwsbrief.querySelector('.close');
closeBtn.addEventListener('click', () => {
    nieuwsbrief.classList.add('hide');
})



const form = document.querySelector('.nieuwsbrief form');
const message = document.createElement('div');
form.appendChild(message);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    message.innerHTML = '';

    if (validateForm()) {
        const email = document.getElementById('email').value;
        message.innerHTML = `Bedankt! Je formulier is succesvol verzonden naar ${email}.`;
        form.reset();
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
        displayMessage('Vul alle verplichte velden in.');
        return false;
    }

    return true;
}

function displayMessage(msg) {
    message.innerHTML = `<p style="color: red;">${msg}</p>`;
}


    const eventsLink = document.querySelector('.events-link');
    const asideElement = document.querySelector('aside');
    const closeElement = document.querySelector('.close');
  
    eventsLink.addEventListener('click', function (event) {
      event.preventDefault(); 
  
      asideElement.classList.toggle('hide');
    });
  
    closeElement.addEventListener('click', function (event) {
      event.preventDefault(); 
  
      asideElement.classList.toggle('hide');
    });
  