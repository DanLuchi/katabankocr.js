describe("Bank OCR", function() {

  describe("A file", function() {
    it("should parse multiple lines", function() {
      var raw_entry =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           \n" +
      " _     _  _     _  _  _  _ \n" +
      "| |  | _| _||_||_ |_   ||_|\n" +
      "|_|  ||_  _|  | _||_|  ||_|\n" +
      "                           ";
      var file = new File(raw_entry);
      expect(file.numbers()).toEqual(["123456789", "012345678"]);
    });

    it("should parse 012345678", function() {
      var raw_entry =
      " _     _  _     _  _  _  _ \n" +
      "| |  | _| _||_||_ |_   ||_|\n" +
      "|_|  ||_  _|  | _||_|  ||_|\n" +
      "                           ";
      var entry = new Entry(raw_entry);
      expect(entry.parse().number).toEqual("012345678");
    });
  });

  describe("An entry", function() {
    it("should parse 123456789", function() {
      var raw_entry =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           ";
      var entry = new Entry(raw_entry);
      expect(entry.parse().number).toEqual("123456789");
    });

    it("should parse 012345678", function() {
      var raw_entry =
      " _     _  _     _  _  _  _ \n" +
      "| |  | _| _||_||_ |_   ||_|\n" +
      "|_|  ||_  _|  | _||_|  ||_|\n" +
      "                           ";
      var entry = new Entry(raw_entry);
      expect(entry.parse().number).toEqual("012345678");
    });

    describe("isValid", function() {
      it("should be true for 000000000", function() {
        var raw_entry =
        " _  _  _  _  _  _  _  _  _ \n" +
        "| || || || || || || || || |\n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           ";
        var entry = new Entry(raw_entry);
        expect(entry.parse().isValid()).toEqual(true);
      });

      it("should be false for 123456788", function() {
        var raw_entry =
        "    _  _     _  _  _  _  _ \n" +
        "  | _| _||_||_ |_   ||_||_|\n" +
        "  ||_  _|  | _||_|  ||_||_|\n" +
        "                           ";
        var entry = new Entry(raw_entry);
        expect(entry.parse().isValid()).toEqual(false);
      });

      it("should be true for 345882865", function() {
        var raw_entry =
        " _     _  _  _  _  _  _  _ \n" +
        " _||_||_ |_||_| _||_||_ |_ \n" +
        " _|  | _||_||_||_ |_||_| _|\n" +
        "                           ";
        var entry = new Entry(raw_entry);
        expect(entry.parse().number).toEqual("345882865");
        expect(entry.parse().isValid()).toEqual(true);
      });
    });
  });


  describe("A digit", function() {
    it("parses a 0", function() {
      var raw_zero = " _ " +
                     "| |" +
                     "|_|";
      var digit = new Digit(raw_zero);
      expect(digit.number()).toEqual(0);
    });
    it("parses a 1", function() {
      var raw_one = "   " +
                    "  |" +
                    "  |";
      var digit = new Digit(raw_one);
      expect(digit.number()).toEqual(1);
    });
    it("parses a 2", function() {
      var raw_two = " _ " +
                    " _|" +
                    "|_ ";
      var digit = new Digit(raw_two);
      expect(digit.number()).toEqual(2);
    });
    it("parses a 3", function() {
      var raw_three = " _ " +
                      " _|" +
                      " _|";
      var digit = new Digit(raw_three);
      expect(digit.number()).toEqual(3);
    });
    it("parses a 4", function() {
      var raw_four = "   " +
                     "|_|" +
                     "  |";
      var digit = new Digit(raw_four);
      expect(digit.number()).toEqual(4);
    });
    it("parses a 5", function() {
      var raw_five = " _ " +
                     "|_ " +
                     " _|";
      var digit = new Digit(raw_five);
      expect(digit.number()).toEqual(5);
    });
    it("parses a 6", function() {
      var raw_six = " _ " +
                    "|_ " +
                    "|_|";
      var digit = new Digit(raw_six);
      expect(digit.number()).toEqual(6);
    });
    it("parses a 7", function() {
      var raw_seven = " _ " +
                      "  |" +
                      "  |";
      var digit = new Digit(raw_seven);
      expect(digit.number()).toEqual(7);
    });
    it("parses a 8", function() {
      var raw_eight = " _ " +
                      "|_|" +
                      "|_|";
      var digit = new Digit(raw_eight);
      expect(digit.number()).toEqual(8);
    });
    it("parses a 9", function() {
      var raw_nine = " _ " +
                     "|_|" +
                     " _|";
      var digit = new Digit(raw_nine);
      expect(digit.number()).toEqual(9);
    });
  });
});