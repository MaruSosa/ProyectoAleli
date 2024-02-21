const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.previousElementSibling;  
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';  
      this.textContent = 'Leer Menos'; 
    } else {
      content.style.display = 'none';  
      this.textContent = 'Leer Más';  
    }
  });
});
