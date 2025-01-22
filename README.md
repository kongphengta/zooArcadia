# Zoo Arcadia

[banner](assets/images/Fox_1.JPG)



Bienvenue sur le site web du Zoo Arcadia ! Explorez notre magnifique Zoo et découvrez une variété d'animaux fascinantes.  

## Tables des matières  

- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)  
- [Technologies Utilisées](#technologies-utilisées)  
- [Licence](#licence)  

## Installation  

Pour exécuter ce projet sur votre machine locale, suivez les étapez suivantes :  

1. **Clonez le dépot**   
````bash
git clone https://github.com/kongphengta/zooArcadia.git  
cd zooArcadia  
````  
2. **Installez les dépendences**  
````bash
npm install
````  

3. **Compilez les fichiers SASS**  
````bash
npm run sass:compile
````  
Pour compiler automatiquement les fichiers SASS chaque fois que vous modifiez 'main.scss', Utilisez :
````bash
npm run sass:watch  
````

Si vous utilisez l'IDE Visual Studio Code, installez l'extension Live Sass Compiler. Une fois installée, vous verrez un bouton "Watch Sass" en bas de l'éditeur. Cliquez sur ce bouton pour compiler le fichier `main.scss` en `main.css`.  

4. **Démarrer le serveur XAMPP**    

Assurez vous que votre serveur est en cours d'exécution et que le projet est dans le répertoire `htdocs`  

5. **Accédez au site web**  

Ouvrez le navigateur et aller à `http://localhost/zooArcadia`  

## Fonctionnalités  

- **Page d'Accueil** : Présentation du Zoo et une image accueillante.  
- **Section animaux** : Liste des animaux avec des images avec des descriptions.  
- **Section Événements et Activités** : Calendrier des événements et activités.
- **Section Tarifs et Horaires** : Informations sur les tarifs et les horaires d'ouverture.
- **Section Réservation de Billets** : Formulaire pour réserver des billets.
- **Section Contact** : Formulaire de contact avec des coordonnées du zoo.  

## Technologies Utilisées

- **HTML** : Structure du site web.
- **CSS** : Styles et mise en page.
- **SASS** : Préprocesseur CSS pour des styles plus puissants et maintenables.
- **Bootstrap** : Framework CSS pour la mise en page responsive.
- **jQuery** : Bibliothèque JavaScript pour des interactions simplifiées.
- **Node.js** : Gestion des dépendances et scripts de compilation SASS.  



