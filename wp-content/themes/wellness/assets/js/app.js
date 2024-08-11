
function saveRecipe(button) {
    if (!button.classList.contains('saved')) {
        // Enregistrer l'état
        button.classList.add('saved');

        // Délai avant de se désenregistrer
        setTimeout(() => {
            button.classList.remove('saved');
        }, 3000); // Délai de 3 secondes
    } else {
        // Annuler l'enregistrement si déjà enregistré
        button.classList.remove('saved');
    }
}
