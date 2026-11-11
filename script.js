//EXO1//
/*DONNEES:*/
const PRIXAVOCATS = 1500; // prix unitaire des avocats
const nombreavocats = 1; // nombre d'avocats achetés
const PRIXRIZ = 4500; // prix unitaire du sac de riz
const nombrederiz = 1; // nombre de sacs de riz achetés
const PRIXhuile = 1200; // prix unitaire du sac d'huile
const nombredehuile = 1; // nombre de sacs d'huile achetés
const prixdupoissons = 2500; // prix unitaire des poissons
const nombredepoissons = 3; // nombre de poissons achetés


//exercice 2//
/*DONNEES:*/
const distancecalaviouidah = 30; // distance entre Calavi et Ouidah en km
const consommationAUCentKM   = 8; // LITRES D'ESSENCE CONSOMMES POUR 100 KM
const prixLitreEssence = 780;// prix du litre d'essence en FCFA
const beneficeduconducteur = 20000; // marge du conducteur en FCFA







/* ============================================================
   EXERCICE PRATIQUE JAVASCRIPT N°1
   « Un voyage de Cotonou à Parakou »
   ------------------------------------------------------------
   Thèmes : les conditions (if / else if / else),
            les opérateurs arithmétiques (+ - * / %),
            les opérateurs d'affectation (= += -= *= /=)

   Niveau   : débutant (aucune connaissance préalable requise
              en dehors des variables et de console.log)
   Contexte : situations du quotidien au Bénin
   Durée    : 1 h 30 à 2 h (10 exercices progressifs)
   Fichier  : exercice.js  —  JavaScript natif (Vanilla JS)

   ------------------------------------------------------------
   COMMENT TRAVAILLER CE FICHIER
   ------------------------------------------------------------
   1. Ouvre ce fichier dans Visual Studio Code.
   2. Lis la consigne de chaque exercice, ENTIÈREMENT.
   3. Écris ton code UNIQUEMENT dans la zone
      « 👉 À TOI DE JOUER »  (entre les lignes // ----).
   4. Ne modifie PAS les données de départ : elles sont là pour
      t'entraîner, pas pour être changées.
   5. Chaque ligne de console.log() est déjà préparée : ton but
      est de faire apparaître un résultat juste à la place de
      « À compléter ».
   6. Lance le fichier après CHAQUE exercice :
         node exercice.js
      (ou clique sur le bouton ▶ « Run JavaScript File » dans
       Visual Studio Code).
   7. Vérifie tes réponses avec le corrigé : fichier
      `solution.js` — mais seulement APRÈS avoir cherché !

   ------------------------------------------------------------
   RAPPEL EXPRESS DES OPÉRATEURS
   ------------------------------------------------------------
   ARITHMÉTIQUES            |  AFFECTATION
   -------------------------|-----------------------------------
   +   addition             |  =    affectation simple
   -   soustraction         |  +=   ajouter puis affecter
   *   multiplication       |  -=   soustraire puis affecter
   /   division             |  *=   multiplier puis affecter
   %   modulo (reste de la  |  /=   diviser puis affecter
       division entière)     |
   -------------------------|-----------------------------------
   Exemple : 7 % 2 donne 1 (il reste 1 quand on divise 7 par 2)

   CONDITIONS :
     if (condition)      { ... }   // si la condition est vraie
     else if (condition) { ... }   // sinon, si ...
     else                { ... }   // dans tous les autres cas

   ============================================================ */


/* ------------------------------------------------------------
   Petite fonction utilitaire (ne pas modifier)
   Elle sert seulement à afficher un titre propre dans la console.
   ------------------------------------------------------------ */
function afficherTitre(numero, titre) {
  console.log("");
  console.log("=".repeat(64));
  console.log(`  EXERCICE ${numero} — ${titre}`);
  console.log("=".repeat(64));
}


/* ############################################################
   EXERCICE 1 — CALCULER UNE SOMME AVEC LES OPÉRATEURS
                ARITHMÉTIQUES
   Contexte : marché Dantokpa de Cotonou
   Notions  : + , * , / , console.log
   ############################################################ */
afficherTitre(1, "Les achats au marché Dantokpa de Cotonou");

/* --- Données de départ (ne pas modifier) --- */
const prixAvocats      = 1500;  // prix total des avocats, en FCFA
const prixRiz          = 4500;  // prix du sac de riz, en FCFA
const prixHuile        = 1200;  // prix du bidon d'huile, en FCFA
const prixDuPoisson    = 2500;  // prix d'UN poisson, en FCFA
const nombreDePoissons = 3;     // nombre de poissons achetés

console.log("Données : avocats = " + prixAvocats + " FCFA, riz = " + prixRiz +
            " FCFA, huile = " + prixHuile + " FCFA, poisson = " +
            prixDuPoisson + " FCFA l'unité, nombre de poissons = " +
            nombreDePoissons);

/* --- Consigne ---
   a) Calcule le prix total des poissons dans une variable
      `prixTotalPoissons` (utilise la multiplication *).
   b) Calcule le montant total des achats dans une variable
      `montantTotalAchats` (utilise l'addition +).
   c) Affiche les deux résultats avec les console.log() prévus.

   💡 Indice : montantTotal = avocats + riz + huile + poissons.
*/

/* 👉 À TOI DE JOUER (écris ton code sous cette ligne) */
// ------------------------------------------------------

//a-prix total des poissons//
const prixTotalpoissons = prixdupoissons * nombredepoissons; // calcul du prix total
//b-LE MONTANT TOTALDES ACHATS 
const montantTotalAchats = PRIXAVOCATS * nombreavocats + PRIXRIZ * nombrederiz + PRIXhuile * nombredehuile + prixTotalpoissons; // calcul du montant total des achats
//AFFICHAGE DES RESULTATS//
console.log("Le prix total des poissons est : " + prixTotalpoissons + " FCFA"); // affichage du prix total
console.log("Le montant total des achats est : " + montantTotalAchats + " FCFA"); // affichage du montant total des achats

// ------------------------------------------------------

console.log("Prix total des poissons : À compléter FCFA");
console.log("Montant total des achats : À compléter FCFA");
/*

/* ############################################################
   EXERCICE 2 — CALCULER LE COÛT TOTAL D'UN TRAJET
   Contexte : taxi-brousse Abomey-Calavi → Ouidah
   Notions  : / , * , +
   ############################################################ */
afficherTitre(2, "Le trajet Abomey-Calavi → Ouidah");

/* --- Données de départ (ne pas modifier) --- */
const distanceCalaviOuidah   = 30;    // distance en kilomètres
const consommationAuCentKm   = 8;     // litres consommés pour 100 km
const prixLitreEssence       = 780;   // prix d'un litre, en FCFA
const beneficeDuConducteur   = 2000;  // marge du conducteur, en FCFA

console.log("Données : distance = " + distanceCalaviOuidah + " km, consommation = " +
            consommationAuCentKm + " L/100 km, essence = " + prixLitreEssence +
            " FCFA/L, marge du conducteur = " + beneficeDuConducteur + " FCFA");

/* --- Consigne ---
   a) Calcule la quantité d'essence nécessaire pour ce trajet
      dans une variable `litresNecessaires`.
      💡 Formule : (distance / 100) * consommationAuCentKm
   b) Calcule le coût du carburant dans `coutCarburant`
      (litres × prix du litre).
   c) Calcule le coût total du trajet dans `coutTotalTrajet`
      (carburant + marge du conducteur).
   d) Affiche les trois résultats.
*/

/* 👉 À TOI DE JOUER */
// ------------------------------------------------------
//a- calcul de la quantité d'essence pour le trajet//
const quantiteEssence = (distancecalaviouidah / 100) * consommationAUCentKM; // calcul de la quantité d'essence nécessaire
//b- calcul le coût du carburant pour le trajet//
const coutCarburant = quantiteEssence * prixLitreEssence; // calcul du coût du carburant
//c- calcul le coût    total du trajet//
const prixTotalTrajet = coutCarburant + beneficeduconducteur; // calcul du prix total du trajet
//AFFICHAGE DES RESULTATS//
console.log("La quantité d'essence nécessaire pour le trajet est : " + quantiteEssence + " litres");
console.log("Le coût du carburant pour le trajet est : " + coutCarburant + " FCFA");
console.log("Le prix total du trajet est : " + prixTotalTrajet + " FCFA");




// ------------------------------------------------------

console.log("Litres d'essence nécessaires : À compléter L");
console.log("Coût du carburant : À compléter FCFA");
console.log("Coût total du trajet : À compléter FCFA");


/* ############################################################
   EXERCICE 3 — VÉRIFIER SI UN BUDGET SUFFIT POUR UN DÉPLACEMENT
   Contexte : voyage Cotonou → Natitingou (compagnie fictive
              « Bénin Voyages »)
   Notions  : if / else , * , + , comparaisons
   ############################################################ */
afficherTitre(3, "Le voyage Cotonou → Natitingou");

/* --- Données de départ (ne pas modifier) --- */
const prixBilletAdulte = 8000;  // prix d'un billet adulte, en FCFA
const prixBilletEnfant = 4000;  // prix d'un billet enfant, en FCFA
const nombreAdultes    = 2;     // nombre d'adultes
const nombreEnfants    = 3;     // nombre d'enfants
const budgetDisponible = 25000; // argent disponible, en FCFA

console.log("Données : " + nombreAdultes + " adulte(s) à " + prixBilletAdulte +
            " FCFA, " + nombreEnfants + " enfant(s) à " + prixBilletEnfant +
            " FCFA, budget = " + budgetDisponible + " FCFA");

/* --- Consigne ---
   a) Calcule le coût total des billets dans `coutTotalBillets` :
      (adultes × prix adulte) + (enfants × prix enfant).
   b) Avec un if / else :
        - si le budget est supérieur OU égal au coût total,
          affiche : « ✅ Budget suffisant pour rejoindre Natitingou. »
          puis la phrase : « Il restera ... FCFA. »
        - sinon affiche : « ❌ Budget insuffisant pour rejoindre Natitingou. »
          puis la phrase : « Il manque ... FCFA. »

   💡 Indice : pour calculer une différence, on soustrait toujours
      le plus petit nombre au plus grand.
*/

/* 👉 À TOI DE JOUER */
// Calcule du cout total des billets
const coutTotalBillets = (nombreAdultes * prixBilletAdulte) + (nombreEnfants * prixBilletEnfant);
//une condition pour vérifier si le budget est suffisant ou non
if (budgetDisponible >= coutTotalBillets) {
  console.log("✅ Budget suffisant pour rejoindre Natitingou.");
  console.log("Il restera " + (budgetDisponible - coutTotalBillets) + " FCFA.");
} else {
  console.log("❌ Budget insuffisant pour rejoindre Natitingou.");
  console.log("Il manque " + (coutTotalBillets - budgetDisponible) + " FCFA.");
}
// Affichage du coût total des billets
console.log("Coût total des billets : " + coutTotalBillets + " FCFA");
// ------------------------------------------------------

console.log("Coût total des billets : À compléter FCFA");


/* ############################################################
   EXERCICE 4 — DÉTERMINER LE MONTANT RESTANT APRÈS UN ACHAT
   Contexte : provisions au marché Dantokpa
   Notions  : += , -= , if / else
   ############################################################ */
afficherTitre(4, "La monnaie rendue au marché Dantokpa");

/* --- Données de départ (ne pas modifier) --- */
let argentPoche      = 20000; // argent dans la poche, en FCFA
const prixDuMais     = 3500;  // maïs, en FCFA
const prixDuGari     = 2000;  // gari, en FCFA
const prixDesTomates = 1500;  // tomates, en FCFA
const prixDuPiment   = 500;   // piment, en FCFA

console.log("Données : argent en poche = " + argentPoche + " FCFA ; achats = " +
            "maïs " + prixDuMais + ", gari " + prixDuGari + ", tomates " +
            prixDesTomates + ", piment " + prixDuPiment + " FCFA");

/* --- Consigne (utilise UNIQUEMENT += et -=) ---
   a) Crée une variable `totalDepense` initialisée à 0, puis
      AJOUTE chaque prix avec l'opérateur += (une ligne par achat).
   b) RETRANCHE la dépense totale de `argentPoche` avec -=.
      `argentPoche` devient alors la monnaie rendue.
   c) Avec un if / else, indique si la monnaie rendue permet
      encore de payer un transport en zémidjan à 500 FCFA :
        - si oui : « 🛵 La monnaie permet encore de payer le zémidjan (500 FCFA). »
        - si non : « 🚶 Il faudra rentrer à pied. »
*/

/* 👉 À TOI DE JOUER */
// --une variable pour stocker le total des dépenses--
let totalDepense = 0;

// --calcul du total des dépenses--
totalDepense += prixDuMais;
totalDepense += prixDuGari;
totalDepense += prixDesTomates;
totalDepense += prixDuPiment;

// --calcul de la monnaie rendue--
argentPoche -= totalDepense;

// --vérification si la monnaie permet de payer le zémidjan--
if (argentPoche >= 500) {
  console.log("✅ La monnaie permet encore de payer le zémidjan (500 FCFA).");
} else {
  console.log("❌ Il faudra rentrer à pied.");
}

// Affichage des résultats
console.log("Total dépensé : " + totalDepense + " FCFA");
console.log("Monnaie rendue : " + argentPoche + " FCFA");

//
/* ############################################################
   EXERCICE 5 — APPLIQUER UNE RÉDUCTION SUR UN PRIX
   Contexte : achat de pagnes au marché de Porto-Novo
   Notions  : if / else , % , / , *=
   ############################################################ */
afficherTitre(5, "La remise du vendeur de pagnes de Porto-Novo");

/* --- Données de départ (ne pas modifier) --- */
const prixUnitairePagne = 6000; // prix d'un pagne, en FCFA
let   nombreDePagnes    = 5;    // nombre de pagnes achetés
let   montantAPayer     = 0;    // à calculer

console.log("Données : pagne = " + prixUnitairePagne + " FCFA l'unité, quantité = " +
            nombreDePagnes);

/* --- Consigne ---
   a) Calcule le montant avant réduction dans `montantAPayer`
      (quantité × prix unitaire).
   b) Le vendeur accorde une remise de 10 % si le client achète
      4 pagnes ou plus.
      Avec un if / else :
        - si la quantité est >= 4, applique la remise avec *=
          (montantAPayer = montantAPayer * 0.9) et affiche
          « 🎁 Remise de 10 % appliquée. »
        - sinon affiche « Pas de remise pour cet achat. »
   c) Bonus : calcule le montant de la remise en FCFA dans
      `valeurDeLaRemise` (montant avant réduction - montant après).
*/

/* 👉 À TOI DE JOUER */
//Calcule le montant avant réduction dans `montantAPayer--------------------------------------------------
const montantAvantReduction = nombreDePagnes * prixUnitairePagne;

// Le vendeur accorde une remise de 10 % 
if (nombreDePagnes >= 4) {
  montantAPayer = montantAvantReduction * 0.9;console.log("🎁 Remise de 10 % appliquée.");}else{ console.log(" Pas de remise pour cet achat."); }
// calcule le montant de la remise en FCFA dans
      
const valeurDeLaRemise = montantAvantReduction - montantAPayer;
// Affichage des résultats   
console.log("Montant avant réduction : " + montantAvantReduction + " FCFA");
console.log("Montant à payer : " + montantAPayer + " FCFA");
console.log("Valeur de la remise : " + valeurDeLaRemise + " FCFA");


/* ############################################################
   EXERCICE 6 — UTILISER LE MODULO POUR RÉPARTIR DES PASSAGERS
   Contexte : départ en taxi « cinq places » de la gare routière
              de Cotonou vers Bohicon
   Notions  : / , % , if / else
   ############################################################ */
afficherTitre(6, "La répartition des passagers vers Bohicon");

/* --- Données de départ (ne pas modifier) --- */
const nombreDePassagers   = 47; // passagers à transporter
const placesParTaxi       = 5;  // places disponibles par taxi
const prixDuTicketParTaxi = 3500; // prix payé par UN taxi, en FCFA

console.log("Données : " + nombreDePassagers + " passagers, " + placesParTaxi +
            " places par taxi, ticket = " + prixDuTicketParTaxi + " FCFA");

/* --- Consigne ---
   a) Calcule le nombre de taxis COMPLETS dans `taxisComplets`
      (division entière : nombreDePassagers / placesParTaxi).
   b) Calcule le nombre de passagers RESTANTS dans `passagersRestants`
      avec l'opérateur modulo %.
   c) Déduis-en le nombre TOTAL de taxis nécessaires dans
      `nombreTotalTaxis` :
        - s'il reste des passagers, il faut un taxi de plus ;
        - sinon les taxis complets suffisent.
   d) Calcule la recette totale de la gare dans `recetteTotale`
      (nombre de taxis × prix du ticket).
   e) Affiche tous les résultats.

   💡 Indice : Math.floor(...) arrondit à l'entier inférieur.
      Tu peux aussi remarquer que 47 / 5 = 9,4 en JavaScript.
*/

/* 👉 À TOI DE JOUER */
// Calcule le nombre de taxis COMPLETS------------------------------------------------------
const taxisComplets = Math.floor(nombreDePassagers / placesParTaxi);
// Calcule le nombre de passagers RESTANTS
const passagersRestants = nombreDePassagers % placesParTaxi;
// Calcule le nombre total de taxis nécessaires
if (passagersRestants > 0) {
  nombreTotalTaxis = taxisComplets + 1;
} else {
  nombreTotalTaxis = taxisComplets;
}

// Calcule la recette totale de la gare
const recetteTotale = nombreTotalTaxis * prixDuTicketParTaxi;

// Affichage des résultats
console.log("Taxis complets : " + taxisComplets);
console.log("Passagers restants : " + passagersRestants);
console.log("Nombre total de taxis nécessaires : " + nombreTotalTaxis);
console.log("Recette totale de la gare : " + recetteTotale + " FCFA");
// ------------------------------------------------------

console.log("Taxis complets : À compléter");
console.log("Passagers restants : À compléter");
console.log("Nombre total de taxis nécessaires : À compléter");
console.log("Recette totale de la gare : À compléter FCFA");


/* ############################################################
   EXERCICE 7 — METTRE À JOUR UN BUDGET AVEC LES OPÉRATEURS
                D'AFFECTATION
   Contexte : week-end Cotonou → Grand-Popo
   Notions  : = , += , -= , *= , /= , if / else
   ############################################################ */
afficherTitre(7, "Le budget du week-end à Grand-Popo");

/* --- Données de départ (ne pas modifier) --- */
let budgetVoyage   = 60000; // budget de départ, en FCFA
const fraisCarburant = 12000;
const fraisRepas     = 7500;
const fraisHebergement = 15000;
const fraisPlage     = 2500;

console.log("Données : budget de départ = " + budgetVoyage + " FCFA ; carburant = " +
            fraisCarburant + ", repas = " + fraisRepas + ", hébergement = " +
            fraisHebergement + ", plage = " + fraisPlage + " FCFA");

/* --- Consigne ---
   a) Crée une variable `totalDepenses` initialisée à 0 et
      additionne chaque frais avec +=.
   b) Retranche ce total du budget avec -=.
   c) Un imprévu arrive : le prix de l'hébergement AUGMENTE de
      20 %. Mets à jour `budgetVoyage` avec *= (multiplie le
      budget restant par 0.8) et affiche le nouveau montant.
   d) Le groupe est composé de 4 amis qui se partagent le budget
      restant. Calcule la part de chacun avec /= (ou /) dans une
      variable `partDeChaqueAmi`.
   e) Avec un if / else, affiche « 🏖️ Le week-end est possible. »
      si la part de chaque ami est supérieure à 5 000 FCFA,
      sinon « ⚠️ Le week-end sera très serré. »
*/

/* 👉 À TOI DE JOUER */
// Créer une variable `totalDepenses` initialisée à 0------------------------------------------------------
let totalDepenses = 0;
// Additionner chaque frais avec +=
totalDepenses += fraisCarburant;
totalDepenses += fraisRepas;
totalDepenses += fraisHebergement;
totalDepenses += fraisPlage;
// Retrancher ce total du budget avec -=
budgetVoyage -= totalDepenses;
// Mettre à jour le budget avec l'augmentation de 20% de l'hébergement  
budgetrestant *= 0.8;
//Afficher le nouveau montant du budget
console.log("Budget après imprévu : " + budgetVoyage + " FCFA");
// Calculer la part de chaque ami
const partDeChaqueAmi = budgetrestant / 4;
// Vérifier si la part de chaque ami est supérieure à 5 000 FCFA
if (partDeChaqueAmi > 5000) {
  console.log("🏖️ Le week-end est possible.");
} else {
  console.log("⚠️ Le week-end sera très serré.");
}
// Affichage des résultats
console.log("Total des dépenses : " + totalDepenses + " FCFA");
console.log("Budget après imprévu : " + budgetVoyage + " FCFA");
console.log("Part de chaque ami : " + partDeChaqueAmi + " FCFA");
// ------------------------------------------------------

console.log("Total des dépenses : À compléter FCFA");
console.log("Budget après imprévu : À compléter FCFA");
console.log("Part de chaque ami : À compléter FCFA");


/* ############################################################
   EXERCICE 8 — COMPARER LES COÛTS DE DEUX ITINÉRAIRES
   Contexte : Cotonou → Parakou, deux routes possibles
   Notions  : if / else if / else , + , * , /
   ############################################################ */
afficherTitre(8, "Quelle route choisir pour aller à Parakou ?");

/* --- Données de départ (ne pas modifier) --- */
const distanceRouteInterEtats = 450; // km via Bohicon - Djougou
const peageRouteInterEtats    = 1500; // FCFA de péage
const distanceRouteCotiere    = 520; // km via Ouidah - Lokossa - Abomey
const peageRouteCotiere       = 800;  // FCFA de péage
const consommationDuVehicule  = 7;    // litres pour 100 km
const prixCarburantLitre      = 800;  // FCFA le litre

console.log("Données : route des inter-États = " + distanceRouteInterEtats +
            " km (péage " + peageRouteInterEtats + " FCFA) ; route côtière = " +
            distanceRouteCotiere + " km (péage " + peageRouteCotiere +
            " FCFA) ; consommation = " + consommationDuVehicule +
            " L/100 km ; carburant = " + prixCarburantLitre + " FCFA/L");

/* --- Consigne ---
   a) Pour CHAQUE route, calcule :
        - le carburant nécessaire  (distance / 100) * consommation
        - le coût du carburant     litres * prixCarburantLitre
        - le coût total            carburant + péage
      Variables conseillées :
        carburantRouteInterEtats, coutRouteInterEtats,
        carburantRouteCotiere,    coutRouteCotiere
   b) Calcule la différence de prix dans `differenceDeCout`
      (valeur positive).
   c) Avec if / else if / else, affiche la route la plus
      économique :
        - route des inter-États moins chère → message adapté ;
        - route côtière moins chère         → message adapté ;
        - les deux routes coûtent le même prix → message adapté.
*/

/* 👉 À TOI DE JOUER */
//calcule  le carburant nécessaire le coût du carburant  Pour CHAQUE route------------------------------------------------------
const carburantRouteInterEtats = (distanceRouteInterEtats / 100) * consommationDuVehicule;

const coutRouteInterEtats = carburantRouteInterEtats * prixCarburantLitre ;  

const carburantRouteCotiere = (distanceRouteCotiere / 100) * consommationDuVehicule;

const coutRouteCotiere = carburantRouteCotiere * prixCarburantLitre ;
/*le coût total carburant + péage*/
const coutTotalRouteInterEtats = coutRouteInterEtats + peageRouteInterEtats;

const coutTotalRouteCotiere = coutRouteCotiere + peageRouteCotiere;
/*la différence de prix dans `differenceDeCout`*/
const differenceDeCout = Math.abs(coutTotalRouteInterEtats - coutTotalRouteCotiere);
/*affiche la route la plus économique*/
if (coutTotalRouteInterEtats < coutTotalRouteCotiere) {
  console.log("La route des inter-États est moins chère→ message adapté.");
} else if (coutTotalRouteCotiere < coutTotalRouteInterEtats) {
  console.log("La route côtière est moins chère→ message adapté.");
} else {
  console.log("Les deux routes coûtent le même prix→ message adapté.");
}
/* Affichage des résultats */    
console.log("Coût route des inter-États : " + coutTotalRouteInterEtats + " FCFA");
console.log("Coût route côtière : " + coutTotalRouteCotiere + " FCFA");
console.log("Différence de coût : " + differenceDeCout + " FCFA");


// ------------------------------------------------------

console.log("Coût route des inter-États : À compléter FCFA");
console.log("Coût route côtière : À compléter FCFA");
console.log("Différence de coût : À compléter FCFA");


/* ############################################################
   EXERCICE 9 — DÉTERMINER UNE CATÉGORIE DE TARIF
   Contexte : livraison de colis depuis Cotonou
   Notions  : if / else if / else (chaîne complète)
   ############################################################ */
afficherTitre(9, "Le tarif de livraison selon la distance");

/* --- Données de départ (ne pas modifier) --- */
const distanceLivraison = 160; // distance en km depuis Cotonou
const destination       = "Bohicon"; // ville de destination

console.log("Données : livraison de Cotonou vers " + destination + " (" +
            distanceLivraison + " km)");

/* --- Consigne ---
   Barème de l'agence (fictif) :
     • distance <  50 km           → zone « COURTE »,  1 000 FCFA
     • 50 km <= distance < 150 km  → zone « MOYENNE », 2 500 FCFA
     • 150 km <= distance < 300 km → zone « LONGUE »,  5 000 FCFA
     • distance >= 300 km          → zone « TRÈS LONGUE », 7 500 FCFA

   a) Déclare deux variables : `tarifLivraison` et `zoneLivraison`.
   b) Utilise if / else if / else / else pour leur donner la
      bonne valeur.
   c) Affiche : « 📦 Livraison vers Bohicon (160 km) — zone LONGUE — 5000 FCFA »
   d) Teste ton code avec d'autres distances : 20 km (Abomey-Calavi),
      450 km (Parakou), 50 km exactement. Les résultats
      correspondent-ils au barème ?
*/

/* 👉 À TOI DE JOUER */
//*deux variables : `tarifLivraison` et `zoneLivraison`. ------------------------------------------------------
const zonelivraison= "Bohicon"
const tariflivraison=5000
/*if / else if / else / else pour leur donner la
      bonne valeur.*/
   if


// ------------------------------------------------------

console.log("Zone : À compléter");
console.log("Tarif de la livraison : À compléter FCFA");


/* ############################################################
   EXERCICE 10 — PROJET DE SYNTHÈSE
                « GESTION D'UN DÉPLACEMENT AU BÉNIN »
   Contexte : voyage scolaire Cotonou → Parakou en taxi-brousse
   Notions  : TOUTES celles vues depuis l'exercice 1
   ############################################################ */
afficherTitre(10, "Projet : gestion d'un déplacement Cotonou → Parakou");

/* --- Données de départ (ne pas modifier) --- */
const distanceTotale       = 450;   // km entre Cotonou et Parakou
const consommationVehicule = 8;     // litres pour 100 km
const prixLitreCarburant   = 800;   // FCFA le litre
const fraisDePeage         = 1500;  // FCFA
const prixTicketParPersonne = 6500; // FCFA
const nombreDeVoyageurs    = 12;    // élèves + encadrants
const placesParVehicule    = 5;     // places dans un taxi-brousse
const budgetDuGroupe       = 100000; // FCFA
const repasParPersonne     = 1000;  // FCFA

console.log("Données : " + distanceTotale + " km, " + consommationVehicule +
            " L/100 km, carburant = " + prixLitreCarburant + " FCFA/L, péage = " +
            fraisDePeage + " FCFA, ticket = " + prixTicketParPersonne +
            " FCFA/personne, " + nombreDeVoyageurs + " voyageurs, " +
            placesParVehicule + " places/véhicule, budget = " + budgetDuGroupe +
            " FCFA, repas = " + repasParPersonne + " FCFA/personne");

/* --- Consigne : complète les 6 étapes dans l'ordre ---

   ÉTAPE 1 — Le carburant ( / , * )
     Calcule `litresNecessaires` puis `coutCarburant`.

   ÉTAPE 2 — Les véhicules ( / , % , if / else )
     Calcule `vehiculesComplets` (taxis pleins) et
     `voyageursRestants` (modulo). Déduis-en `nombreDeVehicules`
     (il faut un véhicule de plus s'il reste des voyageurs).

   ÉTAPE 3 — Le budget transport ( * , + )
     Calcule `coutTransport` = nombre de véhicules × prix du
     ticket, puis `budgetNecessaire` = carburant + péage +
     transport + (repas × nombre de voyageurs).

   ÉTAPE 4 — La réduction groupe ( if / else , *= )
     Si le groupe compte 10 voyageurs ou plus, une remise de
     10 % est appliquée sur `budgetNecessaire` (utilise *=).
     Affiche un message dans chaque cas.

   ÉTAPE 5 — La décision finale ( if / else if / else )
     • budget suffisant        → « ✅ Départ confirmé pour Parakou. »
                                 + le reste disponible
     • il manque moins de 10 000 FCFA → « ⚠️ Budget presque suffisant :
                                 il manque ... FCFA. Réduisez les repas. »
     • sinon                   → « ❌ Voyage reporté : il manque ... FCFA. »

   ÉTAPE 6 — Bilan ( console.log )
     Affiche un récapitulatif clair : litres, coût carburant,
     nombre de véhicules, budget nécessaire, décision.

   💡 Prends ton temps : cet exercice combine tout le cours.
      Fais-le étape par étape et lance `node exercice.js` après
      chaque étape pour vérifier que rien ne casse.
*/

/* 👉 À TOI DE JOUER */
// ------------------------------------------------------



// ------------------------------------------------------

console.log("Bilan du déplacement : À compléter");


/* ############################################################
   ✅ AUTO-ÉVALUATION
   Coche mentalement chaque case avant de passer au corrigé.
   ############################################################
   [ ] J'ai utilisé + , - , * , / et % au moins une fois chacun.
   [ ] J'ai utilisé = , += , -= , *= et /= au moins une fois chacun.
   [ ] J'ai écrit au moins un if, un else if et un else.
   [ ] Mes noms de variables sont en français et explicites.
   [ ] Tous mes console.log() affichent un résultat (plus de
       « À compléter ») quand le code est terminé.
   [ ] `node exercice.js` s'exécute sans erreur rouge.

   ------------------------------------------------------------
   RESSOURCES UTILES
   ------------------------------------------------------------
   • MDN Web Docs (français) — Opérateurs arithmétiques :
     https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Arithmetic_operators
   • MDN Web Docs (français) — if...else :
     https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
   • javascript.info (anglais, très pédagogique) :
     https://javascript.info
   • Corrigé complet : fichier `solution.js` du même dossier.

   ------------------------------------------------------------
   ⚠️ NOTE SUR LES DONNÉES
   Les distances entre villes béninoises utilisées ici sont des
   ORDRES DE GRANDEUR approximatifs. Tous les prix (carburant,
   tickets, péages, remises) sont FICTIFS et servent uniquement
   d'exemple pédagogique.
   ============================================================ */
   //
