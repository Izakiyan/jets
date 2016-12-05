var Rocket = function (color, size) {
  this.color = color;
  this.size = size;

    this.takeOff = function () {
    console.log('lift off!');
  }
}

module.exports = Rocket;