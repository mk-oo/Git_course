function Snake() {
  this.x = 0;
  this.y = 0;
  this.Xway = pixel;
  this.Yway = 0
  this.score = 0;
  this.snake_body = [];

  this.draw_snake = function () {
    can_dimensions.fillStyle = "#0bf50b";
    let m=0;
    while(m<this.snake_body.length - 1){
      can_dimensions.fillRect(this.snake_body[m].x_body,
        this.snake_body[m].y_body,
        pixel, pixel);
        m++;
    }
    can_dimensions.fillRect(this.x, this.y, pixel, pixel);
  }

  this.Update_snake = function () {
    let n=0;
    while(n < this.snake_body.length - 1){
      this.snake_body[n] = this.snake_body[n + 1];
      n++;
    }
    this.snake_body[this.score] = {
      x_body: this.x,
      y_body: this.y
    };
    this.x += this.Xway;
    this.y += this.Yway;

    if (this.x > can.width) {
      this.x = 0;
    }


    if (this.x < 0) {
      this.x = can.width;
    }

    if (this.y > can.height) {

      this.y = 0;
    }


    if (this.y < 0) {

      this.y = can.width;
    }
  }

  this.makeDir = function (dir) {
    if (dir === 'ArrowUp') {
      this.Xway = 0;
      this.Yway = -pixel * 1;
    } else if (dir === 'ArrowDown') {
      this.Xway = 0;
      this.Yway = pixel * 1;
    } else if (dir === 'ArrowLeft') {
      this.Xway = -pixel * 1;
      this.Yway = 0;
    } else {
      this.Xway = pixel * 1;
      this.Yway = 0;
    }
  }
  this.Eat = function (app) {
    if (this.x === app.x && this.y === app.y) {
      this.score++;
      console.log(this.score);
      return 'Eat'
    }
    return 'Not Eat'
  }
  this.lose = function () {
    for (let i = 0; i < this.snake_body.length - 1; i++) {

      if (this.x === this.snake_body[i].x_body && this.y === this.snake_body[i].y_body) {
        this.score = 0;
        this.snake_body = [];
        alert("You Lost");
      }
    }
  }
}