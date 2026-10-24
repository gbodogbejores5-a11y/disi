# Site web — Numerix Technologies Services

Site vitrine + catalogue + demandes de devis (WhatsApp). 100 % statique : aucun serveur, aucune base de données.
Prêt pour **GitHub Pages**, Netlify, Cloudflare Pages ou n'importe quel hébergement.

## Structure

```
index.html            Accueil (slider, domaines, produits phares, avantages, devis)
produits.html         Catalogue complet (recherche + filtres)
securite.html         Sécurité électronique
badges.html           Impression de badges
cartes.html           Cartes et identification (PVC, MIFARE, RFID)
produit.html          Fiche produit (générée automatiquement : produit.html?id=...)
a-propos.html  devis.html  contact.html  404.html
css/style.css         Design
js/config.js          ⭐ Infos de l'entreprise (téléphone, WhatsApp, adresse, réseaux, devise)
js/products.js        ⭐ Catalogue : produits, descriptions, PRIX
js/site.js            Moteur du site (ne pas toucher)
images/products/      ⭐ VOS PHOTOS PRODUITS (à déposer ici)
images/demo/          Photos de départ (remplacées automatiquement par les vôtres)
```

## 1) Ajouter les photos des produits

1. Déposez vos photos dans **`images/products/`**.
2. Nommez-les exactement avec l'identifiant du produit (liste ci-dessous).
3. C'est tout : la photo apparaît toute seule sur la carte produit, la fiche et le devis. **Aucun code à modifier.**

* Formats acceptés : `.jpg` `.jpeg` `.png` `.webp`
* **Plusieurs photos** pour un même produit : `camera-interieure.jpg`, `camera-interieure-2.jpg`, `camera-interieure-3.jpg`… (jusqu'à 6) → galerie automatique sur la fiche.
* Conseil : photos carrées ou 4/3, fond clair, ~1000 px de large, moins de 300 Ko.
* Tant qu'aucune photo n'est déposée, une photo de départ (découpée de la bannière) est affichée.
* Après envoi sur GitHub, attendez 1 à 2 minutes puis rafraîchissez (Ctrl + F5).


**Caméras de surveillance**

| Produit | Nom du fichier à déposer |
|---|---|
| Caméra de surveillance intérieure | `camera-interieure.jpg` |
| Caméra de surveillance extérieure | `camera-exterieure.jpg` |
| Système de vidéosurveillance | `systeme-videosurveillance.jpg` |

**Détecteurs de métaux**

| Produit | Nom du fichier à déposer |
|---|---|
| Portique de détection de métaux | `portique-metaux.jpg` |
| Détecteur de métaux portatif | `detecteur-portatif.jpg` |

**Détecteurs de faux billets**

| Produit | Nom du fichier à déposer |
|---|---|
| Détecteur automatique de faux billets | `detecteur-faux-billets.jpg` |
| Détecteur de billets UV | `detecteur-uv.jpg` |

**Imprimantes de badges PVC**

| Produit | Nom du fichier à déposer |
|---|---|
| Imprimante de badges PVC couleur | `imprimante-couleur.jpg` |
| Imprimante de badges PVC monochrome | `imprimante-monochrome.jpg` |
| Accessoires pour imprimantes de badges | `accessoires-imprimante.jpg` |

**Rubans pour imprimantes de badges**

| Produit | Nom du fichier à déposer |
|---|---|
| Ruban couleur YMCKO | `ruban-ymcko.jpg` |
| Ruban monochrome noir | `ruban-monochrome.jpg` |
| Autres rubans pour badges | `autres-rubans.jpg` |

**Impression de badges professionnels**

| Produit | Nom du fichier à déposer |
|---|---|
| Impression de badges personnalisés | `impression-badges.jpg` |

**Cartes PVC blanches**

| Produit | Nom du fichier à déposer |
|---|---|
| Cartes PVC blanches vierges | `cartes-pvc-blanches.jpg` |
| Cartes PVC personnalisées | `cartes-pvc-personnalisees.jpg` |

**Cartes MIFARE**

| Produit | Nom du fichier à déposer |
|---|---|
| Carte MIFARE sans contact | `carte-mifare.jpg` |

**Cartes RFID**

| Produit | Nom du fichier à déposer |
|---|---|
| Carte RFID | `carte-rfid.jpg` |

## 2) Ajouter les prix

Ouvrez **`js/products.js`**, repérez le produit et remplissez le champ `prix` :

```js
prix: "150 000",          // s'affiche « 150 000 FCFA »
ancienPrix: "180 000",    // (facultatif) prix barré pour une promotion
badge: "Promo",           // (facultatif) étiquette sur la photo : Promo, Nouveau, Stock limité...
```

Tant que `prix` est vide (`""`), **rien ne s'affiche** : aucun trou dans la page.
La devise se change dans `js/config.js` (`devise: "FCFA"`). Pour afficher un texte quand il n'y a pas de prix
(ex. « Prix sur demande »), renseignez `textePrixVide` dans `config.js`.

## 3) Ajouter / modifier un produit

Dans `js/products.js`, copiez un bloc `{ ... }` existant, puis changez : `id` (sans espace ni accent, ex. `camera-ptz`), `cat` (catégorie),
`nom`, `court`, `description`, `caracteristiques`, `utilisations`. Nommez ensuite la photo `camera-ptz.jpg`.
Mettez `vedette: true` pour l'afficher parmi les produits phares de l'accueil.

## 4) Modifier les coordonnées

Tout est dans **`js/config.js`** (téléphone, WhatsApp, adresse, e-mail, réseaux sociaux, carte Google Maps).
Les champs laissés vides (`""`) se masquent automatiquement.
Pour la **carte** : sur Google Maps → Partager → *Intégrer une carte* → copiez le lien dans `src="…"` → collez-le dans `carteEmbed`.

## 5) Mise en ligne sur GitHub Pages

1. Créez un dépôt GitHub (ex. `numerix-site`) et envoyez-y **tout le contenu** du dossier (pas le .zip lui-même).
2. Dépôt → **Settings → Pages** → *Source : Deploy from a branch* → branche `main`, dossier `/ (root)` → **Save**.
3. Le site est disponible sur `https://VOTRE-NOM.github.io/numerix-site/` après 1 à 2 minutes.
4. Domaine personnalisé : Settings → Pages → *Custom domain*.

Test en local : `python3 -m http.server 8000` dans le dossier, puis http://localhost:8000.
(Pour un test fiable, utilisez ce petit serveur local plutôt que le double-clic sur les fichiers.)

## 6) Points à confirmer avec le client

* Position exacte de « Renault Adjamé » (rue / repère / GPS) avant d'activer la carte interactive.
* Marques, modèles, devises reconnues, compatibilités et services réellement proposés (impression de badges, délais, quantités minimales).
* Adresse e-mail et réseaux sociaux, si le client en possède.
* Livraison : le site annonce « Livraison à Abidjan et environs » (texte de son visuel) — à valider.

## Comment fonctionne la demande de devis ?

Le visiteur ajoute des produits à sa sélection (conservée dans son navigateur), remplit nom/téléphone, puis le bouton ouvre **WhatsApp**
avec un message déjà rédigé (produits, quantités, coordonnées) vers le numéro WhatsApp du client.
