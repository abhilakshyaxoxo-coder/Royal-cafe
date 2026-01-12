/**
 * Royal Cafe - Interactivity Script
 */

// 1. Smooth Scroll Function
// Triggered by the "Explore Menu" button in your Hero section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Dynamic Menu Data
// This populates your 'menu-container' automatically
const menuData = [
    { title: "Imperial Espresso", desc: "Pure, intense, gold-crema shot." },
    { title: "Royal Latte", desc: "Velvety steamed milk with signature roast." },
    { title: "Golden Croissant", desc: "Flaky, buttery, baked fresh hourly." },
    { title: "Midnight Brew", desc: "24-hour cold steep for a smooth finish." },
    { title: "Velvet Flat White", desc: "Micro-foam over a double ristretto." },
    { title: "Marble Macchiato", desc: "Vanilla-infused with a caramel drizzle." }
];

function populateMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;

    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        container.appendChild(menuItem);
    });
}

// 3. Save User Preference
// Logic for the input field in the reviews section
function savePreference() {
    const input = document.getElementById('user-preference');
    const msg = document.getElementById('response-msg');
    
    if (input.value.trim() !== "") {
        const choice = input.value;
        msg.textContent = `Excellent choice! We'll keep some ${choice} ready for you.`;
        msg.style.color = "#d4af37"; // Matching your gold accent
        input.value = ""; // Clear input
    } else {
        msg.textContent = "Please enter a preference!";
        msg.style.color = "#ff4d4d"; // Red for error
    }
}

// 4. Initialization
// Runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateMenu();
    
    // Optional: Add a fade-in effect to review cards as you scroll
    const reviews = document.querySelectorAll('.review-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.5 });

    reviews.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});
