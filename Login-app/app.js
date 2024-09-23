const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json()); // Pour traiter les requêtes JSON
app.use(session({
  secret: 'votreSecretDeSession',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // En production, mettre `secure: true` si HTTPS est utilisé
}));

// Route pour déconnexion
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Erreur lors de la déconnexion');
        }
        res.status(200).send('Déconnecté avec succès');
    });
});
