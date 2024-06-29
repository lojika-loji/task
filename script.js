let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots[i].classList.remove("active");
  });
  dots[currentIndex].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
