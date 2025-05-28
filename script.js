 function togglePopup(el) {
    const content = el.querySelector('.popup-content');
    if (!content) return;
    
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';

    // ARIA attribute toggle
    el.setAttribute('aria-expanded', !isVisible);
  }