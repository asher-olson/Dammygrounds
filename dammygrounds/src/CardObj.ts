class CardObj {
    id: number;
    name: string;
    attack: number;
    health: number;
    text: string;
    constructor(id: number, name: string, attack: number, health: number, text: string = ""){
      this.id = id;
      this.name = name;
      this.attack = attack;
      this.health = health;
      this.text = text;
    }
  }

export default CardObj;