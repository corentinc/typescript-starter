import {Animal} from "./Animal";
import {Chat} from "./Chat";
import {Chien} from "./Chien";
import {Mouton} from "./Mouton";
import {Cheval} from "./Cheval";

export class Zoo {
    private mesAnimaux: Animal[];

    constructor() {
        this.mesAnimaux = []
    }

    compterAnimaux_version1() {
        let compteurChat = 0;
        let compteurChien = 0;
        let compteurMouton = 0;
        let compteurCheval = 0;

        for (let i = 0; i < this.mesAnimaux.length; i++) {
            let animal = this.mesAnimaux[i]
            if (animal instanceof Chat) {
                compteurChat++;
            } else if (animal instanceof Chien) {
                compteurChien++;
            } else if (animal instanceof Mouton) {
                compteurMouton++
            } else if (animal instanceof Cheval) {
                compteurCheval++;
            }
        }

        console.log("V1 === ")
        console.log('Mon zoo est composé : ')
        console.log(compteurChat + ' chats')
        console.log(compteurChien + ' chiens')
        console.log(compteurCheval + ' chevaux')
        console.log(compteurMouton + ' moutons')
    }

    compterAnimaux_version2() {
        // @ts-ignore
        let typeVersQuantite = new Map<String, number>()

        for (let i = 0; i < this.mesAnimaux.length; i++) {
            let animal = this.mesAnimaux[i]

            if (typeVersQuantite.has(animal.type())) {
                let quantite = typeVersQuantite.get(animal.type())
                quantite++
                typeVersQuantite.set(animal.type(), quantite)
            } else {
                typeVersQuantite.set(animal.type(), 1)
            }
        }

        console.log("V2 === ")
        console.log('Mon zoo est composé de ')
        typeVersQuantite.forEach(
            (quantite, typeAnimal) => console.log(typeAnimal + ' : ' + quantite)
        )
    }


    ajouterAnimal(nouvelAnimal: Animal) {
        this.mesAnimaux.push(nouvelAnimal)
    }

    afficherNbTotalAnimaux() {
        let nombreAnimaux = this.mesAnimaux.length
        console.log('Il y a ' + nombreAnimaux + ' animaux')
    }

    afficherEtatAnimaux() {
        for (let i = 0; i < this.mesAnimaux.length; i++) {
            this.mesAnimaux[i].afficherInfo()
        }
    }

}