import {Animal} from "./Animal";

export class Mouton extends Animal {

    constructor() {
        super(5, 2, 3)
    }

    protected crier() {
        console.log('beeeeeeh')
    }

    type(): string {
        return "mouton";
    }
}