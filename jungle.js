class Jungle {
    constructor() {
        let sound = true;
        this.animals = {
            'tiger': 0,
            'monkey': 0,
            'snake': 0
        };
        this.getFood = () => {
            return ['meat', 'fish', 'bugs', 'grain'];
        }
        this.getSound = () => sound;
        this.soundOff = () => { sound = false; }
    }

    get jungleProps() {
        return this;
    }

    createAnimals(animal_type) {
        switch (animal_type) {
            case 'tiger':
                this.animals[animal_type]++;
                return new Tiger(this);
                break;
            case 'snake':
                this.animals[animal_type]++;
                return new Snake(this);
                break;
            case 'monkey':
                this.animals[animal_type]++;
                return new Monkey(this);
                break;
            default:
                'Animal does not exists in the Jungle';
        }
    }
}

class Animal {
    constructor() {
        this.energy = 0;
    }

    makeSound() {
        if (this.energy < 3) console.log('Does not have energy to make sound');
        else this.energy = this.energy - 3;
    }

    eatFood(food) {
        this.energy = this.energy + 5;
    }

    sleep() {
        this.energy = this.energy + 10;
    }
}

class Tiger extends Animal {
    constructor({ getSound, getFood }) {
        super();
        this.getSound = () => getSound();
        this.getFood = () => getFood();
        // this.energy = 0;
    }

    sleep() {
        if (this.getSound()) super.sleep()
        else this.energy = this.energy + 5;
    }

    eatFood(food) {
        if (food === 'grain') console.log("Tiger can't eat grain");
        else super.eatFood(food)
    }
}

class Monkey extends Animal {
    constructor({ getSound, getFood }) {
        super();
        this.getSound = () => getSound();
        this.getFood = () => getFood();
        // this.energy = 0;
    }

    makeSound() {
        if (this.getSound()) super.makeSound()
        else {
            if (this.energy < 4) console.log('Does not have energy to make sound');
            else this.energy = this.energy - 4;
        }
    }

    eatFood(food) {
        if (this.getSound()) super.eatFood(food)
        else this.energy = this.energy + 2;
    }

    play() {
        if (this.energy < 8) console.log('Monkey is too tired');
        else {
            console.log('Oooo Oooo Oooo');
            this.energy = this.energy - 8;
        }
    }
}

class Snake extends Animal {
    constructor({ getSound, getFood }) {
        super()
        this.getSound = () => getSound();
        this.getFood = () => getFood();
    }
}