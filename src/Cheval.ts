import {Animal} from "./Animal";

export class Cheval extends Animal {

    constructor() {
        super(10, 9, 7);
    }

    protected crier(): void {
        console.log("Heeeennnniiii")
    }
}