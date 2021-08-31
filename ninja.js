class Ninja {
    constructor(name, health = 50, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
    }

    sayName(){
        console.log(`My name is ${this.name}!!`)
    }

    showStats(){
        console.log(this)
    }

    drinkSake(){
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja{
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom(){
        this.drinkSake()
        console.log("Programming is 10% writing code and 90% udnerstanding why it's not working!")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
