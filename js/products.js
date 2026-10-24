/* ==========================================================================
   NUMERIX — CATALOGUE PRODUITS
   --------------------------------------------------------------------------
   POUR AJOUTER LES PRIX : écrivez le montant dans le champ  prix: ""
       exemple :   prix: "150 000"     → s'affiche « 150 000 FCFA »
   Pour une promotion : renseignez aussi  ancienPrix: "180 000"  et  badge: "Promo"

   POUR AJOUTER LES PHOTOS : déposez les images dans  images/products/
   en les nommant avec l'identifiant (id) du produit. Exemple :
       camera-interieure.jpg           → photo principale
       camera-interieure-2.jpg         → 2e photo (galerie de la fiche produit)
       camera-interieure-3.jpg ...     → jusqu'à -6
   Formats acceptés : .jpg  .jpeg  .png  .webp   (rien d'autre à modifier !)

   POUR AJOUTER UN NOUVEAU PRODUIT : copiez un bloc { ... }, changez l'id,
   la catégorie (cat), le nom et la description. C'est tout.
   ========================================================================== */

/* ----- Groupes (correspondent aux pages du site) ----- */
window.GROUPES = [
  { id: "securite", nom: "Sécurité électronique",     page: "securite.html", icone: "shield",
    texte: "Caméras de surveillance, détection de métaux et contrôle des billets : sécurisez vos espaces." },
  { id: "badges",   nom: "Impression de badges",      page: "badges.html",   icone: "printer",
    texte: "Imprimantes de badges PVC, rubans et service de personnalisation professionnelle." },
  { id: "cartes",   nom: "Cartes et identification",  page: "cartes.html",   icone: "card",
    texte: "Cartes PVC, MIFARE et RFID pour l'identification et le contrôle d'accès." }
];

/* ----- Catégories ----- */
window.CATEGORIES = [
  { id: "cameras",      groupe: "securite", nom: "Caméras de surveillance",         icone: "camera",  court: "Caméras" },
  { id: "metaux",       groupe: "securite", nom: "Détecteurs de métaux",            icone: "scan",    court: "Détecteurs de métaux" },
  { id: "faux-billets", groupe: "securite", nom: "Détecteurs de faux billets",      icone: "banknote",court: "Faux billets" },
  { id: "imprimantes",  groupe: "badges",   nom: "Imprimantes de badges PVC",       icone: "printer", court: "Imprimantes" },
  { id: "rubans",       groupe: "badges",   nom: "Rubans pour imprimantes de badges", icone: "ribbon", court: "Rubans" },
  { id: "impression",   groupe: "badges",   nom: "Impression de badges professionnels", icone: "badge", court: "Impression" },
  { id: "cartes-pvc",   groupe: "cartes",   nom: "Cartes PVC blanches",             icone: "card",    court: "Cartes PVC" },
  { id: "mifare",       groupe: "cartes",   nom: "Cartes MIFARE",                   icone: "wifi",    court: "MIFARE" },
  { id: "rfid",         groupe: "cartes",   nom: "Cartes RFID",                     icone: "radio",   court: "RFID" }
];

/* ----- Produits ----- */
window.PRODUITS = [

  /* ============ CAMÉRAS DE SURVEILLANCE ============ */
  {
    id: "camera-interieure", cat: "cameras", vedette: true,
    nom: "Caméra de surveillance intérieure",
    court: "Surveillez vos bureaux, commerces et locaux au quotidien.",
    description: "Surveillez vos espaces intérieurs grâce à une caméra adaptée aux besoins de sécurité des bureaux, commerces, domiciles et locaux professionnels.",
    caracteristiques: ["Résolution vidéo haute définition", "Vision nocturne", "Détection de mouvement", "Connexion réseau ou Wi-Fi", "Compatible avec un système d'enregistrement"],
    utilisations: ["Bureaux", "Magasins", "Maisons", "Entrepôts"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : préciser la marque, le modèle et la résolution réellement vendus.
  },
  {
    id: "camera-exterieure", cat: "cameras", vedette: true,
    nom: "Caméra de surveillance extérieure",
    court: "Renforcez la surveillance de vos accès et de vos cours.",
    description: "Renforcez la surveillance de vos installations avec une caméra conçue pour une utilisation extérieure.",
    caracteristiques: ["Résistance aux intempéries", "Vision nocturne", "Détection de mouvement", "Résolution haute définition", "Accès à distance si compatible"],
    utilisations: ["Parkings", "Entrées", "Cours", "Bâtiments", "Commerces"],
    prix: "", ancienPrix: "", badge: ""
  },
  {
    id: "systeme-videosurveillance", cat: "cameras",
    nom: "Système de vidéosurveillance",
    court: "Une solution centralisée pour surveiller plusieurs zones.",
    description: "Une solution destinée aux professionnels souhaitant surveiller plusieurs zones de leurs installations à partir d'un système centralisé.",
    caracteristiques: ["Plusieurs caméras", "Enregistreur vidéo", "Disque de stockage", "Câbles et accessoires nécessaires", "Écran de surveillance en option"],
    utilisations: ["Entreprises", "Commerces", "Entrepôts", "Établissements"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : confirmer avec le client les marques, les modèles et la possibilité d'installation.
  },

  /* ============ DÉTECTEURS DE MÉTAUX ============ */
  {
    id: "portique-metaux", cat: "metaux", vedette: true,
    nom: "Portique de détection de métaux",
    court: "Le contrôle de sécurité des personnes à l'entrée de vos bâtiments.",
    description: "Un équipement destiné au contrôle de sécurité des personnes à l'entrée des bâtiments et des zones réglementées. Les zones de détection, les réglages et les alarmes dépendent du modèle.",
    caracteristiques: ["Zones de détection selon le modèle", "Réglages de sensibilité", "Alarme sonore et visuelle", "Contrôle d'accès des personnes"],
    utilisations: ["Établissements publics", "Événements", "Entreprises", "Établissements scolaires", "Sites à accès contrôlé"],
    prix: "", ancienPrix: "", badge: ""
  },
  {
    id: "detecteur-portatif", cat: "metaux", vedette: true,
    nom: "Détecteur de métaux portatif",
    court: "Des contrôles ciblés, rapides et discrets.",
    description: "Un appareil portable permettant d'effectuer des contrôles de sécurité ciblés pour détecter la présence d'objets métalliques.",
    caracteristiques: ["Appareil portable et maniable", "Sensibilité selon le modèle", "Alimentation par batterie", "Accessoires selon le modèle"],
    utilisations: ["Contrôle d'accès", "Événements", "Sécurité des bâtiments", "Inspections ponctuelles"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : préciser sensibilité, autonomie, type de batterie et accessoires inclus.
  },

  /* ============ DÉTECTEURS DE FAUX BILLETS ============ */
  {
    id: "detecteur-faux-billets", cat: "faux-billets", vedette: true,
    nom: "Détecteur automatique de faux billets",
    court: "Aidez-vous à vérifier l'authenticité des billets en caisse.",
    description: "Un équipement conçu pour aider les commerçants et les professionnels à vérifier l'authenticité des billets de banque compatibles. Selon le modèle, l'appareil peut contrôler certains éléments de sécurité des billets.",
    caracteristiques: ["Contrôle de plusieurs éléments de sécurité (selon modèle)", "Utilisation simple en caisse", "Devises reconnues selon la référence"],
    utilisations: ["Commerces", "Supermarchés", "Stations-service", "Hôtels", "Caisses et points de paiement"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : confirmer les devises reconnues et les méthodes de vérification pour chaque référence.
  },
  {
    id: "detecteur-uv", cat: "faux-billets",
    nom: "Détecteur de billets UV",
    court: "Un contrôle complémentaire par lumière ultraviolette.",
    description: "Un équipement utilisant la lumière ultraviolette pour examiner certains éléments de sécurité présents sur les billets compatibles. Il peut compléter vos procédures de vérification, mais ne garantit pas à lui seul l'authenticité d'un billet.",
    caracteristiques: ["Lumière ultraviolette", "Compact et facile à installer", "Complément aux procédures de vérification"],
    utilisations: ["Commerces", "Points de vente", "Caisses", "Services d'accueil"],
    prix: "", ancienPrix: "", badge: ""
  },

  /* ============ IMPRIMANTES DE BADGES PVC ============ */
  {
    id: "imprimante-couleur", cat: "imprimantes", vedette: true,
    nom: "Imprimante de badges PVC couleur",
    court: "Imprimez vos badges professionnels en couleur.",
    description: "Imprimez des cartes professionnelles personnalisées pour l'identification des employés, des membres, des étudiants ou des visiteurs.",
    caracteristiques: ["Impression couleur", "Personnalisation des badges", "Impression de photos et de textes", "Ajout de logos", "Recto-verso sur certains modèles"],
    utilisations: ["Entreprises", "Écoles et universités", "Associations", "Hôtels", "Organisations et événements"],
    prix: "", ancienPrix: "", badge: ""
  },
  {
    id: "imprimante-monochrome", cat: "imprimantes",
    nom: "Imprimante de badges PVC monochrome",
    court: "Texte, numéros et codes : l'essentiel de l'identification.",
    description: "Une solution destinée à l'impression de cartes comportant principalement du texte, des numéros, des codes ou des informations d'identification en monochrome. Les fonctions disponibles varient selon la référence.",
    caracteristiques: ["Impression monochrome", "Textes, numéros et codes", "Fonctions selon la référence"],
    utilisations: ["Cartes de membre", "Badges d'accès", "Cartes numérotées", "Identification simple"],
    prix: "", ancienPrix: "", badge: ""
  },
  /* ============ RUBANS ============ */
  {
    id: "ruban-ymcko", cat: "rubans", vedette: true,
    nom: "Ruban couleur YMCKO",
    court: "Le consommable pour des badges en couleur éclatante.",
    description: "Un consommable utilisé par certaines imprimantes de cartes PVC pour produire des badges en couleur. Le ruban YMCKO comprend généralement des panneaux jaune, magenta, cyan, noir et un panneau de protection.",
    caracteristiques: ["Panneaux jaune, magenta, cyan, noir + protection", "Compatibilité selon marque et modèle d'imprimante", "Nombre d'impressions selon la référence"],
    utilisations: ["Badges couleur", "Cartes d'étudiant", "Cartes de membre", "Cartes professionnelles"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : préciser marque compatible, modèle d'imprimante, nombre d'impressions, référence exacte.
  },
  {
    id: "autres-rubans", cat: "rubans",
    nom: "Autres rubans pour badges",
    court: "Rubans monochromes de couleurs et consommables spécifiques.",
    description: "Selon le stock, cette catégorie peut inclure des rubans monochromes de différentes couleurs et d'autres consommables spécifiques aux imprimantes de cartes.",
    caracteristiques: ["Rubans monochromes de différentes couleurs", "Consommables spécifiques aux imprimantes de cartes", "Disponibilité selon le stock"],
    utilisations: ["Personnalisation des cartes", "Besoins spécifiques d'impression"],
    prix: "", ancienPrix: "", badge: ""
  },

  /* ============ IMPRESSION DE BADGES (SERVICE) ============ */
  {
    id: "impression-badges", cat: "impression", vedette: true,
    nom: "Impression de badges personnalisés",
    court: "Nous personnalisons vos badges pour votre organisation.",
    description: "Numerix Technologies Services vous accompagne dans la personnalisation de badges destinés aux organisations, aux établissements et aux événements.",
    caracteristiques: ["Nom de l'organisation", "Nom et prénom du titulaire", "Photo", "Numéro d'identification", "Logo", "Code-barres ou QR code selon les besoins"],
    utilisations: ["Badges du personnel", "Cartes d'étudiant", "Badges de visiteurs", "Badges d'événements", "Cartes de membre"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : confirmer les options d'impression, délais et quantités minimales avec le client.
  },

  /* ============ CARTES PVC ============ */
  {
    id: "cartes-pvc-blanches", cat: "cartes-pvc", vedette: true,
    nom: "Cartes PVC blanches vierges",
    court: "La base de tous vos badges et cartes personnalisées.",
    description: "Des cartes vierges destinées à la création de badges et de cartes personnalisées par impression.",
    caracteristiques: ["Format CR80 (selon disponibilité)", "Épaisseur et finition selon la référence", "Conditionnement par paquet", "Compatible avec les imprimantes de cartes"],
    utilisations: ["Badges professionnels", "Cartes de membre", "Cartes d'étudiant", "Cartes de visite format carte PVC", "Cartes d'identification"],
    prix: "", ancienPrix: "", badge: ""
  },
  {
    id: "cartes-pvc-personnalisees", cat: "cartes-pvc",
    nom: "Cartes PVC personnalisées",
    court: "Des cartes à vos couleurs, prêtes à l'emploi.",
    description: "Des cartes professionnelles personnalisées avec les informations nécessaires à l'identification d'une personne ou d'un membre d'une organisation. Elles peuvent intégrer, selon la demande, un nom, une photo, un logo, un numéro d'identification ou un code.",
    caracteristiques: ["Nom et photo", "Logo de l'organisation", "Numéro d'identification", "Code selon la demande"],
    utilisations: ["Personnel", "Étudiants", "Membres", "Clients fidèles"],
    prix: "", ancienPrix: "", badge: ""
  },

  /* ============ CARTES MIFARE ============ */
  {
    id: "carte-mifare", cat: "mifare", vedette: true,
    nom: "Carte MIFARE sans contact",
    court: "Accès, identification et gestion des entrées sans contact.",
    description: "Une carte électronique sans contact destinée aux systèmes compatibles d'identification et de contrôle d'accès. Toutes les cartes MIFARE ne possèdent pas les mêmes fonctions ni les mêmes niveaux de sécurité.",
    caracteristiques: ["Technologie sans contact", "Référence de puce selon le modèle", "Capacité mémoire selon la référence", "Compatibilité avec votre système à vérifier"],
    utilisations: ["Accès aux bâtiments", "Identification des membres", "Gestion des accès en entreprise", "Systèmes de badges compatibles", "Services compatibles"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : préciser référence de la puce, fréquence, capacité et compatibilité.
  },

  /* ============ CARTES RFID ============ */
  {
    id: "carte-rfid", cat: "rfid", vedette: true,
    nom: "Carte RFID",
    court: "Identification par radiofréquence pour vos applications.",
    description: "Une carte équipée d'une technologie d'identification par radiofréquence, destinée aux applications compatibles. La technologie, la fréquence et la compatibilité varient selon la référence.",
    caracteristiques: ["Fréquence selon la référence", "Type de puce selon le modèle", "Format de la carte", "Mémoire selon la technologie"],
    utilisations: ["Contrôle d'accès", "Identification", "Gestion des entrées", "Systèmes de présence compatibles", "Applications professionnelles"],
    prix: "", ancienPrix: "", badge: ""
    // NOTE INTERNE : MIFARE est une famille de cartes sans contact, RFID est un terme plus large : ne pas présenter toutes les cartes comme identiques.
  }
];
