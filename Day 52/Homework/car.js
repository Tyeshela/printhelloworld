function Engine(type, horsepower) {
    this.type = type;
    this.horsepower = horsepower;
  }
  
  function Car(make, model, year, engineType, engineHorsepower) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = new Engine(engineType, engineHorsepower);
  
    this.getEngine = function() {
      return this.engine;
    };
  }
  
  var myCar = new Car("Toyota", "Corolla", 2021, "V6", 300);
  var engineDetails = myCar.getEngine();