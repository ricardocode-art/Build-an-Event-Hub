/* --- Données de départ (ne pas modifier) --- */
const prixBilletAdulte = 8000;  // prix d'un billet adulte, en FCFA
const prixBilletEnfant = 4000;  // prix d'un billet enfant, en FCFA
const nombreAdultes    = 2;     // nombre d'adultes
const nombreEnfants    = 3;     // nombre d'enfants
const budgetDisponible = 25000; // argent disponible, en FCFA

// Calcule du cout total des billets
let coutTotalBillets = (nombreAdultes * prixBilletAdulte) + (nombreEnfants * prixBilletEnfant);
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