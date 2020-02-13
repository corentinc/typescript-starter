import {Panier} from "./Panier";
import {Produit} from "./Produit";

let monPanier = new Panier();

let maSouris = new Produit("Souris de gamer", 50);
let monClavier = new Produit("Clavier mécanique", 100);
let monUniteCentrale = new Produit("Unité de gamer", 2000);
let monEcran = new Produit("Écran 24 pouces", 150);

monPanier.ajouterProduit(maSouris);
monPanier.ajouterProduit(monClavier);
monPanier.ajouterProduit(monUniteCentrale);
monPanier.ajouterProduit(monEcran);
monPanier.ajouterProduit(monEcran);

// j'ai 5 produits dans mon panier
console.log("J'ai " + monPanier.calculerQuantiteTotale() + " produits dans mon panier");
// Le prix total est de : 2450
console.log("Le prix total est de : " + monPanier.calculerCoutTotal());

// je réalise que je n'ai besoin que d'un écran
monPanier.supprimerProduit(monEcran)

// j'ai 4 produits dans mon panier
console.log("J'ai " + monPanier.calculerQuantiteTotale() + " dans mon panier");
// Le prix total est de : 2300
console.log("Le prix total est de : " + monPanier.calculerCoutTotal());










