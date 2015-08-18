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





});
