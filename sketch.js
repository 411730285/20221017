function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);//背景顏色為黑色
  stroke(255)//線條顏色為白色
  noFill()//不填滿顏色 
  rectMode(CENTER)

  for(var i=0;i<width/50;i=i+1)
  {
    for(var j=0;j<height/50;j=j+1)
    {
    ellipse(25+50*i,25+50*j,50)
    rect(25+50*i,25+50*j,50)
    ellipse(50+50*i,50+50*j,20)
    }
  }
}