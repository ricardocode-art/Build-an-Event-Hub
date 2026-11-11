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
