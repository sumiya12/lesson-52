function Animal(ner) {
  //   var obj = Object.create(Animal.prototype);
  this.name = ner;
  this.hoolloh = function () {
    console.log(this.name + " hoololloo");
  };
  //   return obj;
}
Animal.prototype.hoolloh = function () {
  console.log(this.name + " hoololloo");
};

var a1 = new Animal(" ymaa");
a1.mailah = function () {
  console.log(this.name + " maillaa");
};
a1.hoolloh();
a1.mailah();

var a2 = new Animal(" uher");
a2.hoolloh();
var a3 = new Animal(" aduu");
a3.hoolloh();
a3.hoolloh();
