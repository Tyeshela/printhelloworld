function Person(name, age) {
    this.name = name;
    this.age = age;

    this.changeName = function(newName) {
        this.name = newName;
    };
}

var me = new Person("Alex", 14)
me.changeName("Alexandre")