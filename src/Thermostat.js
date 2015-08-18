function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTempSaveOn = 25;
    this.maxTempSaveOff = 32;
    this.powerSavingMode = true;
    this.displayColour = "yellow";
};

Thermostat.prototype.raise = function() {
  if(this.powerSavingMode === true) {
    if(this.temperature < this.maxTempSaveOn){
      this.temperature++;
    };
  } else {
    if(this.temperature < this.maxTempSaveOff){
      this.temperature++;
    };
  };
};

Thermostat.prototype.lower = function() {
  if(this.temperature > this.minTemperature) {
    this.temperature--;
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.powerSaveSwitch = function() {
  if(this.powerSavingMode === true) {
    this.powerSavingMode = false;
  } else {
    if(this.temperature > this.maxTempSaveOn) {
      this.temperature = 25;
    }
    this.powerSavingMode = true;
  };
};

Thermostat.prototype.colourUpdate = function() {
  if(this.temperature < 18) {
    this.displayColour = "green";
  } else if(this.temperature < 25) {
    this.displayColour = "yellow";
  } else {
    this.displayColour = "red";
  }
};

