# Front Marvel

Application web **React** (Vite) pour explorer des personnages et des comics Marvel, avec recherche, favoris (localStorage) et authentification via un backend dédié.

## Fonctionnalités

- **Accueil** avec mise en avant visuelle
- **Personnages** et **Comics** : liste alimentée par l’API backend, recherche depuis la barre du header
- **Favoris** : sauvegarde côté navigateur (nécessite d’être connecté pour certaines actions)
- **Compte** : affichage du profil quand un token est présent
- **Inscription / Connexion** : token stocké en cookie (`Marvel_Token`, `Marvel_Username`)

## Stack technique

| Outil        | Rôle                          |
| ------------ | ----------------------------- |
| React 19     | Interface                     |
| Vite 7       | Build et serveur de dev       |
| React Router | Navigation (`BrowserRouter`) |
| Axios        | Appels HTTP vers le backend   |
| js-cookie    | Cookies pour le token         |

## Prérequis

- **Node.js** (version LTS recommandée)
- Un **backend** exposant les routes attendues (ex. `/personages`, `/comics`, `/login`, `/signup`) — l’URL est configurée par variable d’environnement.

## Installation

```bash
git clone <url-du-depot>
cd front-marvel
npm install
```

## Variables d’environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_API_URL=https://votre-backend.example.com
```

Vite expose uniquement les variables préfixées par `VITE_`. Sans `VITE_API_URL`, les appels API échoueront.

## Scripts npm

| Commande        | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Serveur de dev (souvent `:5173`) |
| `npm run build` | Build de production            |
| `npm run preview` | Prévisualisation du build    |
| `npm run lint`  | ESLint                         |

### PowerShell (Windows)

Si `npm` est bloqué par la politique d’exécution :

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Ou utilisez : `npm.cmd run dev`

## Routes principales

| Chemin        | Page        |
| ------------- | ----------- |
| `/`           | Accueil     |
| `/personages` | Personnages |
| `/comics`     | Comics      |
| `/favoris`    | Favoris     |
| `/login`      | Connexion   |
| `/signup`     | Inscription |
| `/compte`     | Compte      |
| `*`           | 404         |

## Structure du dépôt (aperçu)

```
src/
  App.jsx          # Router, état recherche / token
  App.css          # Styles globaux
  components/      # Header, etc.
  pages/           # Une page par route
  main.jsx
```

## Licence

Projet pédagogique — usage selon les conditions du dépôt et du cours.
