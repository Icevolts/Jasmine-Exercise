
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years:15,
    rate:3
  }
  expect(calculateMonthlyPayment(values)).toEqual(345.29);
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 25000,
    years: 10,
    rate:2.25
  }
  expect(calculateMonthlyPayment(values)).toEqual(232.85);
});

/// etc
