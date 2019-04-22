let ROW=19;
let COL=19;
var array=[COL];
const Alive=1;

function setup(){
	createCanvas(1000,1000);
	createGrid();
	drawGrid();
}

function draw(){	
	
}

function drawGrid(){
	var x=0;
	var y=0;
	 for (var i = 0; i < array.length; i++) {	 	
	 	y+=10;
	 	for (var j = 0; j < array[0].length; j++) {
	 		fill(255);
	 		array[i][j]=0;
 			array[9][9]=Alive;
	 		colorGrid(9,9);
	 		rect(x,y,10,10);
	 		x+=10;
	 	}
	 	x=0;
	 }

}

function createGrid(row,col){
	 for (var i = 0; i < COL; i++) {
	 	array[i]= new Array(ROW);
	 	console.log(array);
	 }
}

function colorGrid(x,y){
	if(array[x][y]==1){
		console.log("fasfd");
		fill(0);
	}else{
		fill(255);
	}
}

function countNeighbors(){

}
function gen(stepsize,info){

}