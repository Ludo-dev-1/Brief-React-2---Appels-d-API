
📚 Book Explorer (React)
Application web développée avec React permettant d’afficher une liste de livres et de consulter leurs détails via une navigation dynamique.

🚀 Fonctionnalités : 

📖 Affichage d’une liste de livres depuis une API externe
🔗 Navigation entre les pages grâce à React Router
📄 Page de détails dynamique pour chaque livre
⚡ Chargement des données via fetch


🛠️ Technologies utilisées : 

React (avec hooks)
React Router
TypeScript
Fetch API
OpenLibrary API

⚙️ Installation

Cloner le projet : 
```bash
git clone <url-du-repo>
cd <nom-du-projet>
```

Installer les dépendances :
```bash
npm install
```
Lancer l’application :
```bash
npm run dev
```

🧠 Fonctionnement

✅ Books.tsx

Récupère les livres via fetchBookMethod
Stocke les données avec useState
Affiche les titres sous forme de liste
Chaque livre est cliquable (navigation vers détails)

✅ fetchBookMethod.ts

Contient une méthode fetchBook
Appelle l’API OpenLibrary et retourne les données JSON

✅ index.tsx

Configure le router avec createBrowserRouter
Définit les routes de l’application
