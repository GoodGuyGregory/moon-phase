function Moon(desiredSize) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.diameter = desiredSize;

    this.newmoon = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);

    };
    this.waxingCresentMoon = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.waxingGibbousMoon = function () {
        fill(50);
        stroke(255);
        strokeWeight(5);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        fill(255)
        ellipse(this.x + 45, this.y, this.diameter - 70, this.diameter - 70);

    };
    this.fullMoon = function () {
        fill(255);
        stroke(255);
        strokeWeight(5);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.waningGibbosMoon = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.lastQuarterHalfMoon = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.waningCrescentMoon = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

}