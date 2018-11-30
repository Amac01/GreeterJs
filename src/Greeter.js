'use strict';

function Greeter() {
  this.name;
}

Greeter.prototype.setName = function(name) {
  this.name = name;
}
Greeter.prototype.getName = function(){
  return this.name;
}
