var a = null;
var temp, merc_x;
function rocketFly() {
  var elem = document.getElementById("rocket");
  elem.style.position = "absolute";
  var pos_y = 2850;
  var pos_x = temp;
  clearInterval(a);
  a = setInterval(fly, 1);
  function fly() {
    if (pos_y < 400) {
      clearInterval(a);
    } else {
      pos_y--;
      elem.style.top = pos_y + 'px';
      if (pos_x < merc_x + 200){
        pos_x++;
      }
      else if(pos_x > merc_x + 200)
        pos_x--;
    }
      elem.style.left = pos_x + 'px';
  }
}

function randomizeHorPos(){
    var elem = document.getElementById("planet_0");
    elem.style.position = "relative";
    elem.style.left = "2500px";
    for(var i = 1; i < 9; i++){
        var elem = document.getElementById("planet_" + i);
        elem.style.position = "relative";
        if (i == 1){
            merc_x = Math.floor(Math.random() * 4000 + 500);
            elem.style.left = merc_x + 'px';
        }
        else{
            temp = Math.floor(Math.random() * 4000 + 500);
        }
        //elem.style.left = Math.floor(Math.random() * 4000 + 500) + 'px';
        elem.style.left = temp + 'px';
    }
    temp += 250;
    elem = document.getElementById("rocket");
    elem.style.position = "relative";
    elem.style.left = temp + 'px';
    alert("Нажмите на ракету для ее запуска! Перезагрузите страницу для повторного запуска.");
}