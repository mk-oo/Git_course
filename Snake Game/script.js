const can = document.querySelector(".canvas");


const can_dimensions = can.getContext("2d");
const pixel = 10;

const row = can.height / pixel;
const coulomn = can.width / pixel;


(function setUp() {
    snake = new Snake();
    app = new Apple();
    app.location_apple();

    
    window.setInterval(() => {
        can_dimensions.clearRect(0, 0, can.width, can.height);
        app.draw_apple();
        snake.Update_snake();
        snake.draw_snake();

        switch (snake.Eat(app)) {
            case 'Eat':
                app.location_apple();
        }
        snake.lose();
        document.querySelector(".score").innerText=snake.score;
    }, 250);

}());


window.onkeydown=function(event){
    snake.makeDir(event.key)
    //console.log(event.key);

};
