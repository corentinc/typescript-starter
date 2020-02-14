import {Chat} from "./Chat";
import {Chien} from "./Chien";
import {Mouton} from "./Mouton";
import {Cheval} from "./Cheval";
import {Zoo} from "./Zoo";
import {Elephant} from "./Elephant";

let monChat = new Chat();
let monChien = new Chien();
let monCheval = new Cheval();
let monMouton = new Mouton();
let monElephant = new Elephant();

let monZoo = new Zoo();
monZoo.ajouterAnimal(monChat);
monZoo.ajouterAnimal(monChat);
monZoo.ajouterAnimal(monChien);
monZoo.ajouterAnimal(monCheval);
monZoo.ajouterAnimal(monCheval);
monZoo.ajouterAnimal(monMouton);
monZoo.ajouterAnimal(monMouton);
monZoo.ajouterAnimal(monMouton);
monZoo.ajouterAnimal(monElephant)

// version 1 : obligé de la modifier lorsqu'un nouvel animal est créé
// on doit créer un nouveau compteur... c'est fastidieux !
// donc ELEPHANT n'apparait pas dans la V1 car, il n'a pas de compteur
monZoo.compterAnimaux_version1()

// version 2 : s'adapte automatiquement aux différents types
// ELEPHANT apparait ici :)
monZoo.compterAnimaux_version2()