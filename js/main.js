/*================================================
    Up to Top Buuton
=================================================*/
const upToTop = document.querySelector(".btnUp");

function scrollToTop() {
    // Scroll to top logic
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

upToTop.addEventListener("click", scrollToTop)

/*================================================
    Loader
=================================================*/
let loader = document.querySelector(".loader");
window.onload = function() {
    loader.style.display = "none";
}

/* ===========================================================
    Toggle Navbar Links
==========================================================*/
let toggleBtn = document.querySelector(".toggle");
let toggleIcon = document.querySelector(".toggle i");
let navLinks = document.querySelector(".links-mobile");
let nav = document.querySelector(".nav");

toggleBtn.onclick = function() {
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
    navLinks.classList.toggle("collapse");
}

/* ===========================================================
    Make random background
==========================================================*/
let heroImg = document.querySelector('.hero');
let arrImgs = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let currentImgIndex = 0;

setInterval(function() {
    heroImg.style.backgroundImage = `linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 60%)), url(img/bg/${arrImgs[currentImgIndex]})`;
    currentImgIndex = (currentImgIndex + 1) % arrImgs.length; // Move to the next image, loop back to the start
}, 4000);

/* ===========================================================
    Open And Close Video Popup Menu
==========================================================*/
// let popupVideo = document.querySelector('.video-popup');
// let popupCloseIcon = document.querySelector('.video-popup-close');
// let videoIcon = document.querySelector('.about-image .video-icon');

// function click(btnClick, className, operation, access) {
//     if (operation == "remove") {
//         btnClick.onclick = function() {
//             access.classList.remove(`${className}`);
//         }
//     } else if (operation == "add") {
//         btnClick.onclick = function() {
//             access.classList.add(`${className}`);
//         }
//     } else {
//         btnClick.onclick = function() {
//             access.classList.toggle(`${className}`);
//         }
//     }
// }
// click(videoIcon, "open", "add", popupVideo);
// click(popupCloseIcon, "open", "remove", popupVideo);

/* ===========================================================
    Color Switcher
==========================================================*/
// let btns = document.querySelectorAll('.theme-buttons');
// let root = document.querySelector(':root');

// // Show the switcher color div
// document.querySelector('.switcher-btn').onclick = () => {
//     document.querySelector('.color-switcher').classList.toggle('active');
// };

// btns.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         // remove All active class
//         btns.forEach((item) => {
//             item.classList.remove("active");
//         });
//         // Add Active Class To current Element
//         e.currentTarget.classList.add("active");
//         // Add color to Local Storage
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);
//         // change main color
//         root.style.setProperty('--mainColor', e.currentTarget.dataset.color);
//     });
// });

/*=============== Check Local Storage ===============*/
// if (window.localStorage.getItem("color")) {
//     // [1] Add Main color to page
//     root.style.setProperty('--mainColor', window.localStorage.getItem("color"));
//     // [2] Remove active class From All items
//     btns.forEach((item) => {
//         item.classList.remove("active");
//     });
//     // [3] Add active class to current color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

/* ===========================================================
change background nav when scroll  && Start Counter when scroll
==========================================================*/
// let navbar = document.querySelector('.nav');

// let nums = document.querySelectorAll(".num");
// let numsSection = document.querySelector(".achivement");
// let started = false;

// window.onscroll = () => {
//     if (window.scrollY > 100) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
//     // Start Counter when scroll
//     if (window.scrollY >= numsSection.offsetTop - 400) {
//         if (!started) {
//             nums.forEach((num) => startCount(num));
//         }
//         started = true;
//     }

//     //========================== appear up To Top Button =======================
//     if (window.scrollY > 300) {
//         upToTop.style.opacity = 1;
//     } else {
//         upToTop.style.opacity = 0;
//     }

// };



// start count numbers 
function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    }, 4000 / goal);
}


/*==================================
Gallery
*/
// var images = document.querySelectorAll(".gallery-images .image img");

// images.forEach(image => image.addEventListener('click', function() {
//     image.classList.toggle("active");
// }));




/*========================================================
    Start contact form
==========================================================*/
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("UI4t6tfM4QrrwihaK");
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const serviceID = "service_nhl9lbn";
        const templateID = "template_vtkf95p";

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // Show success feedback
                const submitBtn = this.querySelector('.contact-submit-btn');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.backgroundColor = '#4CAF50';

                // Reset form
                this.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = '<span class="btn-content"><i class="fas fa-paper-plane"></i> Send Message</span>';
                    submitBtn.style.backgroundColor = '#ff3333';
                }, 3000);
            })
            .catch(error => {
                console.error('EmailJS Error:', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});


/*========================================================
    start Quran form
==========================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.quran-slide');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Start the slider
    showSlide(currentSlide);
    startAutoSlide();

    // Pause on hover
    const sliderContainer = document.querySelector('.quran-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
});
/*========================================================
    End Quran form
==========================================================*/
