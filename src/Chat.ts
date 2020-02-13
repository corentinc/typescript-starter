import {Animal} from "./Animal";

export class Chat extends Animal {

    constructor() {
        super(3, 2, 4)
    }

    protected crier(): void {
        console.log('Miaouuu')
    }
}