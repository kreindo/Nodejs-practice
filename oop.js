class Creature {
    constructor(id, isAlive) {
        this.id = id;
        this.isAlive = isAlive;
        this.crData = [];
    }
    showId = () => console.log(`creature id ${this.id}`);
    detectLife = () => console.log(`creature ${this.isAlive ? 'is alive' : 'is dead'}`)
}

class HostileCreatures extends Creature{
    constructor(id, ai, health, stats){
        super(id);
        this.ai = ai;
        this.health = health;
        this.stats = stats;

    }
    defineNewHostileCreature = (creatureName) => console.log(`${creatureName} is created with id of ${this.id || id}, health set to = ${this.health} and stats is set to ${JSON.stringify(this.stats)}`);

}

const lizard = new HostileCreatures(1, 'hostile', 1000, {
    str: 10,
    dex: 8,
    res: 15
})

lizard.defineNewHostileCreature('Red boi')