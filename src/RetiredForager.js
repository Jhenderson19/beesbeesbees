var RetiredForagerBee = function() {
  this = Object.create(ForagerBee);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.forage = function() { return 'I am too old, let me play cards instead'; }
  this.gamble = function() {
    let treasure = 'treasure';
    this.treasureChest.push(treasure);
  }
};

