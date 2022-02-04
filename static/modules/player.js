import canvas from './canvas.js';

class Player {
    constructor() {
        // create element for player and save reference to it
        this.element = canvas.create('div', {'class': ['player', 'user']});

        this.coordinates = {
            x: 0,
            y: 0
        }

        this.maxCoordinates = {
            // set max coordinates to half of possible steps in any 
            // direction per axis (minus one because in this case our grid is uneven)
            x: (canvas.dimensions.width / 32 - 1) / 2,
            y: (canvas.dimensions.height / 32 - 1) / 2
        }

        this.initMovement();
    }

    initMovement() {
        window.addEventListener('keydown', e => {
            console.log(e.code);

            if (e.code === "ArrowUp") { // up
                this.move('y', -1)
            }
            if (e.code === "ArrowDown") { // down
                this.move('y', 1)
            }
            if (e.code === "ArrowLeft") { // left
                this.move('x', -1)
            }
            if (e.code === "ArrowRight") { // right
                this.move('x', 1)
            }
        });
    }

    isMoveAllowed(axis, direction) {
        return this.coordinates[axis] + direction <= this.maxCoordinates[axis] && this.coordinates[axis] + direction >= this.maxCoordinates[axis] * -1 -1;
    }

    move (axis, direction) {
        if (!this.isMoveAllowed(axis, direction)) return;

        // if axis is x, add direction to known coordinate, otherwise keep current coordinate
        const x = axis === 'x' ? this.coordinates.x + direction : this.coordinates.x; 
        const y = axis === 'y' ? this.coordinates.y + direction : this.coordinates.y;
  
        this.setPosition({x, y});
    }
    
    setPosition({x, y}) {
        // don't forget to multiply the coordinate by 32 for correct position in pixels!
        this.element.style =  `transform: translate(${x * 32}px, ${y * 32}px);`;

        this.coordinates = {x, y};
    }
}

const player = new Player();

export default player;