function Entry() {
  this.number = function(raw) {
    return 123456789;
  }
}

function Digit() {
  var DIGITS = []
  DIGITS[0] = " _ " +
              "| |" +
              "|_|";

  this.number = function(raw) {
    if(raw === DIGITS[0]) {
      return 0;
    } else {
      return 1;
    }
  }
}