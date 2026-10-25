// 7주차 태양계 탐사

let planetName = ["수성", "금성", "지구", "화성", "목성", "토성"];
let orbitRadius = [40, 74, 108, 142, 176, 210];
let planetSize = [12, 18, 20, 16, 28, 26];
let planetSpeed = [0.025, 0.02, 0.016, 0.012, 0.008, 0.006];
let planetAngle = [0, 1, 2, 3, 4, 5];
let planetX = [0, 0, 0, 0, 0, 0];
let planetY = [0, 0, 0, 0, 0, 0];
let visited = [false, false, false, false, false, false];
let planetColor;
let speedMode = 1;
let visitedCount = 0;

function setup() {
  createCanvas(760, 660);
  frameRate(60);

  planetColor = [
    color(170, 170, 180),
    color(235, 185, 100),
    color(80, 150, 235),
    color(220, 105, 80),
    color(210, 165, 125),
    color(220, 200, 140),
  ];
}

function draw() {
  background(255);

  let speed = 1;
  switch (speedMode) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 2;
      break;
    case 3:
      speed = 0;
      break;
  }

  let x = constrain(mouseX, 20, width - 20);
  let y = constrain(mouseY, 115, 555);

  for (let i = 0; i < planetName.length; i++) {
    noFill();
    stroke(210);
    ellipse(380, 330, orbitRadius[i] * 2, orbitRadius[i] * 2);

    planetAngle[i] += planetSpeed[i] * speed;
    planetX[i] = 380 + orbitRadius[i] * cos(planetAngle[i]);
    planetY[i] = 330 + orbitRadius[i] * sin(planetAngle[i]);

    let d = getDistance(x, y, planetX[i], planetY[i]);
    let c;
    if (visited[i]) {
      c = color(100, 200, 130);
    } else if (d < planetSize[i] / 2 + 12) {
      c = color(255, 170, 70);
    } else {
      c = planetColor[i];
    }

    drawPlanet(planetX[i], planetY[i], planetSize[i], c);
    fill(0);
    textSize(12);
    text(planetName[i], planetX[i] - 12, planetY[i] + planetSize[i] / 2 + 14);
  }

  // 토성 고리
  noFill();
  stroke(150, 120, 70);
  arc(planetX[5], planetY[5], 44, 15, 0, PI);

  noStroke();
  fill(255, 190, 65);
  ellipse(380, 330, 44, 44);
  fill(0);
  text("태양", 368, 370);

  textSize(20);
  text("태양계 탐사", 20, 30);
  textSize(14);
  text("행성 클릭 / 1: 보통  2: 빠르게  3: 정지  R: 다시 시작", 20, 55);
  stroke(0);
  line(20, 72, 740, 72);
  noStroke();

  fill(0);
  text("속도 모드: " + speedMode, 20, 590);
  text("탐사한 행성: " + visitedCount + " / 6", 230, 630);

  noFill();
  stroke(0);
  rect(20, 615, 180, 15);
  noStroke();
  fill(100, 200, 130);
  rect(20, 615, visitedCount * 30, 15);

  fill(0);
  if (visitedCount == 6) {
    text("탐사 완료!", 500, 630);
  }
}

// 유형2
function drawPlanet(x, y, size, c) {
  noStroke();
  fill(c);
  ellipse(x, y, size, size);
}

// 유형4
function getDistance(x1, y1, x2, y2) {
  return dist(x1, y1, x2, y2);
}

function mousePressed() {
  if (mouseX >= 20 && mouseX <= width - 20 && mouseY >= 115 && mouseY <= 555) {
    for (let i = 0; i < planetName.length; i++) {
      let d = getDistance(mouseX, mouseY, planetX[i], planetY[i]);
      if (d < planetSize[i] / 2 + 12 && visited[i] == false) {
        visited[i] = true;
        visitedCount++;
      }
    }
  }
}

function keyPressed() {
  switch (key) {
    case "1":
      speedMode = 1;
      break;
    case "2":
      speedMode = 2;
      break;
    case "3":
      speedMode = 3;
      break;
    case "r":
    case "R":
      visitedCount = 0;
      speedMode = 1;
      for (let i = 0; i < planetName.length; i++) {
        visited[i] = false;
        planetAngle[i] = random(0, PI * 2);
      }
      break;
  }
}
