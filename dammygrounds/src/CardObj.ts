class CardObj {
    id: number;
    name: string;
    attack: number;
    health: number;
    text: string;
    type: string;
    constructor(id: number, name: string, attack: number, health: number, text: string = "", type: string = ""){
      this.id = id;
      this.name = name;
      this.attack = attack;
      this.health = health;
      this.text = text;
      this.type = type;
    }
  }

export default CardObj;