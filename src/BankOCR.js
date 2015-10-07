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