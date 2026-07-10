// Type
// const text = "Hisyam Santoso";
// let index = 0;
// let direction = 1;
// const typingTextElement = document.getElementById('auto-type');

// function typeText() {
//     typingTextElement.textContent = text.substring(0, index);

//     if (index === text.length) {
//         direction = -1;
//     } else if (index === 0) {
//         direction = 1;
//     }

//     index += direction;
//     setTimeout(typeText, direction === 1 ? 100 : 300);
// }

// // Mulai animasi ketik teks
// typeText();

const dynamicText = document.querySelector('#auto-type');
const words = ['Hisyam Santoso', 'a Student', 'in College'];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    if(dynamicText) {
        dynamicText.textContent = currentChar || '\u200B';
        dynamicText.classList.add('stop-blinking');
    }

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        if(dynamicText) dynamicText.classList.remove('stop-blinking');
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
};

typeEffect();
