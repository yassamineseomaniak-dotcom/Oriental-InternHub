// Mapping officiel des sous-secteurs vers les secteurs généraux
const SECTOR_MAPPING = {
    // 1. Informatique / Tech
    "Informatique": "Informatique / Tech", "Support IT": "Informatique / Tech", "Cybersécurité": "Informatique / Tech", 
    "Cloud": "Informatique / Tech", "Web": "Informatique / Tech", "Développement web": "Informatique / Tech", 
    "Développement de logiciels": "Informatique / Tech", "Société de logiciels": "Informatique / Tech", 
    "Software company": "Informatique / Tech", "Conseil informatique": "Informatique / Tech", 
    "Support et services informatiques": "Informatique / Tech", "Matériel Informatique": "Informatique / Tech", 
    "Vente de matériel informatique": "Informatique / Tech", "Application Mobile": "Informatique / Tech", 
    "ESN": "Informatique / Tech", "Services digitaux": "Informatique / Tech", "Conseil IT": "Informatique / Tech", 
    "Hébergement web": "Informatique / Tech", "Data": "Informatique / Tech", "Espace de coworking": "Informatique / Tech", 
    "Cybercafé": "Informatique / Tech", "Réseaux": "Informatique / Tech", "Télécommunications": "Informatique / Tech", 
    "Télécoms": "Informatique / Tech", "Opérateur télécom": "Informatique / Tech", "Téléphonie mobile": "Informatique / Tech",

    // 2. Marketing / Communication / Digital
    "Marketing digital": "Marketing / Communication / Digital", "Marketing agency": "Marketing / Communication / Digital", 
    "Advertising agency": "Marketing / Communication / Digital", "Agence de communication": "Marketing / Communication / Digital", 
    "Agence digitale": "Marketing / Communication / Digital", "Agence web": "Marketing / Communication / Digital", 
    "SEO": "Marketing / Communication / Digital", "Référencement": "Marketing / Communication / Digital", 
    "Web Marketing": "Marketing / Communication / Digital", "Création site web": "Marketing / Communication / Digital", 
    "Conception de sites web": "Marketing / Communication / Digital", "Services numériques": "Marketing / Communication / Digital", 
    "Stratégies digitales": "Marketing / Communication / Digital", "Community Management": "Marketing / Communication / Digital", 
    "Communication digitale": "Marketing / Communication / Digital", "Communication": "Marketing / Communication / Digital", 
    "Formation digitale": "Marketing / Communication / Digital", "Content": "Marketing / Communication / Digital", 
    "Branding": "Marketing / Communication / Digital", "Innovation": "Marketing / Communication / Digital",

    // 3. Design / Création graphique / Production
    "Design graphique": "Design / Création graphique / Production", "Création graphique": "Design / Création graphique / Production", 
    "Graphisme": "Design / Création graphique / Production", "Photographe": "Design / Création graphique / Production", 
    "Designer graphique": "Design / Création graphique / Production", "Impression": "Design / Création graphique / Production", 
    "Imprimerie": "Design / Création graphique / Production", "Signalétique": "Design / Création graphique / Production", 
    "Audiovisuel": "Design / Création graphique / Production", "Production Média": "Design / Création graphique / Production", 
    "Production vidéo": "Design / Création graphique / Production", "Production": "Design / Création graphique / Production", 
    "Publicité": "Design / Création graphique / Production", "Média": "Design / Création graphique / Production", 
    "Presse": "Design / Création graphique / Production", "Labo photo": "Design / Création graphique / Production", 
    "Événementiel": "Design / Création graphique / Production",

    // 4. Commerce / E-commerce
    "E-commerce": "Commerce / E-commerce", "Commerce": "Commerce / E-commerce", "Alimentation (épicerie)": "Commerce / E-commerce", 
    "Électroménager": "Commerce / E-commerce", "Accessoires Informatique & Mobile": "Commerce / E-commerce", 
    "Commerce de gros / Cash & Carry": "Commerce / E-commerce", "Artisanat": "Commerce / E-commerce", 
    "Menuiserie bois": "Commerce / E-commerce", "Automobile": "Commerce / E-commerce",

    // 5. Tourisme / Hébergement
    "Agence de voyages": "Tourisme / Hébergement", "Tourisme": "Tourisme / Hébergement", "Réservation": "Tourisme / Hébergement", 
    "Visa": "Tourisme / Hébergement", "Hébergement touristique (auberge, guest house, maison d'hôtes, gîte)": "Tourisme / Hébergement", 
    "Guide de randonnée": "Tourisme / Hébergement", "Centre d'information": "Tourisme / Hébergement",

    // 6. Transport / Logistique
    "Transport": "Transport / Logistique", "Transport de voyageurs": "Transport / Logistique", 
    "Location de voiture(s)": "Transport / Logistique", "Billetterie de bus": "Transport / Logistique", 
    "Messagerie": "Transport / Logistique", "Livraison": "Transport / Logistique", "Livraison de repas": "Transport / Logistique", 
    "Logistique": "Transport / Logistique",

    // 7. Finance / Assurance
    "Banque": "Finance / Assurance", "Transfert d'argent": "Finance / Assurance", "Services financiers": "Finance / Assurance", 
    "Assurance": "Finance / Assurance", "Compagnie d'assurance": "Finance / Assurance",

    // 8. Sécurité
    "Sécurité / Surveillance": "Sécurité", "Sécurité Électronique": "Sécurité", "Installation de systèmes de sécurité": "Sécurité",

    // 9. Construction / BTP
"BTP": "Construction / BTP",
"Construction": "Construction / BTP",
"Éco-construction": "Construction / BTP",
    // 10. Agriculture / Agroalimentaire
    "Agriculture": "Agriculture / Agroalimentaire", "Pépinière": "Agriculture / Agroalimentaire", 
    "Agriculture biologique": "Agriculture / Agroalimentaire", "Production végétale": "Agriculture / Agroalimentaire", 
    "Conserverie": "Agriculture / Agroalimentaire", "Industrie agroalimentaire": "Agriculture / Agroalimentaire",

    // 11. Restauration
    "Restauration": "Restauration",

    // 12. Services professionnels / Autres
    "Conseil en gestion d'entreprise": "Services professionnels / Autres", "Service de traduction": "Services professionnels / Autres", 
    "Maintenance": "Services professionnels / Autres", "Services Techniques": "Services professionnels / Autres", 
    "Électronique": "Services professionnels / Autres", "Centre de formation": "Services professionnels / Autres", 
    "Association": "Services professionnels / Autres", "Service": "Services professionnels / Autres", 
    "Environnement": "Services professionnels / Autres", "Collecte déchets": "Services professionnels / Autres"
};

/**
 * Fonction utilitaire pour récupérer le secteur général à partir d'un sous-secteur brut
 * @param {string} subSector 
 * @returns {string} Le secteur général ou "Services professionnels / Autres" par défaut
 */
function getGeneralSector(subSector) {
    return SECTOR_MAPPING[subSector] || "Services professionnels / Autres";
}

console.log("script loaded");

// =========================================================================
// REGISTER DES DONNÉES - Entreprises de l'Oriental
// C'est ICI que vous mettez tout le grand tableau des blocs 1, 2, 3...
// =========================================================================

// =========================================================================
// LOGIQUE DE RECHERCHE / FILTRAGE & CONFIGURATION (Pagination, Rendu)
// =========================================================================

const companiesDatabase = [
    {
        nom: "Technologica",
        secteur: "Informatique / Support IT",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "technologica.ma",
        email: "technologica.orient@gmail.com",
        tel: "Fixe: 05 36 69 30 30 | Mob/WhatsApp: 07 62 89 99 99",
        desc: "Prestations de services et support informatique dans la région de l'Oriental.",
        opps: "Candidature spontanée (Stage / Emploi)",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Planète Informatique",
        secteur: "Informatique",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "—",
        email: "e.planete.info@gmail.com",
        tel: "06 61 93 62 29",
        desc: "Services informatiques de proximité et maintenance.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Beta informatique Oujda",
        secteur: "Informatique",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "betainformatique.ma",
        email: "contact@betainformatique.ma",
        tel: "06 73 88 10 80",
        desc: "Solutions informatiques et équipements technologiques pour professionnels et particuliers.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Epic Digital (Adsmedia)",
        secteur: "Marketing digital / Design graphique / Web",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "adsmedia.ma (www.adsmedia.com)",
        email: "contact@adsmedia.ma",
        tel: "06 20 00 20 66",
        desc: "Agence de communication visuelle, création de sites web et gestion publicitaire.",
        opps: "Stage d'application / Stage design & web",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Agence digitale FCPO",
        secteur: "Marketing digital / Web",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "fcpo.ma",
        email: "agence@fcpo.ma, academy@fcpo.ma, recrutement@fcpo.ma",
        tel: "Fixe: 05 36 68 67 45 | Mobile: 06 58 57 13 69",
        desc: "Agence web globale et centre de formation digitale (FCPO Academy).",
        opps: "Stage PFE, Recrutement Academy",
        decider: "M. Chourak",
        source: "Listing Officiel"
    },
    {
        nom: "Seomaniak",
        secteur: "SEO / Marketing digital",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "seomaniak.ma",
        email: "info@seomaniak.com",
        tel: "05 36 50 50 92",
        desc: "Agence spécialisée en référencement naturel (SEO) et stratégies d'acquisition digitale.",
        opps: "Stage Marketing / SEO",
        decider: "Imad Belak",
        source: "Listing Officiel"
    },
    {
        nom: "OrienDigis",
        secteur: "Marketing digital",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "oriendigis.com",
        email: "contact@oriendigis.com",
        tel: "08 08 52 68 77",
        desc: "Solutions de communication et visibilité numérique pour les entreprises de l'Oriental.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Digidaring",
        secteur: "Agence digitale & Marketing / SEO",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "digidaring.com",
        email: "contact@digidaring.com",
        tel: "06 54 83 73 48",
        desc: "Création de sites internet, netlinking, référencement Google et conseil en communication.",
        opps: "Stage Web / SEO",
        decider: "Non public",
        source: "Listing Officiel"
    },

// --- Suite : Marketing & Digital ---
    {
        nom: "Digital Garden",
        secteur: "Communication digitale",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "digitalgarden.ma",
        email: "info@digitalgarden.ma",
        tel: "05 36 71 00 05",
        desc: "Agence spécialisée dans la communication numérique et l'image de marque.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Twice Box",
        secteur: "Communication digitale / Création graphique / Web / Marketing digital",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "twicebox.com/fr/",
        email: "contact@twicebox.com",
        tel: "Fixe: 05 22 70 81 33 | Mob/WhatsApp: 06 79 79 88 92",
        desc: "Agence créative et digitale spécialisée dans le branding, le web design et les stratégies de communication.",
        opps: "Stage design / Community management",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Communication Orientals Oujda",
        secteur: "Communication",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "comorientals.com",
        email: "com.orientals@yahoo.com",
        tel: "05 31 03 91 36",
        desc: "Prestations de services en communication globale et publicité.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Webeuz",
        secteur: "Agence digitale",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "webeuz.com",
        email: "contact@webeuz.com",
        tel: "+212 661-591351",
        desc: "Accompagnement dans la transformation numérique, création d'écosystèmes web et marketing de performance.",
        opps: "Stage d'application (Développement / Marketing)",
        decider: "Mehdi Mourabit",
        source: "Listing Officiel"
    },
    {
        nom: "SUPREME IT",
        secteur: "Digital Marketing",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "supremeit.ma",
        email: "contact@supremeit.ma",
        tel: "06 90 96 35 32",
        desc: "Services de marketing en ligne, gestion des réseaux sociaux et visibilité locale.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Raji Web",
        secteur: "Marketing digital",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "rajiweb.com",
        email: "contact@rajiweb.com",
        tel: "06 75 68 82 82",
        desc: "Stratégies d'acquisition, création de tunnels de vente et conseil en publicité numérique.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Suite : Informatique & Tech ---
    {
        nom: "OPEN-AX",
        secteur: "Cybersécurité / Cloud / Web",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "open-ax.ma",
        email: "contact@open-ax.ma",
        tel: "06 68 70 16 52",
        desc: "Solutions avancées en sécurité informatique, intégration Cloud et infrastructures web.",
        opps: "Stage technique (Réseaux / Sécurité)",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "NextGital",
        secteur: "Développement web / SEO",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "nextgital.com",
        email: "info@nextgital.com",
        tel: "Fixe: 05 36 68 37 07 | Mobiles: 06 20 00 20 66 / 06 84 85 69 59",
        desc: "Agence de développement sur mesure et optimisation pour les moteurs de recherche.",
        opps: "Stage Web Dev / Référencement",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "DevNet",
        secteur: "Agence web",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "devnetcorp.com",
        email: "info@devnetcorp.com",
        tel: "Fixe: 05 39 35 13 30 | Mobile: 06 63 30 60 45",
        desc: "Ingénierie web, développement d'applications métiers et solutions e-commerce.",
        opps: "Stage PFE / Développement",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Nouvelle catégorie : Formation & Conseil ---
    {
        nom: "FCPO Academy",
        secteur: "Formation digitale",
        ville: "Oujda",
        categorie: "Formation & Conseil",
        site: "academy.fcpo.ma",
        email: "agence@fcpo.ma, academy@fcpo.ma",
        tel: "Fixe: 05 36 68 67 45 | Mobile: 06 58 57 13 69",
        desc: "Branche académique dédiée à la formation professionnelle aux métiers du numérique.",
        opps: "Stage d'immersion / Insertion diplômés",
        decider: "M. Chourak",
        source: "Listing Officiel"
    },

    // --- Suite : Marketing & Digital (Oujda & Berkane) ---
    {
        nom: "Digiprint Oujda",
        secteur: "Création graphique / Impression",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "oprint.ma",
        email: "digiprintma@gmail.com",
        tel: "—",
        desc: "Services d'impression numérique et de création de supports graphiques.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Tag it",
        secteur: "Digital marketing / Branding / Content",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "tagit.ma",
        email: "contact@tagit.ma",
        tel: "Fixe: +212 5 36 70 40 40 | Mobile: +212 6 16 01 77 68",
        desc: "Agence créative spécialisée dans l'image de marque, le contenu de marque et le marketing digital.",
        opps: "Stage marketing / Community management",
        decider: "Atoini Zakariae",
        source: "Listing Officiel"
    },
    {
        nom: "Yano It solutions",
        secteur: "Graphique / Développement web / Branding design",
        ville: "Oujda",
        categorie: "Marketing & Digital",
        site: "yanosolutions.com",
        email: "—",
        tel: "06 04 47 16 67",
        desc: "Solutions digitales combinant design d'identité et développement d'applications web.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Trifagraph",
        secteur: "Design Graphique / Impression",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 61 05 11 89",
        desc: "Atelier de conception graphique et travaux d'impression à Berkane.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Comarke Agency",
        secteur: "Développement Web / Marketing Digital",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "comarke.ma",
        email: "comarke02@gmail.com",
        tel: "+212 6 72 80 43 38",
        desc: "Création de sites internet et déploiement de campagnes marketing pour entreprises.",
        opps: "Stage Web / Digital",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "ClientHero",
        secteur: "Marketing Digital",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "clienthero.ma",
        email: "—",
        tel: "07 26 33 80 69",
        desc: "Agence orientée vers l'acquisition de clients et la visibilité en ligne.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Datapic",
        secteur: "Marketing Digital / Communication",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "datapic.ma",
        email: "Contact@datapic.ma",
        tel: "Fixe: +212 5 36 61 71 12 | Mobile: +212 6 68 82 64 46",
        desc: "Prestations en conseil de communication et stratégies de croissance digitale.",
        opps: "Stage d'application",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "csn agency",
        secteur: "Marketing Digital",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "csnagency.ma",
        email: "CONTACT@CSNAGENCY.COM",
        tel: "Fixe: 05 36 61 09 63 | Mobile: 06 40 48 48 85",
        desc: "Gestion de réseaux sociaux, marketing d'influence et publicité digitale.",
        opps: "Stage d'initiation / Application",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Suite : Informatique & Tech (Oujda) ---
    {
        nom: "SQLI Oujda",
        secteur: "Informatique / Cybersécurité / ESN / Services digitaux / E-commerce",
        ville: "Oujda",
        categorie: "Informatique & Tech",
        site: "sqli.com/ma-fr",
        email: "Non publié (Utiliser le formulaire de contact du site)",
        tel: "+212 5 37 27 41 50 (Siège Rabat)",
        desc: "Grande multinationale européenne et ESN majeure. Centre de services ciblant l'e-commerce mondial, le conseil IT et le développement d'applications critiques.",
        opps: "Stage PFE, Recrutement Jeunes Diplômés",
        decider: "Haykel Mazioud (Directeur Général SQLI Maroc)",
        source: "Listing Officiel"
    },

    // --- Nouvelle catégorie : E-commerce & Distribution ---
    {
        nom: "aloo.salhi",
        secteur: "Commerce / E-commerce",
        ville: "Berkane",
        categorie: "E-commerce & Distribution",
        site: "aloosalhi.com",
        email: "aloosalhi@gmail.com",
        tel: "Fixe/WhatsApp: +212 7 66 18 33 88 | Mobile: +212 6 99 77 25 23",
        desc: "Plateforme et services liés au commerce en ligne et à la distribution de produits.",
        opps: "Stage e-commerce / Gestion des commandes",
        decider: "Non public",
        source: "Listing Officiel"
    },


// --- Nouvelle catégorie : Sécurité & Services ---
    {
        nom: "Ste AIGLE Contrôle Gardiennage",
        secteur: "Sécurité / Surveillance",
        ville: "Berkane",
        categorie: "Sécurité & Services",
        site: "—",
        email: "—",
        tel: "06 64 32 50 03",
        desc: "Services de gardiennage, contrôle d'accès et surveillance des infrastructures.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Suite : Informatique & Tech (Berkane) ---
    {
        nom: "cellule informatique",
        secteur: "Informatique / Maintenance",
        ville: "Berkane",
        categorie: "Informatique & Tech",
        site: "cletv.net",
        email: "celluleinform@gmail.com",
        tel: "05 36 61 52 70",
        desc: "Maintenance informatique, assistance technique et dépannage matériel.",
        opps: "Stage d'initiation / Application",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "BADR INFORMATIQUE",
        secteur: "Informatique / Maintenance",
        ville: "Berkane",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "06 61 77 04 28",
        desc: "Services de réparation, maintenance de parcs informatiques et support technique.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "GMPP",
        secteur: "Matériel Informatique",
        ville: "Berkane",
        categorie: "Informatique & Tech",
        site: "gmpp.ma",
        email: "recrutement@gmpp.ma",
        tel: "Fixe: 05 30 02 20 74 | Mobile: 06 61 45 00 17",
        desc: "Distribution, vente et installation de solutions matérielles et équipements informatiques.",
        opps: "Stage commercial / Support technique",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Nouvelle catégorie : Télécoms & Réseaux ---
    {
        nom: "Internet Fouad Services",
        secteur: "Services Internet / Réseaux",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "—",
        email: "—",
        tel: "06 68 26 07 53",
        desc: "Installation réseau domestique, connectivité internet et maintenance informatique.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Cybercafé",
        secteur: "Services Internet / Réseaux",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "—",
        email: "—",
        tel: "05 36 61 83 84",
        desc: "Espace public numérique proposant des services internet et d'assistance administrative.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Maroc Telecom Berkane",
        secteur: "Télécommunications",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "iam.ma",
        email: "—",
        tel: "+212 5 37 71 90 00 (Siège)",
        desc: "Opérateur historique national de télécommunications. Agence commerciale locale.",
        opps: "Stage d'application (Réseaux / Relation client)",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Orange Berkane",
        secteur: "Télécommunications",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "orange.ma",
        email: "—",
        tel: "Fixe: 05 36 61 52 30 | Mobiles: 06 64 04 34 22 / 06 25 23 26 68",
        desc: "Fournisseur de solutions mobiles, internet fixe et transformation digitale pour entreprises.",
        opps: "Stage conseiller de vente / Support client",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "inwi Berkane",
        secteur: "Télécommunications",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "inwi.ma/fr/",
        email: "—",
        tel: "07 00 08 69 33 / 07 00 09 49 04 / 07 00 08 67 33",
        desc: "Opérateur global de télécommunications proposant des services mobiles, fixes et cloud.",
        opps: "Stage commercial / Télécoms",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Suite : Marketing & Digital (Berkane) ---
    {
        nom: "Berkane Print",
        secteur: "Design Graphique / Impression",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "berkaneprint.com (ou berkaneprint.ma)",
        email: "berkaneprint@gmail.com",
        tel: "Fixe: 05 36 61 07 96 | Mobiles: 06 02 36 91 42 / 06 23 41 25 91",
        desc: "Studio d'impression grand format, marquage publicitaire et création visuelle.",
        opps: "Stage design graphique / Impression",
        decider: "Non public",
        source: "Listing Officiel"
    },
    {
        nom: "Imprimerie Beni Snassen",
        secteur: "Design Graphique / Impression",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "ibspub.ma",
        email: "Impri.benisnassen@gmail.com",
        tel: "Fixe: +212 5 36 61 75 23 | Mobile: +212 6 70 52 97 04",
        desc: "Travaux d'édition, façonnage, imprimerie offset et identité visuelle corporate.",
        opps: "Stage infographie / Technique d'impression",
        decider: "Non public",
        source: "Listing Officiel"
    },

    // --- Suite : Marketing & Digital (Berkane & Guercif) ---
    {
        nom: "Imprimerie Multi Space Negoce",
        secteur: "Design Graphique / Impression",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "—",
        email: "multispacenegoce@gmail.com",
        tel: "06 61 50 52 79",
        desc: "Services d'impression, travaux de négociation publicitaire et supports de communication.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "LuxePrint Pub & Imprimerie",
        secteur: "Design Graphique / Publicité",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "sites.google.com/view/luxeprintpub",
        email: "luxeprint.solution@gmail.com",
        tel: "06 16 65 69 55",
        desc: "Conception graphique, solutions publicitaires et impressions numériques.",
        opps: "Stage graphisme / infographie",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bloom Events",
        secteur: "Communication / Événementiel",
        ville: "Berkane",
        categorie: "Marketing & Digital",
        site: "bloomevents.ma",
        email: "bloomevents.direction@gmail.com",
        tel: "05 36 61 32 14",
        desc: "Agence spécialisée dans l'organisation d'événements corporate, la communication et les relations publiques.",
        opps: "Stage événementiel / communication",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Guercif Market",
        secteur: "Branding / E-commerce",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "afaguercifmarket@gmail.com",
        tel: "06 34 60 66 55",
        desc: "Services de commerce en ligne de proximité et développement d'identité de marque.",
        opps: "Stage marketing / e-commerce",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Formation & Conseil / Innovation (Berkane) ---
    {
        nom: "MAJAL BERKANE SA",
        secteur: "Services / Innovation",
        ville: "Berkane",
        categorie: "Formation & Conseil",
        site: "berkanewecan.ma/fr/",
        email: "berkanewecan@gmail.com",
        tel: "05 36 61 62 93",
        desc: "Société de développement local axée sur l'innovation, la gouvernance territoriale et les services intelligents.",
        opps: "Stage projets innovants / Transformation digitale",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique & Tech (Berkane & Guercif) ---
    {
        nom: "Electronic Berkane",
        secteur: "Électronique / Services Techniques",
        ville: "Berkane",
        categorie: "Informatique & Tech",
        site: "—",
        email: "ElectroniQueBerkane@Gmail.Com",
        tel: "06 01 87 30 09",
        desc: "Maintenance de systèmes électroniques et services d'assistance technique.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bh Tech Guercif",
        secteur: "Informatique / Électronique",
        ville: "Guercif",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "06 22 12 12 80",
        desc: "Maintenance de parcs informatiques, dépannage électronique et matériel.",
        opps: "Stage d'initiation technique",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Lotfi Info Pc",
        secteur: "Informatique / Matériel informatique",
        ville: "Guercif",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "06 66 61 39 18",
        desc: "Vente de solutions matérielles informatiques, accessoires et services de réparation.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms & Réseaux (Berkane) ---
    {
        nom: "CSETT",
        secteur: "Réseaux / Télécommunications",
        ville: "Berkane",
        categorie: "Télécoms & Réseaux",
        site: "—",
        email: "—",
        tel: "06 38 55 40 04",
        desc: "Prestations techniques dans le déploiement de réseaux et d'infrastructures télécoms.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Sécurité & Services (Berkane) ---
    {
        nom: "Oriental security",
        secteur: "Réseaux / Sécurité / Télécoms",
        ville: "Berkane",
        categorie: "Sécurité & Services",
        site: "oriental.security",
        email: "zouggagh15@gmail.com",
        tel: "+212 6 39 97 02 77",
        desc: "Intégration de solutions de sécurité, vidéosurveillance et réseaux informatiques.",
        opps: "Stage technique réseaux & sécurité",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "For Security Main Berkane",
        secteur: "Sécurité Électronique",
        ville: "Berkane",
        categorie: "Sécurité & Services",
        site: "—",
        email: "—",
        tel: "06 00 75 09 06",
        desc: "Installation, configuration et maintenance de systèmes de sécurité électronique d'entreprises.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Nouvelle catégorie : Logistique & Services ---
    {
        nom: "Delivery Guercif",
        secteur: "Livraison de repas / Logistique",
        ville: "Guercif",
        categorie: "Logistique & Services",
        site: "deliveryguercif.com",
        email: "guercifdelivery@gmail.com",
        tel: "06 42 61 34 11",
        desc: "Plateforme et service logistique de livraison express à Guercif.",
        opps: "Stage gestion de flux / opérationnel",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms & Réseaux (Guercif) ---
    {
        nom: "CYBER M@HOU",
        secteur: "Cybercafé / Services Internet",
        ville: "Guercif",
        categorie: "Télécoms & Réseaux",
        site: "—",
        email: "—",
        tel: "06 65 66 10 06",
        desc: "Espace public d'accès internet, impressions et services d'assistance administrative de proximité.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique & Services (Guercif) ---
    {
        nom: "Guercif voyages",
        secteur: "Agence de voyages / Tourisme / Réservation",
        ville: "Guercif",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "+212 6 61 72 92 68",
        desc: "Organisation de voyages, billetterie et solutions de transport/réservation pour particuliers et professionnels.",
        opps: "Stage conseiller de voyage / Gestion administrative",
        decider: "Gérant d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bouylaghmane Tours Guercif",
        secteur: "Agence de voyages / Tourisme",
        ville: "Guercif",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "+212 6 66 38 13 50",
        desc: "Services de transport touristique, excursions et gestion de réservations.",
        opps: "Candidature spontanée",
        decider: "Gérant d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique & Tech (Guercif) ---
    {
        nom: "Nassim SEO & Création Site Web",
        secteur: "Développement Web / SEO",
        ville: "Guercif",
        categorie: "Informatique & Tech",
        site: "nassimseo.com",
        email: "contact@nassimseo.com",
        tel: "06 69 94 75 15",
        desc: "Conception technique de sites web optimisés pour les moteurs de recherche et visibilité sur Google.",
        opps: "Stage Web Dev / SEO",
        decider: "Nassim Achahboune",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital (Guercif) ---
    {
        nom: "Zenclair",
        secteur: "Marketing Digital / Communication",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "zenclair.com/reseaux",
        email: "zenclair@gmail.com",
        tel: "05 35 67 64 98",
        desc: "Stratégies de communication numérique, gestion de marques et community management.",
        opps: "Stage Community Management",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "STE KAZID SARL",
        secteur: "Marketing Digital / Publicité en ligne",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "kazid.ma",
        email: "ste.kazid.sarl@gmail.com",
        tel: "Fixe: 05 35 20 24 52 | Mobiles: 06 15 92 84 59 / 06 67 76 82 55",
        desc: "Agence de publicité digitale spécialisée dans la création de campagnes publicitaires à fort impact.",
        opps: "Stage marketing / Graphisme",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "allo web site",
        secteur: "Création de Sites Web / Community Management / Design Graphique / Web Marketing",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "alloweb.ma",
        email: "contact@alloweb.ma",
        tel: "05 22 48 44 25",
        desc: "Solutions web globales incluant le design, le développement et le positionnement marketing digital.",
        opps: "Stage PFE / Web design & marketing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Print Excellence",
        secteur: "Impression Numérique / Graphisme",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "simozghida123@gmail.com",
        tel: "07 19 70 92 43",
        desc: "Prestations d'impression rapide, conception graphique de supports et identité visuelle.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Next Spark",
        secteur: "Marketing Digital / Publicité en ligne / Production audiovisuelle",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "nextspark.ma/agence/guercif/",
        email: "Zakaria@nextsaprk.ma",
        tel: "+212 6 66 61 99 92 / +212 6 66 7 9 726 5",
        desc: "Agence créative combinant marketing à la performance et production de contenus audiovisuels professionnels.",
        opps: "Stage Création vidéo / Community Management",
        decider: "Hatimi Zakaria",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Distribution (Guercif) ---
    {
        nom: "Agence Jumia – Guercif",
        secteur: "E-commerce",
        ville: "Guercif",
        categorie: "E-commerce & Distribution",
        site: "group.jumia.com/business/marketplace/buy",
        email: "—",
        tel: "06 66 18 34 59",
        desc: "Point relais officiel et antenne commerciale locale de la place de marché e-commerce Jumia.",
        opps: "Stage logistique / Relation client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / Médias (Guercif) ---
    {
        nom: "PRINT DIGITAL",
        secteur: "Impression Numérique / Signalétique",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 26 15 19 51",
        desc: "Conception graphique, marquage publicitaire et travaux d'impression grand format.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Champrints",
        secteur: "Imprimerie / Publicité",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "champrints@gmail.com",
        tel: "06 60 12 15 72",
        desc: "Création de supports de communication visuelle et travaux d'imprimerie offset.",
        opps: "Stage graphisme / infographie",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "GUERCIF MEDIA",
        secteur: "Média / Communication / Design Graphique",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 72 88 29 66",
        desc: "Production de contenus médias locaux, communication digitale et création de visuels.",
        opps: "Stage création de contenu / Audiovisuel",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "dakirat guercif",
        secteur: "Audiovisuel / Production Média",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "dakiratguercif.blogspot.com",
        email: "stifo100@gmail.com",
        tel: "06 68 95 86 52",
        desc: "Blog média d'actualité locale, couverture événementielle et production de reportages vidéo.",
        opps: "Stage montage vidéo / Journalisme web",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bouziane HME",
        secteur: "Impression / Publicité",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 24 83 26 45",
        desc: "Atelier d'impression publicitaire et fourniture de supports visuels pour professionnels.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Imprimerie Nougd",
        secteur: "Imprimerie",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "chprint.sarl@gmail.com",
        tel: "06 40 13 19 99",
        desc: "Prestations complètes de reprographie, édition et impression sur mesure.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "C Print Guercif",
        secteur: "Impression Numérique",
        ville: "Guercif",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "07 67 43 25 08",
        desc: "Impression numérique rapide et mise en page de documents d'entreprise.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Distribution (Guercif) ---
    {
        nom: "TASSHILAT MOKHFI (تسهيلات الجيلالي)",
        secteur: "E-commerce / Services de proximité",
        ville: "Guercif",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "—",
        tel: "06 76 94 08 13",
        desc: "Point de vente multi-services et intermédiation commerciale e-commerce.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Nouvelle catégorie : Finance & Services (Figuig) ---
    {
        nom: "Banque Populaire Figuig",
        secteur: "Banque / Institutions Financières",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "—",
        email: "—",
        tel: "05 36 89 90 96",
        desc: "Agence bancaire principale assurant l'accompagnement financier des particuliers et professionnels de la région.",
        opps: "Stage d'application / Métiers de la banque",
        decider: "Directeur d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Banque Populaire – Agence Zenaga",
        secteur: "Banque / Institutions Financières",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "—",
        email: "—",
        tel: "—",
        desc: "Deuxième antenne locale de la Banque Populaire située dans le Ksar de Zenaga à Figuig.",
        opps: "Stage d'immersion / Guichet et conseil",
        decider: "Directeur d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "DAMANE CASH Figuig Centre",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "damanecash.ma",
        email: "—",
        tel: "05 36 89 72 72",
        desc: "Établissement de paiement de proximité : transfert d'argent national/international et paiement de factures.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms & Réseaux (Figuig) ---
    {
        nom: "Orange (Boutique revendeur Figuig)",
        secteur: "Télécommunications",
        ville: "Figuig",
        categorie: "Télécoms & Réseaux",
        site: "orange.ma",
        email: "—",
        tel: "06 63 12 11 21",
        desc: "Espace commercial partenaire proposant les abonnements, recharges et terminaux mobiles de l'opérateur Orange.",
        opps: "Stage conseiller de vente",
        decider: "Responsable boutique",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services (Figuig) ---
    {
        nom: "Western Union — Agence Place Tachraft Zenaga",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "westernunion.com",
        email: "—",
        tel: "05 36 89 93 59",
        desc: "Services de transfert d'argent international et national de proximité.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Western Union — Agence Ksar Zenaga (Bd Med 5)",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "westernunion.com",
        email: "—",
        tel: "06 63 78 13 70",
        desc: "Point de retrait et d'envoi de fonds situé sur le Boulevard Mohammed V.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "MoneyGram — Agence Cashplus (Bd Hassan II)",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "moneygram.com",
        email: "customerservice@moneygram.com",
        tel: "05 36 89 93 70",
        desc: "Services d'envoi et de réception d'argent via le réseau Cash Plus.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "MoneyGram — Agence Attawfiq Micro-Finance (Bd Hassan II)",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "moneygram.com",
        email: "customerservice@moneygram.com",
        tel: "05 36 89 93 42",
        desc: "Services financiers MoneyGram adossés à la fondation de micro-finance Attawfiq.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Cash Plus Figuig",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Figuig",
        categorie: "Finance & Services",
        site: "cashplus.ma",
        email: "crc@cashplus.ma",
        tel: "05 36 89 93 70",
        desc: "Succursale multi-services : transfert d'argent, change, paiement de taxes et recharges.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique & Services / Tourisme (Figuig) ---
    {
        nom: "Auberge Oasis Figuig",
        secteur: "Hébergement touristique (auberge)",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "naturepatrimoine.org",
        email: "—",
        tel: "05 36 89 92 20",
        desc: "Établissement d'accueil touristique axé sur la valorisation de la nature et du patrimoine oasien.",
        opps: "Stage accueil / Gestion hôtelière / Tourisme",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Riad Izraren Maison d'hôtes",
        secteur: "Hébergement touristique (guest house)",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 62 67 65 54",
        desc: "Maison d'hôtes traditionnelle offrant des services d'hébergement et de restauration au cœur de Figuig.",
        opps: "Stage tourisme / Gestion opérationnelle",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "La Maison de Nanna",
        secteur: "Hébergement touristique (maison d'hôtes)",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "la-maison-de-nanna.com",
        email: "maisonnanna@gmail.com",
        tel: "+212 5 36 89 75 70",
        desc: "Maison d'hôtes réputée proposant une immersion authentique dans la culture oasienne.",
        opps: "Stage tourisme / Relation client",
        decider: "Bassim Younes",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Dar Amane Maison d'hôtes",
        secteur: "Hébergement touristique (maison d'hôtes)",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "+33 6 30 81 93 20",
        desc: "Hébergement touristique alliant confort moderne et architecture traditionnelle de Figuig.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "CTM Figuig",
        secteur: "Transport de voyageurs / Messagerie",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "ctm.ma",
        email: "—",
        tel: "05 21 64 06 40",
        desc: "Agence de la Compagnie de Transports au Maroc, assurant le transport interurbain et la messagerie express.",
        opps: "Stage gestion logistique / Exploitation",
        decider: "Responsable d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Nouvelle catégorie ou rattaché à "Industrie, Agriculture & BTP" (Figuig) ---
    {
        nom: "Écoconstructeur",
        secteur: "Construction / BTP (éco-construction)",
        ville: "Figuig",
        categorie: "Formation & Conseil", // Classé ici à défaut ou pour son volet conseil/innovation durable
        site: "—",
        email: "—",
        tel: "06 22 10 41 05",
        desc: "Entreprise spécialisée dans la construction durable et le BTP utilisant des matériaux locaux respectueux de l'environnement.",
        opps: "Stage génie civil / Éco-construction",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Pépinière des Palmiers Figuig",
        secteur: "Agriculture / Pépinière",
        ville: "Figuig",
        categorie: "E-commerce & Distribution", // Classé ici pour la fourniture et distribution de plants
        site: "—",
        email: "—",
        tel: "05 36 89 93 26",
        desc: "Production, culture et vente de palmiers-dattiers et végétaux adaptés au climat oasien.",
        opps: "Stage agronomie / Gestion de production",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Ferme BIOTAJ",
        secteur: "Agriculture biologique (ferme)",
        ville: "Figuig",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "—",
        tel: "+33 6 86 63 51 76",
        desc: "Exploitation agricole spécialisée dans la production biologique et la valorisation des produits du terroir de Figuig.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms & Réseaux (Figuig) ---
    {
        nom: "Maroc Telecom (Agence Officielle Figuig)",
        secteur: "Télécommunications",
        ville: "Figuig",
        categorie: "Télécoms & Réseaux",
        site: "iam.ma",
        email: "—",
        tel: "—",
        desc: "Agence commerciale officielle de l'opérateur historique national pour la gestion des lignes fixes, mobiles et internet.",
        opps: "Stage commercial / Support client",
        decider: "Chef d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique & Tech (Figuig) ---
    {
        nom: "FigArt",
        secteur: "Services numériques / Conception de sites web",
        ville: "Figuig",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "06 71 48 61 91",
        desc: "Agence locale de services du numérique, spécialisée dans la création de sites internet et l'accompagnement digital.",
        opps: "Stage Web Dev / Création Graphique",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Distribution (Figuig & Jerada) ---
    {
        nom: "Agence ABB Figuig",
        secteur: "E-commerce / Livraison",
        ville: "Figuig",
        categorie: "E-commerce & Distribution",
        site: "jumia.ma",
        email: "—",
        tel: "05 22 04 18 18",
        desc: "Point relais logistique et services de livraison de proximité pour les commandes e-commerce.",
        opps: "Stage logistique / Gestion des colis",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Marché aux Légumes & Fruits",
        secteur: "Commerce / Alimentation (épicerie)",
        ville: "Figuig",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "—",
        tel: "06 61 98 19 60",
        desc: "Commerce de distribution de produits frais et alimentation générale.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Électroménager Figuig",
        secteur: "Commerce d'électroménager",
        ville: "Figuig",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "electro.figuig@gmail.com",
        tel: "06 66 85 45 15",
        desc: "Vente et distribution d'appareils électroménagers et équipements pour la maison.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Digital Luxury",
        secteur: "E-commerce / Commerce",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "spreadshirt.com",
        email: "—",
        tel: "06 71 33 46 91",
        desc: "Boutique en ligne et commerce électronique spécialisé dans les produits et designs personnalisés.",
        opps: "Stage e-commerce / Print on demand",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Hicham Distribution Jerada",
        secteur: "Production / Messagerie / Commerce",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "—",
        tel: "06 69 09 49 88",
        desc: "Services de distribution commerciale, messagerie de colis et logistique locale.",
        opps: "Candidature spontanée",
        decider: "Hicham",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / Audiovisuel (Figuig & Jerada) ---
    {
        nom: "Brand up Digital",
        secteur: "Création de sites web / SEO / Stratégies digitales / Data / Marketing Digital",
        ville: "Figuig",
        categorie: "Marketing & Digital",
        site: "saadrachid.net",
        email: "saadrachid.4r@gmail.com",
        tel: "06 00 63 74 04 / 06 61 77 16 66",
        desc: "Agence de performance digitale spécialisée dans l'optimisation SEO, le développement web et l'analyse de données.",
        opps: "Stage Web Dev / SEO / Growth Marketing",
        decider: "Saad Rachid",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Desert Events S.N.C",
        secteur: "Communication / Événementiel",
        ville: "Figuig",
        categorie: "Marketing & Digital",
        site: "desertevents.ma",
        email: "desertevents.contact@gmail.com",
        tel: "06 66 28 95 04",
        desc: "Organisation d'événements, communication corporate et valorisation d'événements à dimension culturelle ou oasienne.",
        opps: "Stage communication / Événementiel",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Qumrah Production",
        secteur: "Production / Audiovisuel",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "qumrahproduction.com",
        email: "qumrahproduction@gmail.com",
        tel: "06 09 87 96 50",
        desc: "Studio de création de contenus audiovisuels, réalisation de vidéos corporatives et couverture média.",
        opps: "Stage montage vidéo / Cadrage / Photographie",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique & Services / Tourisme (Figuig & Jerada) ---
    {
        nom: "Snack Aziz",
        secteur: "Restauration",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 67 18 35 55",
        desc: "Établissement de restauration rapide de proximité.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Hôtel Manzah Figuig",
        secteur: "Hébergement / Tourisme",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 61 36 08 12",
        desc: "Établissement hôtelier historique accueillant les visiteurs et touristes à Figuig.",
        opps: "Stage hôtellerie / Accueil et réception",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Mohamed Figuig Tour Guide",
        secteur: "Tourisme / Guide de randonnée",
        ville: "Figuig",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 16 93 79 98",
        desc: "Services d'accompagnement touristique, guidage culturel et organisation de randonnées oasiennes.",
        opps: "Candidature spontanée (Co-guidage / Tourisme)",
        decider: "Mohamed",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "ALLO AJI Jerada",
        secteur: "Messagerie / Transport",
        ville: "Jerada",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 25 32 91 08",
        desc: "Service de livraison express, courses à la demande et messagerie de proximité à Jerada.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique & Tech (Figuig) ---
    {
        nom: "Magasin d'Accessoires Informatique & Mobile",
        secteur: "Commerce / Accessoires Informatique & Mobile",
        ville: "Figuig",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "06 67 17 73 55",
        desc: "Vente de périphériques informatiques, accessoires pour smartphones et maintenance rapide.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services (Jerada) ---
    {
        nom: "DAMANE CASH Jerada",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Jerada",
        categorie: "Finance & Services",
        site: "damanecash.ma",
        email: "—",
        tel: "06 64 92 62 89 / 06 17 36 75 34",
        desc: "Point de services financiers de proximité assurant les transferts d'argent et les règlements de factures.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / Audiovisuel (Jerada) ---
    {
        nom: "Studio Halhal",
        secteur: "Photographe / Designer graphique",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 79 11 05 63",
        desc: "Prestations de photographie professionnelle, couverture d'événements et création graphique sur mesure.",
        opps: "Stage graphisme / Photographie",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Desing Meryem",
        secteur: "Design / Création",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "07 66 65 72 02",
        desc: "Atelier de conception visuelle et design créatif de proximité.",
        opps: "Candidature spontanée",
        decider: "Meryem",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Jerada 52",
        secteur: "Imprimerie / Publicité",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "jeradaoriginale.ma",
        email: "—",
        tel: "—",
        desc: "Conception de supports publicitaires imprimés et solutions visuelles pour les professionnels locaux.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Abderrahmani Mohammed Imprimerie",
        secteur: "Imprimerie / Publicité",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 61 99 59 44",
        desc: "Services d'imprimerie traditionnelle, reprographie et création publicitaire.",
        opps: "Candidature spontanée",
        decider: "Abderrahmani Mohammed",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "megahicham",
        secteur: "Marketing / Publicité",
        ville: "Jerada",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "06 53 03 55 03",
        desc: "Conseil en communication, marketing de proximité et gestion publicitaire.",
        opps: "Stage marketing / Vente",
        decider: "Hicham",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique, Transport & Services (Jerada) ---
    {
        nom: "SAT Transport",
        secteur: "Transport / Messagerie",
        ville: "Jerada",
        categorie: "Logistique & Services",
        site: "sat.com",
        email: "—",
        tel: "06 61 04 79 17",
        desc: "Société de transport routier de marchandises, de voyageurs et solutions de messagerie express.",
        opps: "Stage logistique / Gestion des flux",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Transport Tgafaît",
        secteur: "Transport",
        ville: "Jerada",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "—",
        desc: "Services de transport local et régional reliant Jerada et l'oasis de Tgafaît.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "MOLTAKA VOYAGE",
        secteur: "Agence de voyage / Transport",
        ville: "Jerada",
        categorie: "Logistique & Services",
        site: "moultakavoyage.com",
        email: "moltakavoyages@gmail.com",
        tel: "06 68 33 01 06",
        desc: "Agence de voyages spécialisée dans l'organisation de séjours, transport touristique et billetterie.",
        opps: "Stage agent de voyage / Tourisme",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "MANAJIM CAR",
        secteur: "Location de voiture / Transport",
        ville: "Jerada",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "+33 6 59 64 15 91",
        desc: "Agence de location de véhicules touristiques et utilitaires à Jerada.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Distribution (Jerada) ---
    {
        nom: "Afriquia Jerada",
        secteur: "Service / Commerce / Énergie",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "afriquia.ma",
        email: "—",
        tel: "05 20 10 00 58",
        desc: "Station-service et espace de distribution commerciale du réseau national Afriquia.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Agence Al Barid Bank HASSIBLAL",
        secteur: "Services financiers / Retrait E-commerce",
        ville: "Jerada",
        categorie: "Finance & Services",
        site: "group.jumia.com",
        email: "—",
        tel: "08 02 00 60 60",
        desc: "Bureau de poste et services financiers de proximité faisant office de guichet d'accès et intermédiation.",
        opps: "Stage services financiers / Relation client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "BIGI FASHION",
        secteur: "E-commerce / Mode",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "bigifashion.ma",
        email: "—",
        tel: "05 38 95 02 94",
        desc: "Boutique en ligne et plateforme e-commerce spécialisée dans le prêt-à-porter et la mode.",
        opps: "Stage gestion de catalogue web / E-commerce",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "vetadigital",
        secteur: "Marketing / E-commerce",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "agence.vetadigital.com",
        email: "—",
        tel: "06 76 11 66 95",
        desc: "Solutions d'accompagnement pour les boutiques en ligne et stratégies de vente à la performance.",
        opps: "Stage marketing digital / E-commerce",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Pieces Automobile Jerada",
        secteur: "Automobile / Commerce",
        ville: "Jerada",
        categorie: "E-commerce & Distribution",
        site: "—",
        email: "—",
        tel: "06 71 23 59 64",
        desc: "Magasin de revente et distribution de pièces de rechange et d'accessoires automobiles.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms, Réseaux & Informatique (Jerada & Driouch) ---
    {
        nom: "Agence inwi Jerada",
        secteur: "Publicité / Informatique / Télécoms",
        ville: "Jerada",
        categorie: "Télécoms & Réseaux",
        site: "inwi.ma",
        email: "—",
        tel: "06 65 33 61 92",
        desc: "Boutique agréée de l'opérateur inwi assurant les services numériques et télécoms de proximité.",
        opps: "Stage conseiller commercial",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Agence inwi Driouch",
        secteur: "Téléphonie mobile / Télécoms",
        ville: "Driouch",
        categorie: "Télécoms & Réseaux",
        site: "inwi.ma",
        email: "—",
        tel: "06 26 26 14 26",
        desc: "Point de vente officiel et support client inwi dans la province de Driouch.",
        opps: "Stage vente / Service client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services / Assurances (Jerada) ---
    {
        nom: "Sanlam - Agence Hassania Jerada",
        secteur: "Assurance",
        ville: "Jerada",
        categorie: "Finance & Services",
        site: "agences.sanlam.ma",
        email: "—",
        tel: "05 36 82 19 28",
        desc: "Cabinet de courtage et d'assurance proposant les solutions de prévoyance et couverture Sanlam Maroc.",
        opps: "Stage conseiller commercial en assurance",
        decider: "Directeur d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "WAFA ASSURANCE JERADA",
        secteur: "Assurance",
        ville: "Jerada",
        categorie: "Finance & Services",
        site: "wafaassurance.ma",
        email: "consultation@wafaassurance.co.ma",
        tel: "05 22 54 55 55 (Siège)",
        desc: "Agence locale de la compagnie leader Wafa Assurance pour les particuliers, professionnels et entreprises.",
        opps: "Stage commercial / Gestion des dossiers",
        decider: "Chef d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Industrie, Infrastructure & BTP (Jerada) ---
    {
        nom: "STECT - Société des Travaux d'Etanchéité",
        secteur: "BTP / Construction",
        ville: "Jerada",
        categorie: "Formation & Conseil", // Catégorie technique
        site: "—",
        email: "—",
        tel: "06 66 62 42 83",
        desc: "Entreprise du bâtiment spécialisée dans les travaux d'étanchéité, d'isolation et d'infrastructure.",
        opps: "Stage génie civil / Conduite de travaux",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique & Tech (Jerada) ---
    {
        nom: "Mostaphasoft",
        secteur: "Informatique",
        ville: "Jerada",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "—",
        desc: "Services d'ingénierie logicielle informatique et maintenance applicative locale.",
        opps: "Candidature spontanée",
        decider: "Mustapha",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Escodev Engineering",
        secteur: "Informatique / Développement",
        ville: "Jerada",
        categorie: "Informatique & Tech",
        site: "—",
        email: "—",
        tel: "05 36 82 16 89",
        desc: "Bureau d'études et de développement informatique informatique, conception de solutions logicielles.",
        opps: "Stage Développement Web / Logiciel",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Télécoms & Réseaux (Driouch) ---
    {
        nom: "Boutique inwi Driouch",
        secteur: "Téléphonie mobile / Télécoms",
        ville: "Driouch",
        categorie: "Télécoms & Réseaux",
        site: "inwi.ma",
        email: "—",
        tel: "06 26 80 00 07",
        desc: "Boutique réseau officielle inwi assurant le service client, les abonnements et la vente de terminaux.",
        opps: "Stage conseiller de vente / Relation client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Maroc Telecom (Agence Driouch)",
        secteur: "Opérateur télécom",
        ville: "Driouch",
        categorie: "Télécoms & Réseaux",
        site: "iam.ma",
        email: "—",
        tel: "05 36 36 68 92",
        desc: "Agence commerciale principale de l'opérateur historique national pour la gestion des lignes fixes et internet.",
        opps: "Stage d'application / Support commercial",
        decider: "Chef d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Orange (Boutique Driouch)",
        secteur: "Téléphonie mobile / Télécoms",
        ville: "Driouch",
        categorie: "Télécoms & Réseaux",
        site: "orange.ma",
        email: "—",
        tel: "06 60 14 18 24",
        desc: "Espace commercial Orange de proximité proposant les offres mobiles, fixes et recharges de l'opérateur.",
        opps: "Stage conseiller commercial",
        decider: "Responsable boutique",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services / Assurances (Driouch) ---
    {
        nom: "Axa - Bureau Direct DRIOUCH",
        secteur: "Agence d'assurance",
        ville: "Driouch",
        categorie: "Finance & Services",
        site: "axa.ma",
        email: "—",
        tel: "05 36 36 78 65",
        desc: "Bureau direct AXA Assurance Maroc offrant des solutions de couverture auto, santé et prévoyance.",
        opps: "Stage conseiller en assurance / Gestion de dossiers",
        decider: "Directeur d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Crédit du Maroc Driouch",
        secteur: "Banque / Institutions Financières",
        ville: "Driouch",
        categorie: "Finance & Services",
        site: "creditdumaroc.ma",
        email: "—",
        tel: "05 22 47 74 77 (Siège)",
        desc: "Agence bancaire universelle assurant l'accompagnement financier des particuliers, professionnels et MRE.",
        opps: "Stage d'initiation bancaire / Guichet et conseil",
        decider: "Directeur d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Matu Assurance - Driouch",
        secteur: "Compagnie d'assurance",
        ville: "Driouch",
        categorie: "Finance & Services",
        site: "matu-assurance.ma",
        email: "info@matu-assurance.ma",
        tel: "05 36 36 76 19",
        desc: "Mutuelle d'assurance spécialisée dans la couverture des risques de transport et la prévoyance.",
        opps: "Candidature spontanée",
        decider: "Chef d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Formation & Conseil / Traduction & Data (Driouch) ---
    {
        nom: "ARABIKA Driouch - Traduction & Services",
        secteur: "Service de traduction",
        ville: "Driouch",
        categorie: "Formation & Conseil",
        site: "arabika.ma",
        email: "info@arabika.nl",
        tel: "05 36 36 70 22",
        desc: "Cabinet professionnel spécialisé dans les traductions assermentées et les formalités de services internationaux.",
        opps: "Stage assistant de traduction / Gestion administrative",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "ROUMA AGENCE",
        secteur: "Association / Services",
        ville: "Driouch",
        categorie: "Formation & Conseil",
        site: "—",
        email: "—",
        tel: "06 60 68 49 64",
        desc: "Structure associative locale d'appui aux projets de développement et services communautaires.",
        opps: "Bénévolat / Stage projet associatif",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Infobel Data Driouch",
        secteur: "Data / Annuaires B2B",
        ville: "Driouch",
        categorie: "Informatique & Tech",
        site: "infobel.com",
        email: "info@infobel.com",
        tel: "+32 2 379 29 40",
        desc: "Base de données d'informations commerciales et cartographie d'entreprises à l'échelle internationale.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique, Transport & Services / Tourisme (Driouch) ---
    {
        nom: "Transport Select - Driouch",
        secteur: "Service de transport",
        ville: "Driouch",
        categorie: "Logistique & Services",
        site: "transselect.ma",
        email: "contact@transselect.ma",
        tel: "05 36 36 76 50",
        desc: "Société de solutions logistiques et de transport routier national de marchandises.",
        opps: "Stage logistique / Exploitation des transports",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "CTM Driouch",
        secteur: "Billetterie de bus / Messagerie",
        ville: "Driouch",
        categorie: "Logistique & Services",
        site: "ctm.ma",
        email: "—",
        tel: "05 21 64 06 40",
        desc: "Guichet officiel de la CTM assurant les départs interurbains de passagers et le dépôt/retrait de colis express.",
        opps: "Stage relation client / Gestion de guichet",
        decider: "Responsable d'agence",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Sté MID-RIF Car",
        secteur: "Location de voitures",
        ville: "Driouch",
        categorie: "Logistique & Services",
        site: "—",
        email: "—",
        tel: "06 73 03 88 24",
        desc: "Agence locale de location de véhicules courtes et moyennes durées.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Hôtel Driouch : Gîte Écotourisme Rural",
        secteur: "Hébergement touristique (gîte)",
        ville: "Driouch",
        categorie: "Logistique & Services",
        site: "hoteldriouch.com",
        email: "info@hoteldriouch.com",
        tel: "+32 477 70 80 40",
        desc: "Complexe d'hébergement éco-touristique mettant en valeur l'environnement rural et les produits du terroir du Rif.",
        opps: "Stage tourisme rural / Gestion éco-gîte",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / Médias / Arts (Driouch) ---
    {
        nom: "MY Design",
        secteur: "Design / Création Visuelle",
        ville: "Driouch",
        categorie: "Marketing & Digital",
        site: "linktr.ee/mydesign",
        email: "emydesigne15@gmail.com",
        tel: "07 18 99 95 43",
        desc: "Studio de design indépendant axé sur l'identité visuelle de marque et la création de contenus graphiques.",
        opps: "Stage création graphique / Portfolio",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Zeemarke",
        secteur: "Marketing digital",
        ville: "Driouch",
        categorie: "Marketing & Digital",
        site: "zeemarke.com",
        email: "info@zeemarke.com",
        tel: "06 73 71 28 47",
        desc: "Agence de marketing digital axée sur la publicité en ligne, la gestion de réseaux et le positionnement web.",
        opps: "Stage Community Management / Marketing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "amigo negoce",
        secteur: "Imprimerie / Publicité",
        ville: "Driouch",
        categorie: "Marketing & Digital",
        site: "amigo-negoce-new.business.site",
        email: "amigopub@gmail.com",
        tel: "05 36 36 62 16",
        desc: "Atelier d'impression publicitaire, supports d'enseignes et travaux de reprographie d'entreprise.",
        opps: "Stage infographie / Techniques d'impression",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "aswatdriouch (اصوات الدريوش)",
        secteur: "Média / Presse",
        ville: "Driouch",
        categorie: "Marketing & Digital",
        site: "aswatdriouch.com",
        email: "—",
        tel: "06 61 67 70 66",
        desc: "Portail d'actualités et plateforme de presse numérique couvrant l'information de la province de Driouch.",
        opps: "Stage journalisme web / Correspondant local",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Labo kartirou de photo",
        secteur: "Labo photo / Imagerie",
        ville: "Driouch",
        categorie: "Marketing & Digital",
        site: "—",
        email: "studio_kartirou@hotmail.fr",
        tel: "06 66 48 57 72",
        desc: "Studio de développement photographique, tirages professionnels et portraits.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Distribution / Électronique (Driouch) ---
    {
        nom: "Ste Comptoir Driouch Sarl",
        secteur: "Construction / Matériaux",
        ville: "Driouch",
        categorie: "E-commerce & Distribution",
        site: "e-comptoirdriouch.ma",
        email: "Stecomptoirdriouch@gmail.com",
        tel: "05 36 36 74 32",
        desc: "Comptoir commercial de revente et distribution de matériaux de construction et de quincaillerie générale.",
        opps: "Stage technico-commercial",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Electronic Store Driouch",
        secteur: "Électronique / Vente",
        ville: "Driouch",
        categorie: "E-commerce & Distribution",
        site: "electronicstore.ma",
        email: "contact@electronicstore.ma",
        tel: "+212 6 72 33 90 89",
        desc: "Boutique spécialisée dans la vente de composants électroniques, outillages et solutions technologiques.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / Communication (Nador) ---
    {
        nom: "Nadormarketing",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "nadormarketing.ma",
        email: "contact@nadormarketing.ma",
        tel: "06 52 67 67 58",
        desc: "Agence de marketing digital locale proposant des stratégies de communication et visibilité en ligne.",
        opps: "Stage Community Management / Growth",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Palmait - Digital Marketing Agency",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "07 01 70 95 85",
        desc: "Agence créative spécialisée dans la gestion des réseaux sociaux et la publicité numérique.",
        opps: "Stage marketing digital / Graphisme",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "So Agency - Digital Agency",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "soagency.ma",
        email: "contact@sonexus.agency",
        tel: "+212 6 39 25 45 42",
        desc: "Agence digitale spécialisée dans l'accompagnement 360, l'image de marque et l'acquisition client.",
        opps: "Stage social media / Content marketing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Oramid",
        secteur: "Marketing agency / Agence de communication",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "oramid.com",
        email: "—",
        tel: "06 31 90 69 15",
        desc: "Agence conseil en communication globale, branding, événementiel et publicité.",
        opps: "Stage gestion de projet comm / Relations publiques",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "KNOWTEQ",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "knowteq.ma",
        email: "info@knowteq.ma",
        tel: "06 45 45 50 60",
        desc: "Services de conseil en stratégie digitale, e-commerce et solutions technologiques innovantes.",
        opps: "Stage marketing / Business Development",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "ArtgonMEDIA",
        secteur: "Advertising agency / Communication",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "artgonmedia.online",
        email: "—",
        tel: "06 81 16 93 46",
        desc: "Agence de publicité, production de contenus multimédias et campagnes publicitaires ciblées.",
        opps: "Stage création de contenu / Audiovisuel",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Graphi Code Info",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "—",
        email: "—",
        tel: "07 70 48 82 21",
        desc: "Studio combinant conception graphique, identité visuelle et support en communication digitale.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Media Techly - Digital Marketing Agency",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "mediatechly.com",
        email: "Contact@MediaTechly.com",
        tel: "+212 5 36 38 38 23",
        desc: "Agence digitale axée sur la performance, les campagnes Google/Meta Ads et le SEO.",
        opps: "Stage trafic manager / SEO expert",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "BWD Agency (Agence Digital 360)",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "bwdagency.fr",
        email: "—",
        tel: "06 10 97 83 23",
        desc: "Agence digitale internationale opérant sur des projets de transformation numérique à 360°.",
        opps: "Stage Webmarketing / Gestion de compte client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Mr content - Agence marketing digital",
        secteur: "Marketing agency digital",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "mrcontent.ma",
        email: "contact@mrcontent.ma",
        tel: "07 08 26 18 67",
        desc: "Spécialistes de la création de contenu de marque, du copywriting et du marketing d'influence.",
        opps: "Stage rédaction web / Copywriting",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Teffras – Digital Marketing & Publicidad",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "teffras.com",
        email: "—",
        tel: "06 23 75 25 04",
        desc: "Agence transfrontalière offrant des services de publicité et marketing en langues arabe et espagnole.",
        opps: "Stage traducteur marketing / Relations Espagne",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Brandin' Stark - Digital Marketing Agency",
        secteur: "Advertising agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "brandinstark.com",
        email: "contact@brandinstark.com",
        tel: "07 71 94 24 19",
        desc: "Studio créatif focalisé sur le branding de marque, le packaging et les campagnes publicitaires d'envergure.",
        opps: "Stage Designer de marque / UX-UI",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "creatbiz-digital marketing agency",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "creatbiz.com",
        email: "—",
        tel: "06 77 64 54 39",
        desc: "Accompagnement de projets de création d'entreprises et mise en place de tunnels de vente digitaux.",
        opps: "Stage consultant e-commerce / Marketing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Agence Majorelle Communication Marketing",
        secteur: "Agence de publicité",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "majorelle-communication.business.site",
        email: "—",
        tel: "07 02 88 88 86",
        desc: "Conception graphique d'enseignes, d'habillage vitrine et de supports publicitaires imprimés/digitaux.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Profilm",
        secteur: "Production vidéo / Audiovisuel",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "profilm.ma",
        email: "contact@profilm.ma",
        tel: "06 61 67 77 05",
        desc: "Maison de production vidéo haut de gamme : spots publicitaires, documentaires et films d'entreprise.",
        opps: "Stage montage vidéo / Cadrage pro / Effets spéciaux",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique, Tech & Développement (Nador) ---
    {
        nom: "Nadoweb",
        secteur: "Software company",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "nadoweb.com",
        email: "contact@nadoweb.com",
        tel: "06 61 29 47 86",
        desc: "Éditeur de logiciels sur mesure et d'applications mobiles performantes pour entreprises.",
        opps: "Stage développement Full-Stack React/Node",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Webtool",
        secteur: "Conseil informatique",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "webtool.ma",
        email: "contact@webtool.ma",
        tel: "+212 5 36 60 33 86 / 06 71 52 43 95",
        desc: "Cabinet d'audit de systèmes d'information, infogérance et intégration de solutions cloud.",
        opps: "Stage administration systèmes et réseaux / Cloud",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "xDrx",
        secteur: "Création de sites web",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "xdrx.us",
        email: "Me@xdrx.us",
        tel: "06 61 10 59 65",
        desc: "Studio de développement web agile axé sur l'international et les architectures web modernes.",
        opps: "Stage intégrateur Web / WordPress / Jamstack",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Haytham MultiServices",
        secteur: "Hébergement web / Services internet",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "—",
        email: "wakala.lforsa@gmail.com",
        tel: "06 44 96 97 48",
        desc: "Fourniture de noms de domaine, hébergement de sites web et assistance technique de proximité.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "SpaceIT IT Solutions",
        secteur: "Support et services informatiques",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "spaceitso.com",
        email: "contact@spaceitso.com",
        tel: "06 30 40 60 00",
        desc: "Assistance technique informatique, maintenance de parcs d'ordinateurs et installation réseaux.",
        opps: "Stage technicien support informatique / Réseau",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Amine smart engineering",
        secteur: "Vente de matériel informatique / Installation de systèmes de sécurité",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "ase-tech.ma",
        email: "—",
        tel: "06 13 78 96 42",
        desc: "Expertise en systèmes de vidéosurveillance, contrôle d'accès et distribution de matériel informatique.",
        opps: "Stage installateur systèmes sécurité / Domotique",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Anass Computer Repair Service and Store",
        secteur: "Vente de matériel informatique",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "extragamer.ma",
        email: "—",
        tel: "06 21 15 51 55",
        desc: "Boutique spécialisée dans la vente de configurations Gaming, pièces détachées et réparation d'ordinateurs.",
        opps: "Candidature spontanée / Maintenance hardware",
        decider: "Anass",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "NADIGIT Consulting",
        secteur: "Développement de logiciels / Support et services informatiques",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "nadigit.com",
        email: "contact@nadigit.ma",
        tel: "05 36 33 61 66",
        desc: "Cabinet d'ingénierie et consulting logiciel pour la transformation digitale des moyennes et grandes entreprises.",
        opps: "Stage consultant IT / Business Analyst",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Formation & Conseil (Nador) ---
    {
        nom: "YouCode Nador",
        secteur: "Centre de formation aux métiers du numérique",
        ville: "Nador",
        categorie: "Formation & Conseil",
        site: "youcode.ma",
        email: "—",
        tel: "—",
        desc: "École de code inclusive d'excellence propulsée par le Groupe OCP et Simplon, formant les talents de demain au développement logiciel.",
        opps: "Interventions / Projets collaboratifs / Partenariats de recrutement",
        decider: "Responsable de campus",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Industrie, Infrastructure & BTP (Nador) ---
    {
        nom: "Ventacon Sarl",
        secteur: "Construction / BTP",
        ville: "Nador",
        categorie: "Formation & Conseil", // Rangée ici pour le volet ingénierie/BTP
        site: "ventacon.net",
        email: "info@ventacon.net",
        tel: "06 89 54 51 52",
        desc: "Entreprise générale de bâtiment réalisant de grands travaux d'infrastructure et de génie civil.",
        opps: "Stage conducteur de chantier / Génie civil",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Informatique, Tech & Développement (Nador & Taourirt) ---
    {
        nom: "Coworking Space Nador",
        secteur: "Espace de coworking / Tiers-lieu",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "coworkingspacenador.com",
        email: "spaceit.coworking@gmail.com",
        tel: "06 30 40 60 00",
        desc: "Espace de travail partagé et collaboratif proposant des bureaux privatifs, des postes nomades et des salles de réunion pour freelances et entreprises.",
        opps: "Stage événementiel / Gestion de communauté",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Smartclay",
        secteur: "Cybersécurité",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "smarteclay.com",
        email: "smarteclay@gmail.com",
        tel: "06 67 59 28 04",
        desc: "Cabinet d'expertise en sécurité informatique, audits de vulnérabilité et protection des données d'entreprise.",
        opps: "Stage auditeur sécurité / Pentesting",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Développeur informatique ma",
        secteur: "Création de sites web / Application Mobile",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "developpeur-informatique.ma",
        email: "contact@developpeur-informatique.ma",
        tel: "05 25 22 33 32",
        desc: "Agence de développement sur mesure d'applications métiers, plateformes web complexes et solutions mobiles.",
        opps: "Stage développement Mobile (Flutter/React Native)",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bmondial - Digital Transformation Company",
        secteur: "Software company",
        ville: "Nador",
        categorie: "Informatique & Tech",
        site: "bmondial.com",
        email: "contact@bmondial.com",
        tel: "06 51 82 58 57",
        desc: "Entreprise technologique spécialisée dans l'ingénierie logicielle et la transformation digitale des processus métiers.",
        opps: "Stage ingénieur d'études et développement",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "ONTECHNOLOGIE",
        secteur: "Société de logiciels (software)",
        ville: "Taourirt",
        categorie: "Informatique & Tech",
        site: "ontechnologie.com",
        email: "ontechnologie1@gmail.com",
        tel: "06 00 25 21 11",
        desc: "Éditeur de solutions logicielles d'entreprise et d'outils de gestion automatisés à Taourirt.",
        opps: "Stage développement logiciel / QA testing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "SasmaHosting",
        secteur: "Société de logiciels / Hébergement web",
        ville: "Taourirt",
        categorie: "Informatique & Tech",
        site: "sasmahosting.ma",
        email: "support@sasmahosting.ma",
        tel: "05 36 67 91 79",
        desc: "Fournisseur de solutions d'infrastructure cloud, serveurs dédiés, VPS et hébergement web sécurisé.",
        opps: "Stage administration systèmes Linux / Cloud",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Micolpe",
        secteur: "Société de logiciels (software)",
        ville: "Taourirt",
        categorie: "Informatique & Tech",
        site: "micolpe.com",
        email: "micolped@gmail.com",
        tel: "06 39 69 36 23",
        desc: "Conception, développement et maintenance d'applications web et de plateformes logicielles personnalisées.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Marketing & Digital / E-commerce (Nador & Taourirt) ---
    {
        nom: "riassiri",
        secteur: "Agence e-commerce",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "—",
        email: "mo_nassiri2017@hotmail.com",
        tel: "06 06 17 74 97",
        desc: "Consulting et déploiement de boutiques en ligne, gestion de flux e-commerce et stratégies de conversion.",
        opps: "Stage e-commerce / Webmarketing",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Medeva Solutions",
        secteur: "Marketing agency",
        ville: "Nador",
        categorie: "Marketing & Digital",
        site: "medevasolutions.com",
        email: "contact@medevasolutions.com",
        tel: "06 61 87 40 78",
        desc: "Agence conseil en stratégie de communication de marque, création visuelle et marketing digital de performance.",
        opps: "Stage social media manager / Graphiste",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Rhillane",
        secteur: "Marketing digital",
        ville: "Taourirt",
        categorie: "Marketing & Digital",
        site: "rhillane.com",
        email: "contact@rhillane.com",
        tel: "06 63 09 11 66",
        desc: "Prestations d'optimisation SEO, stratégie d'acquisition sur les moteurs de recherche et visibilité digitale.",
        opps: "Stage SEO / Copywriter",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Agence V5",
        secteur: "Marketing digital",
        ville: "Taourirt",
        categorie: "Marketing & Digital",
        site: "v5agence.com",
        email: "contact@v5agency.com",
        tel: "+212 6 61 19 61 47",
        desc: "Agence de communication numérique assurant le branding, l'achat média publicitaire et l'animation de réseaux sociaux.",
        opps: "Stage Community Management",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique, Services & Tourisme (Nador & Taourirt) ---
    {
        nom: "Kabdani Voyages",
        secteur: "Tourisme / Voyage",
        ville: "Nador",
        categorie: "Logistique & Services",
        site: "kabdani.ma",
        email: "—",
        tel: "05 36 33 43 43",
        desc: "Agence de voyages spécialisée dans les circuits touristiques, la billetterie internationale et l'organisation du Hajj/Omra.",
        opps: "Stage conseiller en billetterie / Accueil",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "ISRAE Voyages",
        secteur: "Agence de voyages / Tourisme",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "israevoyages.ma",
        email: "contact@israevoyages.ma",
        tel: "07 22 45 46 01",
        desc: "Opérateur de voyage local assurant les liaisons de transport, réservations hôtelières et excursions culturelles.",
        opps: "Stage gestionnaire de voyages / Agent d'accueil",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Formation, Conseil & Gestion (Taourirt) ---
    {
        nom: "Agence Taourirt (وكالة تاوريرت)",
        secteur: "Conseil en gestion d'entreprise",
        ville: "Taourirt",
        categorie: "Formation & Conseil",
        site: "—",
        email: "abdelaali-touzani@hotmail.com",
        tel: "06 36 01 91 88",
        desc: "Cabinet d'accompagnement juridique, comptable et conseil en gestion pour la création et le suivi des TPME.",
        opps: "Stage comptabilité / Secrétariat juridique",
        decider: "Abdelaali Touzani",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : E-commerce & Grande Distribution (Taourirt) ---
    {
        nom: "Agence Jumia - Bab Mrabaa - Taourirt",
        secteur: "Agence e-commerce",
        ville: "Taourirt",
        categorie: "E-commerce & Distribution",
        site: "group.jumia.com",
        email: "—",
        tel: "06 67 24 48 96",
        desc: "Agence et point de collecte officiel du réseau Jumia pour la gestion opérationnelle des flux e-commerce locaux.",
        opps: "Stage logistique de distribution / Service client",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Jumia Point Relais Taourirt",
        secteur: "E-commerce / Livraison",
        ville: "Taourirt",
        categorie: "E-commerce & Distribution",
        site: "jumia.ma",
        email: "—",
        tel: "06 67 24 48 96",
        desc: "Guichet de retrait de proximité pour les clients e-commerce de la province de Taourirt.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Atacadao Taourirt",
        secteur: "Commerce de gros / Cash & Carry",
        ville: "Taourirt",
        categorie: "E-commerce & Distribution",
        site: "atacadao.ma",
        email: "—",
        tel: "08 00 00 00 03 (Standard national)",
        desc: "Grande surface de cash & carry et distribution en gros/demi-gros pour les professionnels de l'alimentation et de la restauration.",
        opps: "Stage gestion des stocks / Chef de rayon / Logistique",
        decider: "Directeur de magasin",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Services Publics, Environnement & Artisanat (Taourirt) ---
    {
        nom: "Ozone Taourirt",
        secteur: "Environnement / Collecte déchets",
        ville: "Taourirt",
        categorie: "Formation & Conseil", // Catégorie environnementale/technique à défaut de "Services Publics"
        site: "ozone.ma",
        email: "contact@ozone.ma",
        tel: "05 36 69 94 34",
        desc: "Filiale du Groupe Ozone Environnement et Services assurant la gestion déléguée de la propreté urbaine et du traitement des déchets.",
        opps: "Stage management QSE / Logistique d'exploitation",
        decider: "Responsable d'exploitation Taourirt",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Menuiserie El Fath (نجارة الفتح تاوريرت)",
        secteur: "Artisanat / Menuiserie bois",
        ville: "Taourirt",
        categorie: "Formation & Conseil", // Catégorie technique
        site: "—",
        email: "—",
        tel: "06 68 65 95 15",
        desc: "Atelier artisanal de menuiserie, fabrication de mobilier en bois et aménagements intérieurs.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services / Assurances (Taourirt) ---
    {
        nom: "Sanlam Bureau Direct Taourirt",
        secteur: "Assurance / Sécurité",
        ville: "Taourirt",
        categorie: "Finance & Services",
        site: "sanlam.ma",
        email: "—",
        tel: "05 36 69 56 39",
        desc: "Bureau direct officiel du réseau de la compagnie d'assurance Sanlam Maroc pour la couverture des particuliers.",
        opps: "Stage conseiller commercial en assurance",
        decider: "Responsable de bureau",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Logistique, Services & Tourisme (Taourirt) ---
    {
        nom: "El Visado Taourirt",
        secteur: "Agence de voyages / Assistance Visa",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "el-visado.ma",
        email: "contact@el-visado.com",
        tel: "06 76 94 34 42",
        desc: "Agence spécialisée dans l'accompagnement aux démarches de visas, la constitution de dossiers consulaires et les services de voyages.",
        opps: "Stage conseiller clientèle / Gestion administrative",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Centre Smart Corner",
        secteur: "Tourisme / Centre d'information / Services",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "—",
        email: "cornerinfosmart@gmail.com",
        tel: "06 07 13 81 02",
        desc: "Point d'information, de services de proximité et d'orientation pour les visiteurs et les besoins administratifs locaux.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Industrie & Agriculture / Agroalimentaire (Taourirt) ---
    {
        nom: "AGROEST TAOURIRT",
        secteur: "Agriculture / Production végétale",
        ville: "Taourirt",
        categorie: "Industrie", // Idéal pour le secteur agro/production à grande échelle
        site: "agro-est.ma",
        email: "info.agroest@gmail.com",
        tel: "05 36 67 96 76",
        desc: "Exploitation et entreprise agricole spécialisée dans la production végétale, la culture moderne et la distribution de produits de la terre.",
        opps: "Stage technicien agricole / Gestion d'exploitation",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "RACHA OLIVES",
        secteur: "Agroalimentaire / Conserverie de table",
        ville: "Taourirt",
        categorie: "Industrie",
        site: "rachaolives.com",
        email: "—",
        tel: "05 36 69 59 86",
        desc: "Unité industrielle de traitement, de conditionnement et de mise en conserve d'olives de table destinées au marché national et à l'export.",
        opps: "Stage contrôle qualité / Conducteur de ligne de production",
        decider: "Directeur d'usine",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Bled Conserves",
        secteur: "Agroalimentaire / Industrie",
        ville: "Taourirt",
        categorie: "Industrie",
        site: "www.bledconserves.ma",
        email: "bledconserves@yahoo.fr",
        tel: "05 36 67 94 12", // Premier numéro du standard fourni
        desc: "Grande conserverie industrielle emblématique de la région de Taourirt, spécialisée dans la transformation et la conservation des produits agricoles.",
        opps: "Stage management de la qualité (HACCP) / Logistique industrielle",
        decider: "Direction des Ressources Humaines",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Restauration & Services de Livraison (Taourirt) ---
    {
        nom: "Master Place Restaurant",
        secteur: "Restauration / Livraison",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "behance.net", // Profil portfolio ou menu digital référencé
        email: "masterplace360@gmail.com",
        tel: "07 21 60 22 11",
        desc: "Établissement de restauration moderne proposant un service de restauration sur place et un réseau structuré de livraison à domicile.",
        opps: "Candidature spontanée / Service client",
        decider: "Responsable de site",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "Cheese Time",
        secteur: "Restauration / Livraison",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "cheesetime.ma",
        email: "—",
        tel: "06 51 99 99 97",
        desc: "Enseigne locale de restauration rapide spécialisée et service de livraison rapide sur la ville de Taourirt.",
        opps: "Candidature spontanée",
        decider: "Non public",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
    {
        nom: "AYAT Delivery",
        secteur: "Livraison de repas et colis",
        ville: "Taourirt",
        categorie: "Logistique & Services",
        site: "—",
        email: "ayat.delivery@gmail.com",
        tel: "06 46 98 30 04",
        desc: "Startup de livraison du dernier kilomètre opérant à Taourirt pour le compte des restaurants et du commerce de proximité.",
        opps: "Stage gestion des opérations de livraison / Support client",
        decider: "Fondateur / Gérant",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },

    // --- Suite : Finance & Services (Taourirt) ---
    {
        nom: "Tasshilat El Rhari",
        secteur: "Transfert d'argent / Services financiers",
        ville: "Taourirt",
        categorie: "Finance & Services",
        site: "—",
        email: "mohammedelrhari@gmail.com",
        tel: "06 64 24 20 65",
        desc: "Espace franchisé de services financiers de proximité, spécialisé dans le transfert d'argent national/international et le paiement de factures.",
        opps: "Stage agent de guichet / Gestion de caisse",
        decider: "Mohammed El Rhari",
        source: "Untitled spreadsheet - Sheet1.pdf"
    },
];

// =========================================================================
// ZOOM IN - ZOOM OUT//
// =========================================================================


   function setupZoom(zoomInId, zoomOutId, zoomResetId, levelId, targetSelector) {
    let scale = 1;
    const MIN = 0.3, MAX = 2, STEP = 0.15;

    const zoomIn    = document.getElementById(zoomInId);
    const zoomOut   = document.getElementById(zoomOutId);
    const zoomReset = document.getElementById(zoomResetId);
    const levelEl   = document.getElementById(levelId);
    const target    = document.querySelector(targetSelector);

    if (!zoomIn || !zoomOut || !target) return;

    function applyZoom() {
        target.style.transform = `scale(${scale})`;
        target.style.marginBottom = scale < 1
            ? `${-(target.offsetHeight * (1 - scale))}px`
            : '0';
        if (levelEl) levelEl.textContent = Math.round(scale * 100) + '%';
    }

    zoomIn.addEventListener('click', () => {
        scale = Math.min(MAX, parseFloat((scale + STEP).toFixed(2)));
        applyZoom();
    });

    zoomOut.addEventListener('click', () => {
        scale = Math.max(MIN, parseFloat((scale - STEP).toFixed(2)));
        applyZoom();
    });

    if (zoomReset) {
        zoomReset.addEventListener('click', () => {
            scale = 1;
            applyZoom();
        });
    }
}

// =========================================================================
// ÉVÉNEMENTS DOM (Une fois la page chargée)
// =========================================================================


document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des grilles
    globalRecommendedFilteredList = [...companiesDatabase];
    renderRecommendedGrid(true);

    // Tout votre code existant pour les sélections d'éléments, 
    // les ouvertures/fermetures de modaux, le CV builder, etc.
const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        searchInput.dispatchEvent(new Event("input"));
    });
}
});

function createCompanyCardHTML(company){

return `
<div class="company-card">

    <h3>${company.nom}</h3>

    <p><strong>Ville :</strong> ${company.ville}</p>

    <p><strong>Secteur :</strong> ${company.secteur}</p>

    <p>${company.desc}</p>

    <p>
        <strong>Site :</strong>

        ${
            company.site !== "—"

            ?

            `<a href="https://${company.site}" target="_blank">

                ${company.site}

            </a>`

            :

            "—"
        }

    </p>

    <p>

        <strong>Email :</strong>

        ${company.email}

    </p>

    <p>

        <strong>Téléphone :</strong>

        ${company.tel}

    </p>

</div>
`;

}

let currentRenderedCount = 0;

const INITIAL_LIMIT = 15;

const INCREMENT_LIMIT = 9;

let globalRecommendedFilteredList = [...companiesDatabase];

function renderRecommendedGrid(reset=false){



    
const container = document.getElementById("recommended-grid");

const loadMoreBtn = document.getElementById("load-more-btn");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            renderRecommendedGrid();
        });
    }



if(reset){

container.innerHTML="";

currentRenderedCount=0;

}

const nextCount = Math.min(

currentRenderedCount + (

currentRenderedCount===0

?

INITIAL_LIMIT

:

INCREMENT_LIMIT

),

globalRecommendedFilteredList.length

);

for(let i=currentRenderedCount;i<nextCount;i++){

container.innerHTML += createCompanyCardHTML(

globalRecommendedFilteredList[i]

);

}

currentRenderedCount=nextCount;

if (loadMoreBtn) {
    loadMoreBtn.style.display =
        currentRenderedCount < globalRecommendedFilteredList.length
        ? "block"
        : "none";
}

};


function renderDirectoryByCategory(generalSector) {
    const container = document.getElementById("directoryResults");
    if (!container) return;
    container.innerHTML = "";

    const filtered = companiesDatabase.filter(company => {
        // Split secteur on "/" and "," to handle compound sector strings
        const subSectors = company.secteur
            .split(/[\/,]/)
            .map(s => s.trim());

        return subSectors.some(sub => {
            const mapped = getGeneralSector(sub);
            return mapped === generalSector;
        });
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">Aucune entreprise trouvée pour ce secteur.</p>`;
        return;
    }

    filtered.forEach(company => {
        container.innerHTML += createCompanyCardHTML(company);
    });
}


document.querySelectorAll(".sector-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const sector = btn.getAttribute("data-sector") || btn.innerText;
        renderDirectoryByCategory(sector);
    });
});





    // =========================================================================
    // 1. ELEMENT SELECTIONS (Always at the top)
    // =========================================================================
    const searchInput = document.getElementById("search-bar");
    const companyCards = document.querySelectorAll(".company-card");
    
    // Help Form Modal Elements
    const openFormBtn = document.getElementById("openFormBtn");
    const formModal = document.getElementById("formModal");
    const closeFormBtn = document.getElementById("closeFormBtn");
    
    // CV Builder Modal Elements
    const openCvBuilder = document.getElementById("openCvBuilder");
    const builderModal = document.getElementById("builderModal");
    const closeCvBuilder = document.getElementById("closeCvBuilder");
    const downloadBtn = document.getElementById("downloadCV");
    const sortableContainer = document.querySelector(".cv-main");
    const upload = document.getElementById("photoUpload");
    const preview = document.getElementById("photoPreview");
    const restoreContainer = document.getElementById("restoreContainer");
    const edu = document.getElementById("educationContent");
    const title = document.querySelector(".edu-title");

    // =========================================================================
    // 2. CV BUILDER MODAL LOGIC (Open, Close, Outside Click)
    // =========================================================================
    if (openCvBuilder && builderModal) {
        openCvBuilder.addEventListener("click", (e) => {
            console.log("CV button clicked");
            e.preventDefault();
            builderModal.style.display = "flex";
        });
    }

    if (closeCvBuilder && builderModal) {
        closeCvBuilder.addEventListener("click", () => {
            builderModal.style.display = "none";
        });
    }

    // =========================================================================
    // 3. HELP FORM MODAL LOGIC (Open, Close)
    // =========================================================================
    if (openFormBtn && formModal) {
        openFormBtn.addEventListener("click", () => {
            formModal.style.display = "flex";
        });
    }

    if (closeFormBtn && formModal) {
        closeFormBtn.addEventListener("click", () => {
            formModal.style.display = "none";
        });
    }

    // Global Modal Click Outside to Close
    window.addEventListener("click", (e) => {
        if (e.target === formModal) {
            formModal.style.display = "none";
        }
        if (e.target === builderModal) {
            builderModal.style.display = "none";
        }
    });

    // =========================================================================
// GESTION DYNAMIQUE DU CHAMP "AUTRE" (FORMULAIRE D'AIDE)
// =========================================================================
const autreCheckbox = document.getElementById("autreCheckbox");
const customDomainItem = document.querySelector(".custom-domain-item");
const autreCustomInput = document.getElementById("autreCustomInput");

if (autreCheckbox && customDomainItem) {
    autreCheckbox.addEventListener("change", () => {
        if (autreCheckbox.checked) {
            customDomainItem.style.display = "block"; // On affiche le conteneur
            if (autreCustomInput) autreCustomInput.required = true; // Devient obligatoire si coché
        } else {
            customDomainItem.style.display = "none"; // On le masque
            if (autreCustomInput) {
                autreCustomInput.required = false;
                autreCustomInput.value = ""; // On vide le champ si décoché
            }
        }
    });
}

    // =========================================================================
    // 4. UI COMPONENTS LOGIC (Cards, Search, Sortable, Download)
    // =========================================================================
    // Expand / Collapse company cards
    companyCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    });

    // Search functionality placeholder
   
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const raw = searchInput.value.trim().toLowerCase();

        // Clear and show all if empty
        if (!raw) {
            globalRecommendedFilteredList = [...companiesDatabase];
            renderRecommendedGrid(true);
            document.getElementById("directoryResults").innerHTML = "";
            return;
        }

        const terms = raw.split(/\s+/); // support multi-word queries

        const filtered = companiesDatabase.filter(company => {
            const nom     = company.nom.toLowerCase();
            const ville   = company.ville.toLowerCase();
            const secteur = company.secteur.toLowerCase();
            const general = getGeneralSector(company.secteur).toLowerCase();

            return terms.every(term =>
                nom.includes(term)     ||
                ville.includes(term)   ||
                secteur.includes(term) ||
                general.includes(term)
            );
        });

        // Show results in both the recommended grid AND the directory
        globalRecommendedFilteredList = filtered;
        renderRecommendedGrid(true);

        const directoryContainer = document.getElementById("directoryResults");
        directoryContainer.innerHTML = "";

        if (filtered.length === 0) {
            directoryContainer.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; padding: 1rem 0;">Aucun résultat trouvé pour "<strong>${searchInput.value}</strong>".</p>`;
            return;
        }

        filtered.forEach(company => {
            directoryContainer.innerHTML += createCompanyCardHTML(company);
        });

        // Scroll to results
        document.getElementById("directory").scrollIntoView({ behavior: "smooth" });
    });
}

    // Sortable JS setup
    if (sortableContainer && typeof Sortable !== 'undefined') {
        new Sortable(sortableContainer, {
            animation: 150,
            handle: "h2" // Changed to h2 because your CV structure sections use h2 for titles
        });
    }

    // Print / Download CV
    
// ✅ NOUVELLE VERSION - Export PDF avec html2pdf.js
if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
        const cvTemplate = document.getElementById("cvTemplate");
        if (!cvTemplate) return;

        // S'assurer que les champs vides affichent leur placeholder
        document.querySelectorAll("#cvTemplate .editable").forEach(el => {
            if (el.innerText.trim() === "" && el.dataset.placeholder) {
                el.innerText = el.dataset.placeholder;
            }
        });

        // Forcer l'affichage de la photo si présente
        const photoPreview = document.getElementById("photoPreview");
        if (photoPreview && photoPreview.src && photoPreview.src !== "") {
            photoPreview.style.display = "block";
        }

        const opt = {
            margin: 0,
            filename: "CV_Oriental_InternHub.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                scrollY: 0,
                windowHeight: cvTemplate.scrollHeight
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        html2pdf().set(opt).from(cvTemplate).save();
    });
}

    // ============================================================
    // GESTION DE LA PHOTO - VERSION COMPLÈTE ET TESTÉE
    // ============================================================
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('photoPreview');
    const photoContainer = document.querySelector('.photo-container');
    const photoPlaceholder = document.querySelector('.photo-placeholder');
    
    console.log('=== INIT PHOTO UPLOAD ===');
    console.log('photoUpload:', photoUpload);
    console.log('photoPreview:', photoPreview);
    
    if (photoUpload && photoPreview) {
        
        // Fonction pour gérer l'upload
        function handlePhotoUpload(file) {
            console.log('Fichier sélectionné:', file.name, 'Type:', file.type, 'Taille:', file.size);
            
            if (!file) {
                console.log('Aucun fichier');
                return;
            }
            
            // Vérifier que c'est bien une image
            if (!file.type.startsWith('image/')) {
                alert('Veuillez sélectionner une image (JPG, PNG, etc.)');
                photoUpload.value = '';
                return;
            }
            
            // Vérifier la taille (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('L\'image est trop volumineuse (max 5MB)');
                photoUpload.value = '';
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = function(event) {
                console.log('Photo chargée avec succès');
                try {
                    // Afficher la photo
                    photoPreview.src = event.target.result;
                    photoPreview.style.display = 'block';
                    photoPreview.style.width = '70px';
                    photoPreview.style.height = '70px';
                    photoPreview.style.objectFit = 'cover';
                    photoPreview.style.borderRadius = '50%';
                    photoPreview.style.border = '3px solid white';
                    
                    // Cacher le placeholder
                    if (photoPlaceholder) {
                        photoPlaceholder.style.display = 'none';
                        console.log('Placeholder caché');
                    }
                    
                    console.log('Photo insérée avec succès !');
                } catch (error) {
                    console.error('Erreur:', error);
                }
            };
            
            reader.onerror = function() {
                alert('Erreur lors de la lecture du fichier');
                photoUpload.value = '';
            };
            
            reader.readAsDataURL(file);
        }
        
        // Événement change - méthode principale
        photoUpload.addEventListener('change', function(e) {
            console.log('Event change déclenché');
            const file = this.files[0];
            handlePhotoUpload(file);
        });
        
        // Pour mobile : s'assurer que l'événement est déclenché
        photoUpload.addEventListener('click', function(e) {
            console.log('Event click sur le input');
            // Réinitialiser pour permettre de resélectionner le même fichier
            this.value = '';
        });
        
        // Supprimer la photo en double-cliquant sur le conteneur
        if (photoContainer) {
            photoContainer.addEventListener('dblclick', function(e) {
                e.preventDefault();
                console.log('Double-clic détecté');
                
                if (photoPreview.src && photoPreview.src !== '') {
                    if (confirm('Supprimer la photo ?')) {
                        photoPreview.src = '';
                        photoPreview.style.display = 'none';
                        
                        if (photoPlaceholder) {
                            photoPlaceholder.style.display = 'flex';
                        }
                        
                        photoUpload.value = '';
                        console.log('Photo supprimée');
                    }
                }
            });
        }
        
        // Support double tap sur mobile
        let touchTimer = null;
        if (photoContainer) {
            photoContainer.addEventListener('touchstart', function(e) {
                if (e.touches.length === 1) {
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                        touchTimer = null;
                        // Double tap détecté
                        if (photoPreview.src && photoPreview.src !== '') {
                            if (confirm('Supprimer la photo ?')) {
                                photoPreview.src = '';
                                photoPreview.style.display = 'none';
                                if (photoPlaceholder) {
                                    photoPlaceholder.style.display = 'flex';
                                }
                                photoUpload.value = '';
                            }
                        }
                    } else {
                        touchTimer = setTimeout(() => {
                            touchTimer = null;
                        }, 300);
                    }
                }
            });
        }
    } else {
        console.error('Éléments photo non trouvés !');
        console.log('photoUpload:', photoUpload);
        console.log('photoPreview:', photoPreview);
    }
    // =========================================================================
    // 5. DYNAMIC CV SECTION CONTROLS (Remove, Move Up, Move Down, Education title)
    // =========================================================================
    // Hide and Restore Sections
    document.querySelectorAll(".remove-section").forEach(btn => {
        btn.addEventListener("click", () => {
            const section = btn.closest(".cv-section");
            section.style.display = "none";

            const restore = document.createElement("button");
            restore.className = "restore-btn";
            restore.innerText = "Restore " + section.querySelector("h2").innerText;

            restore.onclick = () => {
                section.style.display = "block";
                restore.remove();
            };

            if (restoreContainer) restoreContainer.appendChild(restore);
        });
    });

    // Move section up
    document.querySelectorAll(".move-up").forEach(btn => {
        btn.onclick = () => {
            const s = btn.closest(".cv-section");
            const prev = s.previousElementSibling;
            if (prev && !prev.classList.contains("fixed")) {
                s.parentNode.insertBefore(s, prev);
            }
        };
    });

    // Move section down
    document.querySelectorAll(".move-down").forEach(btn => {
        btn.onclick = () => {
            const s = btn.closest(".cv-section");
            const next = s.nextElementSibling;
            if (next) {
                s.parentNode.insertBefore(next, s);
            }
        };
    });

    // Dynamic text change for Education/Formation
    if (edu && title) {
        const checkEduText = () => {
            const text = edu.innerText.toLowerCase();
            if (text.includes("certificat") || text.includes("certificats")) {
                title.innerText = "FORMATION";
            } else {
                title.innerText = "EDUCATION";
            }
        };

        edu.addEventListener("input", checkEduText);
        checkEduText(); // Run once initially on load
    }
;

// --- LETTRE DE MOTIVATION MODAL CONTROLLER ---
const letterModal = document.getElementById('letterBuilderModal');
const openLetterBtn = document.getElementById('openLetterBuilder');
const closeLetterBtn = document.getElementById('closeLetterBuilder');
const downloadLetterBtn = document.getElementById('downloadLetter');

// Open Letter Builder Modal
if (openLetterBtn && letterModal) {
    openLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'flex';
    });
}

// Close Letter Builder Modal
if (closeLetterBtn && letterModal) {
    closeLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'none';
    });
}

// Global window closer layer integration
window.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        letterModal.style.display = 'none';
    }
});

// Download/Print functional workflow matching your CV pipeline
// ✅ NOUVELLE VERSION - Export PDF avec html2pdf.js
if (downloadLetterBtn) {
    downloadLetterBtn.addEventListener('click', () => {
        const letterTemplate = document.getElementById("letterTemplate");
        if (!letterTemplate) return;

        // S'assurer que les champs vides affichent leur placeholder
        document.querySelectorAll("#letterTemplate .editable").forEach(el => {
            if (el.innerText.trim() === "" && el.dataset.placeholder) {
                el.innerText = el.dataset.placeholder;
            }
        });

        const opt = {
            margin: 0,
            filename: "Lettre_Motivation_Oriental_InternHub.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                scrollY: 0,
                windowHeight: letterTemplate.scrollHeight
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        html2pdf().set(opt).from(letterTemplate).save();
    });
}

const reportModal =
document.getElementById(
    "reportBuilderModal"
);

const openReportBuilder =
document.getElementById(
    "openReportBuilder"
);

const closeReportBuilder =
document.getElementById(
    "closeReportBuilder"
);

openReportBuilder.onclick = () =>
{
    reportModal.style.display = "block";

    updatePageNumbers();
    generateSommaire();
};

closeReportBuilder.onclick = () =>
{
    reportModal.style.display = "none";
};

function updatePageNumbers(){

const pages =
document.querySelectorAll(
'.report-page'
);

pages.forEach((page,index)=>{

let number =
page.querySelector('.page-number');

if(!number){

number =
document.createElement('div');

number.className =
'page-number';

page.appendChild(number);

}

number.textContent =
index + 1;

});

}

function generateSommaire(){

const container =
document.getElementById(
'sommaireContent'
);

if(!container) return;

container.innerHTML='';

const titles =
document.querySelectorAll(
'.page-title'
);

titles.forEach((title,index)=>{

const row =
document.createElement('div');

row.innerHTML =
`
${title.innerText}
.................................
${index + 2}
`;

container.appendChild(row);

});

}

document
.getElementById('addPageBtn')
.addEventListener('click',()=>{

const page =
document.createElement('div');

page.className =
'report-page';

page.innerHTML =

`
<h2
class="page-title editable"
contenteditable="true">

Nouvelle Section

</h2>

<div
class="editable page-content"
contenteditable="true">

</div>
`;

document
.getElementById(
'reportContainer'
)
.appendChild(page);

updatePageNumbers();

generateSommaire();

});






let lastFocusedContent = null;



document.addEventListener('focusin', (e) => {
    const content = e.target.closest('.page-content');
    if (content) {
        lastFocusedContent = content;
    }
});

document.getElementById('addTableBtn').addEventListener('click', () => {

    if (!lastFocusedContent) {
        alert("Cliquez d'abord dans le contenu d'une page avant d'ajouter un tableau.");
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'report-table-wrapper';

    wrapper.innerHTML = `
        <button class="delete-table no-print" title="Supprimer ce tableau">🗑</button>
        <table class="report-table">
            <tr>
                <th contenteditable="true">Titre</th>
                <th contenteditable="true">Titre</th>
            </tr>
            <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
        </table>
    `;

    lastFocusedContent.appendChild(wrapper);
});

const imageUploader =
document.getElementById(
'imageUploader'
);

if(imageUploader){

imageUploader.addEventListener(
'change',

function(){

const file = this.files[0];

if(!file || !lastFocusedContent)
return;

const reader =
new FileReader();

reader.onload = e=>{

const img =
document.createElement('img');

img.src =
e.target.result;

img.style.maxWidth =
'100%';

img.style.display =
'block';

img.style.margin =
'20px auto';

lastFocusedContent
.appendChild(img);

};

reader.readAsDataURL(file);

this.value='';

});

}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-table')) {
        if (confirm('Supprimer ce tableau ?')) {
            e.target.closest('.report-table-wrapper').remove();
        }
    }
});


document.addEventListener('change', function(e){
    if (e.target.classList.contains('pageImageInput')) {

        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = ev => {
            const label = e.target.closest('.page-image-upload');
            const img = label.querySelector('.pageImagePreview');
            const placeholder = label.querySelector('.pageImagePlaceholder');

                img.src = ev.target.result;

                img.style.display='block';

                e.target.parentElement
                .querySelector('.logoPlaceholder')
                .style.display='none';

                e.target.parentElement
                .classList.add('has-logo');
            img.style.display = 'block';
            placeholder.style.display = 'none';
        };

        reader.readAsDataURL(file);
    }
});

    document
    .getElementById(
    'fontSizeSelector'
    )
    .addEventListener(
    'change',
    function(){

    document
    .querySelectorAll(
    '.report-page'
    )
    .forEach(page=>{

    page.style.fontSize =
    this.value + 'pt';

    });

    });

    document
    .addEventListener(
    'change',
    function(e){

    if(
    e.target.classList
    .contains('logoInput')
    ){

    const file =
    e.target.files[0];

    if(!file) return;

    const reader =
    new FileReader();

    reader.onload = ev => {

            const img =
            e.target.parentElement.querySelector(
                '.logoPreview'
            );

            img.src = ev.target.result;

            img.style.display = "block";

            const placeholder =
            e.target.parentElement.querySelector(
                '.logoPlaceholder'
            );

            if(placeholder){

                placeholder.style.display =
                "none";

            }

            e.target.parentElement.classList
            .add('has-logo');

        };

        reader.readAsDataURL(file);

        }

    });



new Sortable(
document.getElementById(
'reportContainer'
),
{
    animation:200,

    onEnd(){

        updatePageNumbers();

        generateSommaire();

    }
});





const defaultSections = [

"Remerciements",

"Dédicace",

"Liste des Abréviations",

"Liste des Tableaux",

"Liste des Figures",

"Sommaire",

"Introduction",

"Présentation de l'Organisme d'Accueil",

"Les Tâches Effectuées",

"Compétences Acquises",

"Conclusion",

"Références",

"Annexes",

"Table des Matières"

];

document.addEventListener('click', function(e){

    const page =
    e.target.closest('.report-page');

    if(!page) return;

    // MOVE UP
    if(e.target.classList.contains('move-up')){

        const prev =
        page.previousElementSibling;

        if(prev){

            page.parentNode
            .insertBefore(page, prev);

            updatePageNumbers();
            generateSommaire();
        }
    }

    // MOVE DOWN
    if(e.target.classList.contains('move-down')){

        const next =
        page.nextElementSibling;

        if(next){

            page.parentNode
            .insertBefore(next, page);

            updatePageNumbers();
            generateSommaire();
        }
    }

    // DELETE
    if(e.target.classList.contains('delete-page')){

        if(confirm('Supprimer cette page ?')){

            page.remove();

            updatePageNumbers();
            generateSommaire();
        }
    }

});



  

function enableImageInteractions(){

document.querySelectorAll(".floating-image")
.forEach(img=>{

    img.onmousedown = function(e){

        let shiftX = e.clientX - img.offsetLeft;

        let shiftY = e.clientY - img.offsetTop;

        function moveAt(pageX,pageY){

            img.style.left =
            pageX - shiftX + "px";

            img.style.top =
            pageY - shiftY + "px";

        }

        function onMouseMove(e){

            moveAt(
                e.pageX,
                e.pageY
            );

        }

        document.addEventListener(
            "mousemove",
            onMouseMove
        );

        document.onmouseup = ()=>{

            document.removeEventListener(
                "mousemove",
                onMouseMove
            );

            document.onmouseup=null;

        }

    }

});

}

// ============================================================
// TÉLÉCHARGER LE RAPPORT - Version avec html2pdf uniquement
// ============================================================

const downloadReport =
document.getElementById("downloadReport");

if(downloadReport){

downloadReport.addEventListener("click",()=>{

updatePageNumbers();

generateSommaire();

const element = document.createElement("div");

document
.querySelectorAll(".report-page")
.forEach(page=>{

    const clone =
    page.cloneNode(true);

    clone.querySelectorAll(
    '.page-controls, .delete-table, .no-print'
    )
    .forEach(el=>el.remove());

    clone.style.width='210mm';

    clone.style.height='297mm';

    clone.style.minHeight='297mm';

    clone.style.margin='0';

    clone.style.padding='20mm';

    clone.style.boxSizing='border-box';

    clone.style.pageBreakAfter='always';

    element.appendChild(clone);

});

html2pdf()

.set({

    margin:0,

    filename:

    'Rapport_Stage_Oriental_InternHub.pdf',

    image:{

        type:'jpeg',

        quality:0.98

    },

    html2canvas:{

        scale:2,

        useCORS:true

    },

    jsPDF:{

        unit:'mm',

        format:'a4',

        orientation:'portrait'

    },

    pagebreak:{

        mode:['legacy'],

        after:'.report-page'

    }

})

.from(element)

.save();

});

}

// Ajoutez cette fonction pour réinitialiser le logo
function resetLogo(label) {
    const img = label.querySelector('.logoPreview');
    const fileInput = label.querySelector('.logoInput');
    
    if (img) {
        img.src = '';
        img.style.display = 'none';
    }
    if (fileInput) {
        fileInput.value = '';
    }
    label.classList.remove('has-logo');
}

// Exemple d'utilisation (double-clic pour supprimer)
document.addEventListener('dblclick', function(e) {
    const label = e.target.closest('.logo-upload');
    if (label && label.classList.contains('has-logo')) {
        if (confirm('Supprimer le logo ?')) {
            resetLogo(label);
        }
    }
});

// ============================================================
// GESTION DU SCROLL DES LIENS DE LA NAVBAR SUR MOBILE
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le wrapper des liens
    const navWrapper = document.querySelector('.nav-links-wrapper');
    
    if (navWrapper) {
        // Détecter le swipe pour faire défiler les liens
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        
        navWrapper.addEventListener('touchstart', function(e) {
            isDragging = true;
            startX = e.touches[0].pageX - navWrapper.offsetLeft;
            scrollLeft = navWrapper.scrollLeft;
        }, { passive: true });
        
        navWrapper.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            e.preventDefault(); // Empêche le scroll global
            const x = e.touches[0].pageX - navWrapper.offsetLeft;
            const walk = (x - startX) * 1.2; // Multiplicateur pour plus de réactivité
            navWrapper.scrollLeft = scrollLeft - walk;
        }, { passive: false });
        
        navWrapper.addEventListener('touchend', function() {
            isDragging = false;
        }, { passive: true });
        
        // Empêcher le scroll global quand on est sur la navbar
        navWrapper.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: false });
    }
setupZoom('cvZoomIn',     'cvZoomOut',     'cvZoomReset',     'cvZoomLevel',     '#cvTemplate');
setupZoom('letterZoomIn', 'letterZoomOut', 'letterZoomReset', 'letterZoomLevel', '#letterTemplate');
setupZoom('reportZoomIn', 'reportZoomOut', 'reportZoomReset', 'reportZoomLevel', '#reportContainer');

});

// ============================================================
// EMPÊCHER LE ZOOM INDÉSIRABLE SUR MOBILE
// ============================================================

// Empêcher le gesture de zoom sur double-tap (iOS)
document.addEventListener('gesturestart', function(e) {
    if (e.target.closest('.nav-links-wrapper') || e.target.closest('.directory-filters')) {
        // Autoriser le geste sur les zones de scroll
        return;
    }
    e.preventDefault();
}, { passive: false });

// Empêcher le zoom avec deux doigts sur la page
document.addEventListener('gesturechange', function(e) {
    if (e.target.closest('.nav-links-wrapper') || e.target.closest('.directory-filters')) {
        return;
    }
    e.preventDefault();
}, { passive: false });

// ============================================================
// OPTIONNEL : DÉTECTER SI L'UTILISATEUR EST SUR MOBILE
// ============================================================
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           (navigator.userAgent.match(/Android/i) || 
            navigator.userAgent.match(/iPhone/i) || 
            navigator.userAgent.match(/iPad/i));
}

// Si mobile, on s'assure que la navbar est bien configurée
if (isMobileDevice()) {
    const navWrapper = document.querySelector('.nav-links-wrapper');
    if (navWrapper) {
        // Ajouter un indicateur visuel de scroll (optionnel)
        navWrapper.style.cursor = 'grab';
    }
}
