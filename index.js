class Human {
    constructor(humanName, age) {
        this.humanName = humanName
        this.age = age
    }
    humanInfo () {
        console.log(`${this.humanName}, ${this.age} years old`)
    }
}

class Car {
    constructor(factory, model, year, vin) {
        this.factory = factory
        this.model = model
        this.year = year
        this.vin = vin
        this.owner = ''
    }
    
    addOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner
        } else {
            console.log('Возраст хозяина должен быть больше 18 лет.')
        }
    }

    info() {
        console.log(`Автомобиль: \n Марка - ${this.factory} \n Модель - ${this.model} \n Год выпуска - ${this.year} \n Винкод - ${this.vin}`)
        if (this.owner) {
            console.log(`Хозяин этого автомобиля:`)
            this.owner.humanInfo()
        } else {
            console.log(`У этого автомобиля нет хозяина.`)
        }
    }
}

const human1 = new Human('Ivan', 28)
const human2 = new Human('Nikita', 15)
// const human3 = new Human('Liza', 17)
// const human4 = new Human('Alex', 22)


const car1 = new Car('BMW', 'X6', 2020, 'thw6546erther')
const car2 = new Car('Audi', 'Q7', 2019, 'srg654ergqeerg')
// const car3 = new Car('Opel', 'Insignia', 2018, 'srg65xfgjqeerg')
// const car4 = new Car('VW', 'Tuareg', 2023, 'jilg654ergqeerg')


car1.addOwner(human1)
car2.addOwner(human2)
// car3.addOwner(human3)
// car4.addOwner(human4)


car1.info()
car2.info()
// car3.info()
// car4.info()




