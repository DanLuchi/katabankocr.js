function Entry() {
  this.number = function(raw) {
    var lines = raw.split("\n")
    var digits = []
    digits[0] = lines[0].slice(0,3)   + lines[1].slice(0,3)   + lines[2].slice(0,3)
    digits[1] = lines[0].slice(3,6)   + lines[1].slice(3,6)   + lines[2].slice(3,6)
    digits[2] = lines[0].slice(6,9)   + lines[1].slice(6,9)   + lines[2].slice(6,9)
    digits[3] = lines[0].slice(9,12)  + lines[1].slice(9,12)  + lines[2].slice(9,12)
    digits[4] = lines[0].slice(12,15) + lines[1].slice(12,15) + lines[2].slice(12,15)
    digits[5] = lines[0].slice(15,18) + lines[1].slice(15,18) + lines[2].slice(15,18)
    digits[6] = lines[0].slice(18,21) + lines[1].slice(18,21) + lines[2].slice(18,21)
    digits[7] = lines[0].slice(21,24) + lines[1].slice(21,24) + lines[2].slice(21,24)
    digits[8] = lines[0].slice(24,27) + lines[1].slice(24,27) + lines[2].slice(24,27)

    var number = "";
    digits.forEach(function(digit_string) {
      var digit = new Digit();
      number = number + digit.number(digit_string);
    });

    return number
  }
}

function Digit() {
  var DIGITS = []
  DIGITS[0] = " _ " +
              "| |" +
              "|_|";
  DIGITS[1] = "   " +
              "  |" +
              "  |";
  DIGITS[2] = " _ " +
              " _|" +
              "|_ ";
  DIGITS[3] = " _ " +
              " _|" +
              " _|";
  DIGITS[4] = "   " +
              "|_|" +
              "  |";
  DIGITS[5] = " _ " +
              "|_ " +
              " _|";
  DIGITS[6] = " _ " +
              "|_ " +
              "|_|";
  DIGITS[7] = " _ " +
              "  |" +
              "  |";
  DIGITS[8] = " _ " +
              "|_|" +
              "|_|";
  DIGITS[9] = " _ " +
              "|_|" +
              " _|";

  this.number = function(raw) {
    if(raw === DIGITS[0]) {
      return 0;
    } else if (raw === DIGITS[1]) {
      return 1;
    } else if (raw === DIGITS[2]) {
      return 2;
    } else if (raw === DIGITS[3]) {
      return 3;
    } else if (raw === DIGITS[4]) {
      return 4;
    } else if (raw === DIGITS[5]) {
      return 5;
    } else if (raw === DIGITS[6]) {
      return 6;
    } else if (raw === DIGITS[7]) {
      return 7;
    } else if (raw === DIGITS[8]) {
      return 8;
    } else if (raw === DIGITS[9]) {
      return 9;
    }
  }
}