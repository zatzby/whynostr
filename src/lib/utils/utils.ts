export function scrollIntoView(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1); // Remove the "#" character
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}
