export abstract class Animal {
    protected humeur: number
    protected faim: number
    protected energie: number

    constructor(humeur: number, faim: number, energie: number) {
        this.humeur = humeur;
        this.faim = faim;
        this.energie = energie;
    }

    protected abstract crier();

    abstract type(): string;

    public jouer() : void {
        this.humeur++;
        this.energie--;
        this.faim++;
    }

    public dormir() : void {
        this.energie++;
        this.faim--;
        this.humeur++;
    }

    public manger() : void {
        this.crier();
        this.faim -= 2;
        this.humeur++;
    }

    public afficherInfo() : void {
        console.log('Son etat est \n' +
            'humeur : ' + this.humeur + ' \n' +
            'faim : ' + this.faim + '\n' +
            'energie : ' + this.energie)
    }
}