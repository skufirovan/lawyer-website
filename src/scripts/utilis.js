export function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight * 0.75 && 
      rect.bottom >= 0
    );
}