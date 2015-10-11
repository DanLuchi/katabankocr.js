function File(raw) {
  this.raw = raw;

  this.numbers = function() {
    var lines = this.raw.split("\n")

    var i, j, raw_entries = [], chunk = 4;
    for (i=0, j=lines.length; i<j; i+=chunk) {
        raw_entries.push(lines.slice(i,i+chunk).join("\n"));
    }

    var entries = [];
    raw_entries.forEach(function(raw_entry) {
      entry = new Entry(raw_entry);
      entries.push(entry.parse().number);
    });

    return entries;
  }
}

function Entry(raw, number) {
  this.raw = raw;
  this.number = number;

  this.parse = function() {
    var lines = this.raw.split("\n")

    var digits = [1,2,3,4,5,6,7,8,9]
    digits.forEach(function(foo, index) {
      a = index * 3
      b = (index + 1) * 3
      digits[index] = lines[0].slice(a,b) + lines[1].slice(a,b) + lines[2].slice(a,b);
    });

    var number = "";
    digits.forEach(function(digit_string) {
      var digit = new Digit(digit_string);
      number = number + digit.number();
    });

    return new Entry(this.raw, number);
  }

  this.isValid = function() {
    var d = []
    this.number.split('').forEach(function(digit) {
      d.push(parseInt(digit, 10));
    });

    return ((d[8]+2*d[7]+3*d[6]+4*d[5]+5*d[4]+6*d[3]+7*d[2]+8*d[1]+9*d[0]) % 11 === 0);
  }
}

function Digit(raw) {
  this.raw = raw;

  var DIGITS = [];
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

  this.number = function() {
    var raw = this.raw;
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