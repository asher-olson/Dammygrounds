var Minion = /** @class */ (function () {
    function Minion(_mana, _attack, _health) {
        this.mana = _mana;
        this.attack = _attack;
        this.health = _health;
    }
    return Minion;
}());
var Player = /** @class */ (function () {
    function Player(_name, _health) {
        this.name = _name;
        this.health = _health;
    }
    return Player;
}());
function battle() {
    var message = 'Hello, World!';
    console.log(message);
}
battle();
