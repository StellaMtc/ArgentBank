ArgentBank - Application de gestion bancaire

ArgentBank Icon
Démo en ligne

Vous pouvez accéder à la démo en ligne de l'application ArgentBank ici.
Table des matières

    Description du projet
    Fonctionnalités
    Technologies utilisées
    Prérequis
    Installation

1. Description du projet

ArgentBank est une application bancaire permettant aux utilisateurs de gérer leurs comptes et leurs transactions en ligne. Ce projet est divisé en deux phases :

    Phase 1 : Authentification des utilisateurs, gestion des profils.
    Phase 2 : Gestion des transactions (consultation, ajout, modification, suppression).

L'application est construite avec React et utilise Redux pour gérer l'état global. L'objectif principal est de permettre aux utilisateurs de se connecter, de consulter et de modifier leurs informations personnelles de manière sécurisée.
2. Fonctionnalités
Phase 1 : Authentification et Profil

    Connexion / Déconnexion des utilisateurs.
    Consultation et modification du profil utilisateur (nom, prénom).
    Accès sécurisé aux informations utilisateur via des routes protégées.

Phase 2 : Transactions

    Consultation des transactions par compte.
    Ajout, modification et suppression de transactions.

3. Technologies utilisées

    Frontend :
        React
        Redux (gestion de l'état global)
        React Router (navigation entre les pages)
        CSS (styles personnalisés)
    Backend :
        API REST (fourni pour la gestion des utilisateurs et des transactions)
        Documentation Swagger pour les endpoints API

4. Prérequis

Avant d'exécuter ce projet, assurez-vous d'avoir installé les éléments suivants sur votre machine :

    Node.js (version 12 ou supérieure)
    npm (ou yarn)
    nvm

5. Installation
1. Cloner le projet

git clone https://github.com/samiNedjai/argentbank.git

2. Backend

    Accéder au Backend

cd .\BackEnd\

    utiliser node v 12

nvm use 12

    lancer le serveur

npm run dev:server

3. Frontend

    Accéder au frontend

cd .\frontend

    install dependencies

npm install

    lancer l'application

npm start

