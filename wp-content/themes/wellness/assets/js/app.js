function saveRecipe(button) {

    const isSaved = button.classList.contains('saved');


    if (isSaved) {

        button.classList.remove('saved');
    } else {

        button.classList.add('saved');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments à animer
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    // Options de l'observateur
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Pourcentage de l'élément visible pour déclencher l'animation
    };

    // Fonction de callback pour l'observateur
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ne plus observer cet élément
            }
        });
    };

    // Création de l'observateur
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observation des éléments
    fadeInElements.forEach(element => observer.observe(element));
    slideUpElements.forEach(element => observer.observe(element));
});
