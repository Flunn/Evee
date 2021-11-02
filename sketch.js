function preload(){
  //teapot=loadModel("https://raw.githubusercontent.com/processing/p5.js/main/test/manual-test-examples/webgl/assets/teapot-ascii.stl",true);
  teapot=loadModel("evee_lowpoly_flowalistik.STL",true);
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  background(120);
  push();
  translate(-width/2,-height/2);
  fill(255,0,0);
  ellipse(mouseX,mouseY,100,100);
  pop();
  push();
  scale(3);
  rotateX(PI/2);
  rotateY(frameCount*0.005);
  rotateX(frameCount*0.005);
  noStroke();
  //ambientLight(100);
  directionalLight(0,0,255,0,1,0);
  model(teapot);
  pop()
  normalMaterial();
