describe("Bank OCR", function() {

  describe("An entry", function() {
    it("should parse 123456789", function() {
      var raw_entry =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           ";
      var entry = new Entry();
      expect(entry.number(raw_entry)).toEqual(123456789);
    });

  });


  describe("A digit", function() {
    it("parses a 0", function() {
      var raw_zero = " _ " +
                     "| |" +
                     "|_|";
      var digit = new Digit();
      expect(digit.number(raw_zero)).toEqual(0);
    });
  });
});