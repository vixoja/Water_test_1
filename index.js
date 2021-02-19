function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    section.classList.toggle('active');
    toggleMenu.classList.toggle('active'); 
}