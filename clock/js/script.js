$(document).ready(function(){
  var counter = 25 * 60; //default time = 25 min
  var breaktime = 5 * 60; //default break time = 5 min
  var timeCount = [5, 10, 15, 20, 25, 30, 35, 40, 45];
  var breakCount = [1, 2, 3, 5, 10, 15, 20, 25, 30];
  var i = null;
  var b = null;
  $(".ses-time").text(counter / 60);
  $(".br-time").text(breaktime / 60);
  $(".5-min").click(function(){
    i = 0;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(timeCount / 60);
  });
  $(".10-min").click(function(){
    i = 1;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".15-min").click(function(){
    i = 2;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".20-min").click(function(){
    i = 3;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".25-min").click(function(){
    i = 4;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".30-min").click(function(){
    i = 5;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".35-min").click(function(){
    i = 6;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".40-min").click(function(){
    i = 7;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".45-min").click(function(){
    i = 8;
    counter = timeCount[i] * 60;
    $("#timer").text(counter / 60 + ":" + "00")
    $(".ses-time").text(counter / 60);
  });
  $(".1-min-b").click(function(){
    b = 0;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".2-min-b").click(function(){
    b = 1;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".3-min-b").click(function(){
    b = 2;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".5-min-b").click(function(){
    b = 3;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".10-min-b").click(function(){
    b = 4;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".15-min-b").click(function(){
    b = 5;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".20-min-b").click(function(){
    b = 6;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".25-min-b").click(function(){
    b = 7;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $(".30-min-b").click(function(){
    b = 8;
    breaktime = breakCount[b] * 60;
    $("#timer").text(breaktime / 60 + ":" + "00")
    $(".br-time").text(breaktime / 60);
  });
  $("#start").click(function(){
    setInterval(function(){
      if(counter > 0){
        breaktime = breakCount[b];
        $("#timer").text(Math.floor(--counter/60) + ":" + counter % 60);
        $("#timer-text").text("Session in progress")
      }
      else if (counter <= 0) {
        alert("Break Time!")
        $("#timer-text").text("Break Time!")
        $("#timer").text(Math.floor (--breaktime/60) + ":" + breaktime % 60)
      };
      if (breaktime <= 0) {
        counter = timeCount[i];
      }
      }, 1000
      );
    });
  });
