describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start at 20C', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be able to raise the temperature by 1 degree', function() {
    thermostat.raise();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should be able to decrease the temperature by 1 degree', function() {
    thermostat.lower();
    expect(thermostat.temperature).toEqual(19);
  });

  it('should not decrease under minimum temperature', function() {
    difference = thermostat.temperature - thermostat.minTemperature + 1;
    for(i=0; i<difference; i++) {
      thermostat.lower();
    };
    expect(thermostat.temperature).toEqual(thermostat.minTemperature);
  });

  it('should not increase above maximum temperature with power saving mode on', function() {
    difference = thermostat.maxTempSaveOn - thermostat.temperature + 1;
    for(i=0; i<difference; i++) {
      thermostat.raise();
    };
    expect(thermostat.temperature).toEqual(thermostat.maxTempSaveOn);
  });

  it('should not increase above maximum temperature with power saving mode off', function() {
    difference = thermostat.maxTempSaveOff - thermostat.temperature + 1;
    thermostat.powerSaveSwitch();
    for(i=0; i<difference; i++) {
      thermostat.raise();
    };
    expect(thermostat.temperature).toEqual(thermostat.maxTempSaveOff);
  });

  it('should have power saving mode on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('should be able to turn power saving mode off', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('should be able to turn power saving mode on', function() {
    thermostat.powerSaveSwitch();
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('should reset to 25 when turning power saving mode on if the temperature is above 25', function() {
    thermostat.powerSaveSwitch();
    for(i=0; i<7; i++){
      thermostat.raise();
    };
    thermostat.powerSaveSwitch();
    expect(thermostat.temperature).toEqual(25);
  });

  it('should be able to reset the temperature to 20', function() {
    thermostat.raise();
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('should return green if the temperature is below 18', function() {
    for(i=0; i<3; i++){
      thermostat.lower();
    };
    thermostat.colourUpdate();
    expect(thermostat.displayColour).toEqual('green');
  });

  it('should return yellow if the temperature is below 25', function() {
    for(i=0; i<1; i++){
      thermostat.raise();
    };
    thermostat.colourUpdate();
    expect(thermostat.displayColour).toEqual('yellow');
  });

    it('should return red if the temperature is above 25', function() {
    thermostat.powerSaveSwitch();
    for(i=0; i<10; i++){
      thermostat.raise();
    };
    thermostat.colourUpdate();
    expect(thermostat.displayColour).toEqual('red');
  });

});
