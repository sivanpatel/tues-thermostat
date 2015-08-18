thermostat = new Thermostat();

DisplayColor = function() {
  if(thermostat.temperature < 18) {
    document.getElementById('temperature').style.color = "green";
  } else if(thermostat.temperature < 25) {
    document.getElementById('temperature').style.color = "yellow";
  } else {
    document.getElementById('temperature').style.color = "red";
  }

}


var temperature = document.getElementById('temperature')
temperature.innerHTML = thermostat.temperature;
DisplayColor();

var upButton = document.getElementById('up');
upButton.onclick = function() {thermostat.raise();
                               temperature.innerHTML = thermostat.temperature;
                               DisplayColor();};

var downButton = document.getElementById('down');
downButton.onclick = function() {thermostat.lower();
                               temperature.innerHTML = thermostat.temperature;
                               DisplayColor();};

var resetButton = document.getElementById('reset');
resetButton.onclick = function() {thermostat.resetTemperature();
                                  temperature.innerHTML = thermostat.temperature;
                                  DisplayColor();};

var PowerButton = document.getElementById('powerMode');
PowerButton.onclick = function() {thermostat.powerSaveSwitch();
                                  temperature.innerHTML = thermostat.temperature;
                                  DisplayColor();};
