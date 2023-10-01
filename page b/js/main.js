document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".list-images img");
  const indexItems = document.querySelectorAll(".index-item");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image) => {
      image.style.transform = `translateX(-${index * 100}%)`;
    });
    indexItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  document.querySelector(".btn-left").addEventListener("click", prevImage);
  document.querySelector(".btn-right").addEventListener("click", nextImage);

  indexItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      currentIndex = i;
      showImage(currentIndex);
    });
  });
});
