// reference type 

let object1 = { value: 10 };
let object2 = object1;
object1 === object2 // this will return true

let object3 = { value: 10 };
object1 === object3 // this will return false

// context vs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation 

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, Im a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`Weeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');




