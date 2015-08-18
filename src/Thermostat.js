function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTempSaveOn = 25;
    this.powerSavingMode = true;
};

Thermostat.prototype.raise = function() {
  if(this.temperature < this.maxTempSaveOn){
    this.temperature++;
  };
};

Thermostat.prototype.lower = function() {
  if(this.temperature > this.minTemperature) {
    this.temperature--;
  };
};

Thermostat.prototype.powerSaveSwitch = function() {
  if(this.powerSavingMode === true) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
  };
};


