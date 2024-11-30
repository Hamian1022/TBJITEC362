function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(input)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
}