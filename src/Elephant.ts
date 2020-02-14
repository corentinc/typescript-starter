import {Animal} from "./Animal";

export class Elephant extends Animal{

    constructor() {
        super(3, 5, 6)
    }

    protected crier() {
        console.log("barrrrriiiii")
    }

    type(): string {
        return "elephant";
    }

}