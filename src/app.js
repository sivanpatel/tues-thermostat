thermostat = new Thermostat();

//JQUERY

var temperature = document.getElementById('temperature');
ShowTemperature = function() {
  temperature.innerHTML = thermostat.temperature;
};
TemperatureColour = function() {
  temperature.style.color = thermostat.colourUpdate();
};

$( document ).ready(function() {
  $('#temperature').show(function() {
    ShowTemperature();
    TemperatureColour();
  })
  $('#up').click(function() {
    ShowTemperature();
    thermostat.raise();
    TemperatureColour();
  });

  $('#down').click(function() {
    ShowTemperature();
    thermostat.lower();
    TemperatureColour();
  });

  $('#reset').click(function() {
    ShowTemperature();
    thermostat.resetTemperature();
    TemperatureColour();
  })

  $('#powerMode').change(function() {
    if(this.checked) {
      thermostat.powerSaveSwitchOn();
    } else {
      thermostat.powerSaveSwitchOff();
    };
    ShowTemperature();
    TemperatureColour();
  })
});


// JAVASCRIPT STUFF
// var temperature = document.getElementById('temperature');
// TemperatureColour = function() {
//   temperature.innerHTML = thermostat.temperature;
//   temperature.style.color = thermostat.colourUpdate();
// };
// TemperatureColour();

// var upButton = document.getElementById('up');
// upButton.onclick = function() {thermostat.raise();
//                                TemperatureColour();
//                               };

// var downButton = document.getElementById('down');
// downButton.onclick = function() {thermostat.lower();
//                                 TemperatureColour();
//                                 };

// var resetButton = document.getElementById('reset');
// resetButton.onclick = function() {thermostat.resetTemperature();
//                                   TemperatureColour();
//                                   };

// var PowerCheckBox = document.getElementById('powerMode');
// PowerCheckBox.onclick = function() {
//                                   if(this.checked) {
//                                     thermostat.powerSaveSwitchOn();
//                                     TemperatureColour();
//                                   } else {
//                                     thermostat.powerSaveSwitchOff();
//                                     TemperatureColour();
//                                   };
//                                 };
