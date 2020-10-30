const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const GRID_SIZE = 50;
const NUMROWS = CANVAS_HEIGHT/GRID_SIZE;
const NUMCOLUMNS = CANVAS_WIDTH/GRID_SIZE;
let myCapture;

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRate(25);
    myCapture = createCapture(VIDEO);
    myCapture.size(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(){
    background(220);

for(let i = 0; i < NUMROWS; i++){
    for(let j = 0; j < NUMCOLUMNS; j ++){
        const aColor = myCapture.get(j * GRID_SIZE + GRID_SIZE/2, i * GRID_SIZE);
        fill(aColor);
        rect(j * GRID_SIZE, i * GRID_SIZE, GRID_SIZE, GRID_SIZE);
}
}
}