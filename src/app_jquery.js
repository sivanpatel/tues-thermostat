// JQUERY APP

thermostat = new Thermostat();

var temperature = $('span')[0];
ShowTemperature = function() {
  temperature.innerHTML = thermostat.temperature;
};
TemperatureColour = function() {
  temperature.style.color = thermostat.colourUpdate();
};

$( document ).ready(function() {
  $('.temperature').show(function() {
    ShowTemperature();
    TemperatureColour();
  })
  $('button').eq(0).click(function() {
    thermostat.raise();
    ShowTemperature();
    TemperatureColour();
  });

  $('button').eq(1).click(function() {
    thermostat.lower();
    ShowTemperature();
    TemperatureColour();
  });

  $('button').eq(2).click(function() {
    thermostat.resetTemperature();
    ShowTemperature();
    TemperatureColour();
  })

  $('input').eq(0).change(function() {
    if(this.checked) {
      thermostat.powerSaveSwitchOn();
    } else {
      thermostat.powerSaveSwitchOff();
    };
    ShowTemperature();
    TemperatureColour();
  })
});
