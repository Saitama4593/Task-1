// Smooth Scroll for Navigation Links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back-to-Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Functionality
function openModal(title) {
    const modal = document.getElementById('anime-modal');
    document.getElementById('anime-title').innerText = title;
    document.getElementById('anime-description').innerText = `More details about ${title} will go here.`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('anime-modal').style.display = 'none';
}
