function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);//背景顏色為黑色
  // stroke(255)//線條顏色為白色
  noFill()//不填滿顏色 
  rectMode(CENTER)
  // ellipse(25,25,50) //座標(25,25,50)產生一個直徑的圓
  // rect(25,25,50)
  // ellipse(50,50,20)

  // ellipse(25*3,25,50)
  // rect(25*3,25,50)
  // ellipse(50*2,50,20)

  // ellipse(25*5,25,50)
  // rect(25*5,25,50)
  // ellipse(50*3,50,20)

  // ellipse(25*7,25,50)
  // rect(25*7,25,50)
  // ellipse(50*4,50,20)

  // ellipse(25*9,25,50)
  // rect(25*9,25,50)
  // ellipse(50*5,50,20)

  // ellipse(25*11,25,50)
  // rect(25*11,25,50)
  // ellipse(50*6,50,20)

  // ellipse(25*13,25,50)
  // rect(25*13,25,50)
  // ellipse(50*7,50,20)
  var r = mouseX
  stroke(r/2,r/4,r/5) 
  strokeWeight(2)
  for(var i=0;i<width/50;i=i+1)
  {
    for(var j=0;j<height/50;j=j+1)
    {
    ellipse(25+50*i,25+50*j,r/10)
    rect(25+50*i,25+50*j,(frameCount*1.5)%500)
    ellipse(50+50*i,50+50*j,20)
    }
  }
}
