import {Animal} from "./Animal";

export class Chien extends Animal {

    constructor() {
        super(8, 5, 7)
    }


    protected crier(): void {
        console.log('Waf waf')
    }

    type(): string {
        return "chien";
    }
}