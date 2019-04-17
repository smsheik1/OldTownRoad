class Dragon {
	constructor(name,health,stamina,firePower) {
		this.name = name;
		this.health = health;
		this.stamina = stamina;
		this.firePower = firePower;
	};
	function wumbo() {
		console.log('wumbo')
	}
};


dragon1 = new Dragon("Fred",100,30);
console.log(dragon1);
