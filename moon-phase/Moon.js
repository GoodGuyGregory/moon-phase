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
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.fullMoon = function () {
        fill(255);
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