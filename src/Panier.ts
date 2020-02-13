import {Produit} from "./Produit";

export class Panier {
    // @ts-ignore
    produitsQuantiteMap: Map<Produit, number>;

    constructor() {
        // @ts-ignore
        this.produitsQuantiteMap = new Map<Produit, number>()
    }

    ajouterProduit(produit: Produit) : void {
        if (this.produitsQuantiteMap.has(produit)) {
            let quantite = this.produitsQuantiteMap.get(produit)
            quantite++;
            this.produitsQuantiteMap.set(produit, quantite)
        } else {
            this.produitsQuantiteMap.set(produit, 1)
        }
    }

    supprimerProduit(produit: Produit) : void {
        if (this.produitsQuantiteMap.has(produit)) {
            let quantite = this.produitsQuantiteMap.get(produit)
            quantite--
            if (quantite == 0) {
                this.produitsQuantiteMap.delete(produit)
            } else {
                this.produitsQuantiteMap.set(produit, quantite)
            }
        }
    }

    calculerQuantiteTotale() : number {
        let quantiteTotal = 0

        this.produitsQuantiteMap.forEach(quantite => {
            quantiteTotal += quantite
        })

        return quantiteTotal;
    }

    calculerCoutTotal() : number {
        let coutTotal = 0
        this.produitsQuantiteMap.forEach((quantite, produit) => {
            coutTotal += quantite * produit.prix
        })
        return coutTotal;
    }

}