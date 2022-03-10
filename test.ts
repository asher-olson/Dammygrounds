class Minion {
    mana: number;
    attack: number;
    health: number;
    constructor(_mana: number, _attack: number, _health: number) {
        this.mana = _mana;
        this.attack = _attack;
        this.health = _health;
    }
}

class Player {
    name: string;
    health: number;
    constructor(_name: string, _health: number) {
        this.name = _name;
        this.health = _health;
    }
}

function battle() {
    let message: string = 'Hello, World!';
    console.log(message);
}

battle();