// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Typing effect
const text = ["Web Developer", "Coder", "Tech Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    
    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.getElementById("typing").innerHTML = current.substring(0, j);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

type();

// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light-mode");
};

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent 🚀");
});
