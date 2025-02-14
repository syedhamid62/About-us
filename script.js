new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   // Responsive breakpoints
breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
  })

// .........
// Toggle FAQ answers
function toggleFAQ(element) {
    let parent = element.parentElement;
    parent.classList.toggle('active');
}

// Filter FAQ items based on category
function filterFAQ(category) {
    let faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.style.display = item.classList.contains(category) ? "block" : "none";
    });

    // Update active button
    document.querySelectorAll('.faq-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Show all by default
document.addEventListener("DOMContentLoaded", () => {
    filterFAQ('authentication'); // Default category shown
});
