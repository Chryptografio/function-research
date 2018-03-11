var sketchProc=function(processingInstance){ with (processingInstance){

size(400,400);
frameRate(60);
background(51, 30, 51);
var generator = new Random(1);
    fill(59,50,87);
        rect(0, 0, width, height);
var draw = function() {
  fill(59,50,87,50);
  rect(0, 0, width, height);
    var numx = generator.nextGaussian();
    var numy = generator.nextGaussian();
    var numColorRed = generator.nextGaussian();
    var numColorBlue = generator.nextGaussian();
    var standardDeviation = 60;
    var mean = 200;
    var meanRed = 120;
    var meanBlue = 200;
    var x = standardDeviation * numx + mean;
    var y = standardDeviation * numy + mean;
    var red = standardDeviation * numColorRed + meanRed;
    var blue = standardDeviation * numColorBlue + meanBlue;
    var radius = random(15);
    fill(red, 200, blue, 50);
    stroke(217, 217, 217, 50);
    ellipse(x, y, radius, radius);
};
}};
