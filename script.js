// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Typing Animation
const typingText = [
    "Full Stack Web Developer",
    "AI Enthusiast",
    "Computer Science Student",
    "Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < typingText[textIndex].length) {

        typingElement.textContent += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1800);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();



// =========================
// Dark Mode
// =========================

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});



// =========================
// Image Slider
// =========================

const slider = document.getElementById("slider");

const images = [

    "images/project1.jpg",

    "images/project2.jpg",

    "images/project3.jpg"

];

let currentImage = 0;

function changeImage() {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    slider.src = images[currentImage];

}

setInterval(changeImage, 3000);



// =========================
// To Do List
// =========================

const addTask = document.getElementById("addTask");

const taskInput = document.getElementById("task");

const list = document.getElementById("list");

addTask.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

    li.textContent = task;

    li.style.cursor = "pointer";

    li.addEventListener("click", () => {

        li.remove();

    });

    list.appendChild(li);

    taskInput.value = "";

});



// =========================
// Contact Form Validation
// =========================

const form = document.getElementById("contactForm");

const error = document.getElementById("error");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    error.style.color = "red";

    if (name.length < 3) {

        error.textContent = "Name should contain at least 3 characters.";

        return;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        error.textContent = "Please enter a valid email address.";

        return;

    }

    if (message.length < 10) {

        error.textContent = "Message should contain at least 10 characters.";

        return;

    }

    error.style.color = "green";

    error.textContent = "Message sent successfully!";

    form.reset();

});



// =========================
// Scroll To Top
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =========================
// Skill Card Hover Effect
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});



// =========================
// Smooth Navigation
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



// =========================
// Reveal Animation
// =========================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



// =========================
// Current Year
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Krishna Prasad Kurmi. All Rights Reserved.`;

}



// =========================
// Console Message
// =========================

console.log("Portfolio Loaded Successfully 🚀");