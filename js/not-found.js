document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let count = 9;
    const countElement = document.querySelector('.count-down');

    if (countElement) {
      countElement.textContent = count;

      const timer = setInterval(() => {
        count--;
        countElement.textContent = count;

        if (count <= 0) {
          clearInterval(timer);
          window.history.back();
        }
      }, 1000);
    }
  }, 1000);
});