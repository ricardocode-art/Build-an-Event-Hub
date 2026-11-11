/* --- Données de départ (ne pas modifier) --- */
let argentPoche      = 20000; // argent dans la poche, en FCFA
const prixDuMais     = 3500;  // maïs, en FCFA
const prixDuGari     = 2000;  // gari, en FCFA
const prixDesTomates = 1500;  // tomates, en FCFA
const prixDuPiment   = 500;   // piment, en FCFA

//une variable pour stocker le total des dépenses--
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
