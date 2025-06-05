document.addEventListener('DOMContentLoaded', function() {
    // Show popup when page loads
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopup');
    const popupForm = document.getElementById('popupForm');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Make sure closeBtn exists before adding event listener
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    } else {
        console.error("Close button element not found");
    }
    
    // Toggle mobile menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburgerBtn && mobileMenu && !hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Prevent form submission (just for demo)
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
            if (overlay) overlay.style.display = 'none';
        });
    }
    
    // Prevent clicks on popup from closing overlay
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Close popup when clicking on overlay (outside of popup)
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    }
});
/*************************************************************** */

    // Get the modal
    var pkModal = document.getElementById("parthKionaFormModal");
    var pkModalTitle = document.getElementById("pkModalTitle");

    // Open modal function
    function openParthKionaModal(title) {
        pkModal.style.display = "block";
        pkModalTitle.textContent = title;
    }

    // Close modal function
    function closeParthKionaModal() {
        pkModal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == pkModal) {
            closeParthKionaModal();
        }
    }

    // Form submission
    document.getElementById("pkContactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your submission! We will contact you soon.");
        closeParthKionaModal();
    });
    /********************************************************************************/
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btna');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const images = [
        "img/gallery_img1.jpg",
        "img/gallery_img2.jpg",
        "img/gallery_img3.jpg",
        "img/gallery_img4.jpg",
        "img/gallery_img5.jpg"
    ];

    // Open lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            showImage(currentIndex);
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    // Close on click outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Navigate to previous image
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Navigate to next image
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Show image based on index
    function showImage(index) {
        lightboxImg.src = images[index];
        lightboxImg.alt = galleryItems[index].querySelector('img').alt;
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });

    window.addEventListener('scroll', function () {
        let scrollY = window.scrollY;
        let hero = document.querySelector('.hero');
        let heroBefore = document.querySelector('.hero::before');
    
        // Adjust background zoom based on scroll
        let zoomLevel = 110 + (scrollY / 10); // Adjust the zoom speed
        heroBefore.style.backgroundSize = `${zoomLevel}% ${zoomLevel}%`;
    });