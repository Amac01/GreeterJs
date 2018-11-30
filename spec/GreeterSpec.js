'use strict'

describe('Greeter', function() {

  var greeter;

  beforeEach(function(){

    greeter = new Greeter();
  });

  it("store users's name ", function(){
    greeter.setName("Alpha");
    expect(greeter.getName()).toEqual("Alpha");

  });

  


});
