thermostat = new Thermostat();

var temperature = document.getElementById('temperature')

temperature.innerHTML = thermostat.temperature;
temperature.style.color = thermostat.displayColour;

var upButton = document.getElementById('up');
upButton.onclick = function() {thermostat.raise();
                               temperature.innerHTML = thermostat.temperature;
                               thermostat.colourUpdate();
                               temperature.style.color = thermostat.displayColour;
                              };

var downButton = document.getElementById('down');
downButton.onclick = function() {thermostat.lower();
                                temperature.innerHTML = thermostat.temperature;
                                thermostat.colourUpdate();
                                temperature.style.color = thermostat.displayColour;
                                };

var resetButton = document.getElementById('reset');
resetButton.onclick = function() {thermostat.resetTemperature();
                                  temperature.innerHTML = thermostat.temperature;
                                  thermostat.colourUpdate();
                                  temperature.style.color = thermostat.displayColour;
                                  };

var PowerButton = document.getElementById('powerMode');
PowerButton.onclick = function() {thermostat.powerSaveSwitch();
                                  temperature.innerHTML = thermostat.temperature;
                                  thermostat.colourUpdate();
                                  temperature.style.color = thermostat.displayColour;
                                  };
