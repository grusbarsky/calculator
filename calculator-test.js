describe("calculation tests", function(){
  it('should calculate the monthly rate correctly', function () {
    const values ={
      amount: 20000,
      years: 15,
      rate: 5.00,
    }
    expect(calculateMonthlyPayment(values)).toEqual("158.16");
  });
  it('should handle inputs of 0', function () {
    const values ={
      amount: 0,
      years: 0,
      rate: 0,
    }
    expect(calculateMonthlyPayment(values)).toEqual("0");
  });
})


it("should return a result with 2 decimal places", function() {
  const values ={
    amount: 1348,
    years: 7,
    rate: 5.33,
  }
  expect(calculateMonthlyPayment(values)).toEqual("19.26");
});

