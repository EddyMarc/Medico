document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Empêche le comportement par défaut du formulaire

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulation de vérification des informations de connexion
    const correctUsername = "correctUsername"; // Utilisateur correct (en dur pour l'exemple)
    const correctPassword = "correctPassword"; // Mot de passe correct (en dur pour l'exemple)

    // Vérification des identifiants
    if (username !== correctUsername || password !== correctPassword) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    } else {
        // Redirection simulée après succès de la connexion
        window.location.href = "protected.html";  // Remplacer par la vraie page après connexion
    }
});
