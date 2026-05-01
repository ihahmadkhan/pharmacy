const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let current = 0;

    // Clone the first slide and add it to the end
    const firstClone = slides[0].cloneNode(true);
    firstClone.id = 'clone-1';
    slider.appendChild(firstClone);

    setInterval(() => {
        current++;
        slider.scrollTo({
            left: slider.clientWidth * current,
            behavior: 'smooth'
        });

        // When clone (fake slide 1) is reached, silently jump to real slide 1
        if (current === slides.length) {
            setTimeout(() => {
                slider.scrollTo({ left: 0, behavior: 'instant' });
                current = 0;
            }, 500); // wait for smooth scroll to finish, then reset
        }
    }, 5000);

    // code for animation
    const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the div is visible

// Tell the observer to watch all elements with the 'reveal' class
const targetElements = document.querySelectorAll('.reveal');
targetElements.forEach((el) => observer.observe(el));
// code for animation ends here