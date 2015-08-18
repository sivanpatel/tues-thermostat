function Thermostat() {
    this.temperature = 20;
};

Thermostat.prototype.raise = function() {
  this.temperature++;
};

Thermostat.prototype.lower = function() {
  this.temperature--;
};
