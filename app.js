// Sample flashcards (user can extend this later)
const flashcards = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Square root of 81?", answer: "9" },
  { question: "Formula for area of a circle?", answer: "πr²" },
  { question: "Probability of getting head on a coin?", answer: "1/2" }
];

let currentIndex = 0;
let isFlipped = false;

const flashcard = document.getElementById("flashcard");
const front = flashcard.querySelector(".front");
const back = flashcard.querySelector(".back");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");

// Load flashcard
function loadFlashcard(index) {
  front.textContent = flashcards[index].question;
  back.textContent = flashcards[index].answer;
  flashcard.style.transform = "rotateY(0deg)";
  isFlipped = false;
}

loadFlashcard(currentIndex);

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  loadFlashcard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadFlashcard(currentIndex);
});

// Flip card
flipBtn.addEventListener("click", () => {
  if (!isFlipped) {
    flashcard.style.transform = "rotateY(180deg)";
    isFlipped = true;
  } else {
    flashcard.style.transform = "rotateY(0deg)";
    isFlipped = false;
  }
});
