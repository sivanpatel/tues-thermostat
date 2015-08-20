// JQUERY APP

thermostat = new Thermostat();

var temperature = $('span')[0];
ShowTemperature = function() {
  temperature.innerHTML = thermostat.temperature;
};
TemperatureColour = function() {
  temperature.style.color = thermostat.colourUpdate();
};



var weatherCall = function(city){
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric", function(result){
      var temp = Math.round(result.main.temp);
      showTemp(temp);
      var weather = result.weather[0].description;
      showWeather(weather);
    });
};


showTemp = function(temp){
  $('.location_temp').html(temp);
};

showWeather = function(weather){
  $('.location_weather').html(weather);
};

$( document ).ready(function() {
  $('.temperature').show(function() {
    ShowTemperature();
    TemperatureColour();
  });
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
  });

  $('input').eq(0).change(function() {
    if(this.checked) {
      thermostat.powerSaveSwitchOn();
    } else {
      thermostat.powerSaveSwitchOff();
    };
    ShowTemperature();
    TemperatureColour();
  });

  $('.search').click(function() {
    var city = $('.city').val();
    weatherCall(city);
    $('.city').val('');
  });



});
