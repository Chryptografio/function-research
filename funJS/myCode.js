		var sketchProc=function(processingInstance){ with (processingInstance){

size(400,400);
frameRate(40);


//(map(sin(this.position.x), -1, 1, 1, 2), map(sin(this.position.y), -1, 1, 1, 2));
var Mover = function() {
    this.position = new PVector(random(0,30),random(0,30));
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
Mover.prototype.update = function() {
    this.acceleration.x = sin(this.position.x/100)/10+1;
    this.acceleration.y = sin(this.position.x/100)/10+1;
		this.velocity.x = sin(this.position.y/70)*2 + this.acceleration.x;
    this.velocity.y = sin(this.position.x/60)*2 + this.acceleration.y;
    this.position.add(this.velocity);
};
var t=random(255);
var p=random(255);
var x=random(255);
Mover.prototype.display = function(size, c) {
    noStroke();
		var m=true;
		if (m==true) {
			t++;
			if (t>200) {m=false;};
		} else {
			t--;
			if (t<50) {m=true;};
		};
		var n=true;
		if (n==true) {
			p++;
			if (p>250) {n=false;};
		} else {
			p--;
			if (p<40) {n=true;};
		};
		var o=true;
		if (o==true) {
			x++;
			if (x>255) {o=false;};
		} else {
			x--;
			if (x<60) {o=true;};
		};
		var c = color(t,p,x);
    fill(c);
    ellipse(this.position.x, this.position.y, size, size);
};
Mover.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = 0;
    } else if (this.position.x < 0) {
        this.position.x = width;
    } else if (this.position.y > height) {
        this.position.y = 0;
    } else if (this.position.y < 0) {
        this.position.y = height;
    }
};

var fishes = [];
for(var i = 0; i < 50; i++) {
    fishes[i] = new Mover();
}
background(0,0,0);
var draw = function() {
  fill(0,0,0, 25);
  rect(0, 0, width, height);
  for(var i = 0; i < fishes.length; i++) {
		fishes[i].update();
    fishes[i].checkEdges();
	  fishes[i].display(5);
  }
};



		}};
