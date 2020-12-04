function Apple() {
    this.x;
    this.y;

    this.location_apple = function () {
        this.x = Math.floor(Math.random() * row) * pixel;
        this.y = Math.floor(Math.random() * coulomn) * pixel;
    }
    this.draw_apple = function () {
        can_dimensions.fillStyle = "#d60a0a";
        can_dimensions.fillRect(this.x, this.y, pixel, pixel);
    }
}