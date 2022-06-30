class Animal {
  constructor() {
    this.name;
    this.age;
    this.isMammal;
  }
}
class Rabbit extends Animal {
  constructor(name, isMammal) {
    super(isMammal);
    this.name = name;
    this.isMammal = true;
  }

  eat = () => `${this.name} sedang makan!`;
}

class Eagle extends Animal {
  constructor(name, isMammal) {
    super(isMammal);
    this.name = name;
    this.isMammal = false
  }
  fly = () => `${this.name} sedang terbang`
}

const eagle1 = new Eagle('harold')
console.log(eagle1)