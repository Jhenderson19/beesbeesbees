var HoneyMakerBee = function() {
  this = Object.create(Bee);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  this.makeHoney = function() {
    this.honeyPot++;
  }
  this.giveHoney = function() {
    this.honeyPot--;
  }
};

