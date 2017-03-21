scalar.ui.desktop.wave = function() {
  this.config = scalar.ui.desktop.wave.config;

  this.getIp = new XMLHttpRequest();
  this.getIp.open("GET", this.config.LOCATION.URL, true);
  this.getIp.responseType = "json";
  this.location = this.getIp;
  this.getIp.send();
  this.getIp.onload = function() {
    this.weather = new XMLHttpRequest();
    this.weather.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + scalar.ui.desktop.wave.location.response.city + "&mode=json&appid=" + scalar.ui.desktop.wave.config.LOCATION.API_KEY + "&units=metric", true);
    this.weather.responseType = "json";
    this.weather.send();
  };
  this.days = new Array();
  this.days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
  scalar.exec('date "+%u"', function(output) {
    var toDayOrder = parseInt(output) - 1;
    scalar.ui.select('#desktop').innerHTML = scalar.ui.desktop.wave.days[toDayOrder];
    for (var i = 0; i < 5; i++) {
      var dayOrder = i + toDayOrder;
      if (dayOrder > 6) {
        dayOrder = dayOrder - 7;
        console.log(dayOrder);
      }
      
    }
  });
  this.getWaveUIElement();
  this.time();
  this.dateAndTime();


  this.dialog = function() {
    'use strict';
    var dialogButton = document.querySelector('.dialog-button');
    var dialog = document.querySelector('#dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
  };
  this.dialog();

/*
  scalar.exec('date "+%d"', function(output) {
    scalar.ui.desktop.wave.dayNumber = parseInt(output);
  })
  
  scalar.ui.desktop.wave.a = scalar.ui.desktop.wave.getIp.weather.response.list;
  
  scalar.ui.desktop.wave.dayOne = [1];
  scalar.ui.desktop.wave.dayTwo = [2];
  scalar.ui.desktop.wave.dayThree = [3];
  scalar.ui.desktop.wave.dayFour = [4];
  scalar.ui.desktop.wave.dayFive = [5];

  for (var j = 0 ; j < scalar.ui.desktop.wave.a.length ; j++){
    switch(parseInt(scalar.ui.desktop.wave.a[j].dt_txt.split(' ')[0].split('-')[2])) {
        case scalar.ui.desktop.wave.dayNumber:
            scalar.ui.desktop.wave.day1.push(a[j]);
            break;
        case scalar.ui.desktop.wave.dayNumber+1:
            scalar.ui.desktop.wave.day2.push(a[j]);
            break;
        case scalar.ui.desktop.wave.dayNumber+2:
            scalar.ui.desktop.wave.day3.push(a[j]);
            break;
          case scalar.ui.desktop.wave.dayNumber+3:
            scalar.ui.desktop.wave.day4.push(a[j]);
            break;
          case scalar.ui.desktop.wave.dayNumber+4:
            scalar.ui.desktop.wave.day5.push(a[j]);
            break;
        default:
            break;
    }
  }

*/
  scalar.exec('date "+%d"', function(output) {
    scalar.ui.desktop.wave.dayNumber = parseInt(output);
  })
  
  var weatherControl = setInterval(function() {
    try {
      if (scalar.ui.desktop.wave.getIp.weather.response.list[0].weather[0].description) {
          
          scalar.ui.desktop.wave.a = scalar.ui.desktop.wave.getIp.weather.response.list;
          
          scalar.ui.desktop.wave.day1 = [];
          scalar.ui.desktop.wave.day2 = [];
          scalar.ui.desktop.wave.day3 = [];
          scalar.ui.desktop.wave.day4 = [];
          scalar.ui.desktop.wave.day5 = [];

          for (var j = 0 ; j < scalar.ui.desktop.wave.a.length ; j++){
            console.log(parseInt(scalar.ui.desktop.wave.a[j].dt_txt.split(' ')[0].split('-')[2]) + "=="+ scalar.ui.desktop.wave.dayNumber)
            switch(parseInt(scalar.ui.desktop.wave.a[j].dt_txt.split(' ')[0].split('-')[2])) {
                case scalar.ui.desktop.wave.dayNumber:
                    scalar.ui.desktop.wave.day1.push(scalar.ui.desktop.wave.a[j]);
                    break;
                case scalar.ui.desktop.wave.dayNumber+1:
                    scalar.ui.desktop.wave.day2.push(scalar.ui.desktop.wave.a[j]);
                    break;
                case scalar.ui.desktop.wave.dayNumber+2:
                    scalar.ui.desktop.wave.day3.push(scalar.ui.desktop.wave.a[j]);
                    break;
                  case scalar.ui.desktop.wave.dayNumber+3:
                    scalar.ui.desktop.wave.day4.push(scalar.ui.desktop.wave.a[j]);
                    break;
                  case scalar.ui.desktop.wave.dayNumber+4:
                    scalar.ui.desktop.wave.day5.push(scalar.ui.desktop.wave.a[j]);
                    break;
                default:
                    break;
            }
          }

          
        clearInterval(weatherControl);

        scalar.log.success.push('Weather updated.');
      }
    } catch (err) {
      scalar.log.error.push('Weather update failed.');
    }
  }, 100);
/*
 var weatherControl = setInterval(function() {
    try {
      if (scalar.ui.desktop.wave.getIp.weather.response.list[0].weather[0].description) {
        var weatherIdSmall = scalar.ui.desktop.wave.getIp.weather.response.list[0].weather[0].id;
        var tempSmall = parseInt(scalar.ui.desktop.wave.getIp.weather.response.list[0].main.temp);
        scalar.ui.desktop.wave.weather('#weather', weatherIdSmall, 0, false);
        scalar.ui.desktop.wave.weather('#daily-weather-0', weatherIdSmall, tempSmall, true);

        scalar.exec('date "+%d', function(output) {
          scalar.ui.desktop.wave.toDay = output;
        });
        var counter = 1;
        for (var i = 0; i < scalar.ui.desktop.wave.getIp.weather.response.list.length; i++) {
          if (scalar.ui.desktop.wave.getIp.weather.response.list[i].dt_txt.split('-')[2].split(' ')[0] != scalar.ui.desktop.wave.toDay) {
            if (scalar.ui.desktop.wave.getIp.weather.response.list[i].dt_txt.split('-')[2].split(' ')[1].split(':')[0] == "15") {
              var weatherId = scalar.ui.desktop.wave.getIp.weather.response.list[i].weather[0].id;
              var temp = parseInt(scalar.ui.desktop.wave.getIp.weather.response.list[i].main.temp);
              scalar.ui.desktop.wave.weather('#daily-weather-' + counter.toString(), weatherId, temp, true);
              counter++;
              if (counter == 4) {
                clearInterval(weatherControl);
              }
            }
          }
        }
        clearInterval(weatherControl);

        scalar.log.success.push('Weather updated.');
      }
    } catch (err) {
      scalar.log.error.push('Weather update failed.');
    }
  }, 100);

  scalar.ui.select('#update').onclick = function() {
    scalar.exec('git pull', function(output) {
      location.reload();
      alert("Cihazınız güncelleştirildi.", "Uyarı");
    })
  }
  scalar.ui.select('#calendar').onclick = function() {
    scalar.ui.select('#celendar-detail').setAttribute('style', 'width:270px;')
    setTimeout(function() {
      scalar.ui.select('#weather-detail').setAttribute('style', 'display:block;')
      scalar.ui.select('#time-detail').setAttribute('style', 'display:block;')
    }, 300);
  }
  scalar.ui.select('#celendar-close').onclick = function() {
    scalar.ui.select('#celendar-detail').setAttribute('style', 'width:0px;')
    scalar.ui.select('#weather-detail').setAttribute('style', 'display:none;')
    scalar.ui.select('#time-detail').setAttribute('style', 'display:none;')
  }
  this.scalarOpen = function(e) {
    try {
      if (e.keyCode == 13) {
        if (this.scalarBrowser != undefined && this.scalarBrowser.closed === "false") {
          this.scalarBrowser.location = "//" + document.getElementById("search").value;
          this.scalarBrowser.focus();
          this.scalarBrowser.eval("document.querySelector('.StreamsHero-header').setAttribute('onclick','window.close()')");

        } else {
          this.scalarBrowser = window.open("//" + document.getElementById("search").value);
          this.scalarBrowser.focus();
          this.scalarBrowser.eval("this.h = document.createElement('div');this.h.id = 'node-scalar';this.h.setAttribute('onclick','window.close()');this.h.setAttribute('style','cursor:pointer;background:rgba(119, 41, 83, 1);border-:2px solid #fff;border-radius:50%;width:40px;height:40px;position:fixed;left:10px;bottom:10px;z-index:99999999999999999999;text-align: center;line-height: 35px;color: rgba(255,255,255,0.8);font-size: 30px;');this.h.innerHTML='x';document.body.appendChild(this.h)");
        }
      }
    } catch (err) {}
  }
  this.scalarDirekt = function(url) {
    try {
      if (this.scalarBrowser != undefined && this.scalarBrowser.closed === "false") {
        this.scalarBrowser.location = "//" + url;
        this.scalarBrowser.focus();
        this.scalarBrowser.eval("document.querySelector('.StreamsHero-header').setAttribute('onclick','window.close()')");

      } else {
        this.scalarBrowser = window.open("//" + url);
        this.scalarBrowser.focus();
        this.scalarBrowser.eval("this.h = document.createElement('div');this.h.id = 'node-scalar';this.h.setAttribute('onclick','window.close()');this.h.setAttribute('style','cursor:pointer;background:rgba(119, 41, 83, 1);border-:2px solid #fff;border-radius:50%;width:40px;height:40px;position:fixed;left:10px;bottom:10px;z-index:99999999999999999999;text-align: center;line-height: 35px;color: rgba(255,255,255,0.8);font-size: 30px;');this.h.innerHTML='x';document.body.appendChild(this.h)");
      }
    } catch (err) {}
  }
  */
}

scalar.ui.desktop.wave.config = {
  LOCATION: {
    URL: "http://ip-api.com/json",
    API_KEY: "d869412526bd58dc27945351b1ef6af2"
  },
  TIME: {
    SELECT: '#time',
    RELOAD: 60000
  },
  WEATHER: {
    RELOAD: 60000
  },
  DATEANDTIME: {
    RELOAD: 60000
  }
};
scalar.ui.desktop.wave.prototype = {
  getWaveUIElement: function() {
   
  },
  dateAndTime: function() {
    /*
    scalar.exec('date "+%d %B %Y %A"', function(output) {
      scalar.ui.select('#time-dmy').innerHTML = output;
    })
    scalar.exec('date "+%H:%M"', function(output) {
      scalar.ui.select('#time-hm').innerHTML = output;
    });
    setInterval(function() {
      scalar.exec('date "+%d %B %Y %A"', function(output) {
        scalar.ui.select('#time-dmy').innerHTML = output;
      })
      scalar.exec('date "+%H:%M"', function(output) {
        scalar.ui.select('#time-hm').innerHTML = output;
      });
    }, this.config.DATEANDTIME.RELOAD);
    */
  },
  time: function() {
    /*
    scalar.exec('date "+%H:%M"', function(output) {
      scalar.ui.select(scalar.ui.desktop.wave.config.TIME.SELECT).innerHTML = output;
    });

    setInterval(function() {
      scalar.exec('date "+%H:%M"', function(output) {
        scalar.ui.select(scalar.ui.desktop.wave.config.TIME.SELECT).innerHTML = output;
      });
    }, this.config.TIME.RELOAD);
    */
  },
  weather: function(select, description, temp, control) {
    /*if (control) {
      scalar.ui.select(select + ' .daily-weather-degree span').innerHTML = temp.toString();
    }
    switch (description) {
      case 800:
        scalar.exec('date "+%H:%M"', function(output) {
          this.timeValue = parseInt(output.split(':')[0])
          if (this.timeValue < 7 || this.timeValue > 18) {
            if (control) {
              scalar.ui.select(select + ' div').className = 'icon-moon';
              scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava açık ve ılık olacak.";
            } else {
              scalar.ui.select(select).className = 'icon-moon';
            }
          } else {
            if (control) {
              scalar.ui.select(select + ' div').className = 'icon-sun';
              scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava açık ve ılık olacak.";
            } else {
              scalar.ui.select(select).className = 'icon-sun';
            }
          }
        });
        break;
      case 801:
        scalar.exec('date "+%H:%M"', function(output) {
          this.timeValue = parseInt(output.split(':')[0])
          if (this.timeValue < 7 || this.timeValue > 18) {
            if (control) {
              scalar.ui.select(select + ' div').className = 'icon-cloud';
              scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava parçalı bulutlu. Herşeye hazırlıklı olun.";
            } else {
              scalar.ui.select(select).className = 'icon-cloud';
            }
          } else {
            if (control) {
              scalar.ui.select(select + ' div').className = 'icon-cloudy';
              scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava parçalı bulutlu. Herşeye hazırlıklı olun.";
            } else {
              scalar.ui.select(select).className = 'icon-cloudy';
            }
          }
        });
        break;
      case 802:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-cloud2';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kapalı olacak. Dikkatli olun.";
        } else {
          scalar.ui.select(select).className = 'icon-cloud2';
        }
        break;
      case 803:
      case 804:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-cloudy2';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kapalı olacak. Yağmur yağma ihtimaline karşı dikkatli olun.";
        } else {
          scalar.ui.select(select).className = 'icon-cloudy2';
        }
        break;
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-rainy2';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kapalı. Aynı zamanda yağmurlu ve gökgürültülü olacak.";
        } else {
          scalar.ui.select(select).className = 'icon-rainy2';
        }
        break;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 520:
      case 521:
      case 522:
      case 531:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-rainy2';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kapalı ve aynı zamanda yağmurlu olacak. Şemsiyenizi almayı unutmayın.";
        } else {
          scalar.ui.select(select).className = 'icon-rainy2';
        }
        break;
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-lightning2';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kapalı ve gökgürültülü. Dışarıya çıkmak için iyi bir zaman olmayabilir.";
        } else {
          scalar.ui.select(select).className = 'icon-lightning2';
        }
        break;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
      case 511:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-snowy3';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava kar yağışlı. Eldivenlerinizi almayı unutmayın kartopu oynamak için iyi bir zaman.";
        } else {
          scalar.ui.select(select).className = 'icon-snowy3';
        }
        break;
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        if (control) {
          scalar.ui.select(select + ' div').className = 'icon-weather3';
          scalar.ui.select(select + ' .daily-weather-commend').innerHTML = "Hava sisli olacak. Araç kullanmak için iyi bir zaman değil, dikkatli olun.";
        } else {
          scalar.ui.select(select).className = 'icon-weather3';
        }
        break;
    }
    */
  } 
}



scalar.ui.desktop.wave = new scalar.ui.desktop.wave();