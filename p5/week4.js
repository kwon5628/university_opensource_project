// 4주차 과제
// 배열 + for문
// 함수유형2 : 매개변수 O, 반환값 X
// 함수유형4 : 매개변수 O, 반환값 O
// 이벤트함수 : mousePressed(), keyPressed()

// 원의 x, y 좌표를 저장하는 배열
let xList = [80, 160, 240, 320];
let yList = [200, 200, 200, 200];

// 원의 크기를 저장하는 배열
let sizeList = [40, 50, 60, 70];

let circleColor;

function setup() {
  createCanvas(400, 400);

  circleColor = color(100, 180, 255);

  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);

  // 배열 + for문
  for (let i = 0; i < xList.length; i++) {

    // 함수유형4
    // 마우스와 원 사이의 거리 계산
    let d = getDistance(
      mouseX,
      mouseY,
      xList[i],
      yList[i]
    );

    // 마우스가 원 가까이에 있으면 빨간색
    if (d < sizeList[i] / 2) {
      fill(255, 100, 100);
    } else {
      fill(circleColor);
    }

    // 함수유형2
    drawCircle(
      xList[i],
      yList[i],
      sizeList[i]
    );
  }

  fill(255);
  text(
    "마우스 클릭 : 원 위치 변경",
    width / 2,
    30
  );

  text(
    "R, G, B 키 : 원 색상 변경",
    width / 2,
    55
  );
}


// 함수유형2
// 매개변수 O, 반환값 X
function drawCircle(x, y, size) {

  ellipse(x, y, size, size);

  fill(255);
  text(
    int(size),
    x,
    y
  );
}


// 함수유형4
// 매개변수 O, 반환값 O
function getDistance(x1, y1, x2, y2) {

  let d = dist(x1, y1, x2, y2);

  return d;
}


// 이벤트함수 1
// 마우스를 클릭하면 원의 위치를 랜덤하게 변경
function mousePressed() {

  for (let i = 0; i < xList.length; i++) {

    xList[i] = random(50, 350);
    yList[i] = random(100, 350);
  }
}


// 이벤트함수 2
// 키보드 R, G, B로 원 색상 변경
function keyPressed() {

  if (key == 'r' || key == 'R') {

    circleColor = color(255, 100, 100);

  } else if (key == 'g' || key == 'G') {

    circleColor = color(100, 255, 100);

  } else if (key == 'b' || key == 'B') {

    circleColor = color(100, 180, 255);
  }
}