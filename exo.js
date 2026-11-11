
function acheter(){
  let solde = 2000;
  let prix = Number(document.getElementById("forfait").value);

  // Vérifier si le montant est suffisant
  if(solde >= prix){
    let nouveauSolde = solde - prix;
    document.getElementById("resultat").innerHTML = 
      "✅ Achat réussi !<br>" +
      "Forfait : " + prix + " FCFA<br>" +
      "Nouveau solde : " + nouveauSolde + " FCFA";
  } else {
    document.getElementById("resultat").innerHTML = 
      "❌ Solde insuffisant ! Il te faut " + prix + " FCFA.";
  }
}
