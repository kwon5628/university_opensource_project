// millis(), <if-else if-else>문, mouseIsPressed(또는 keyIsPressed), 
// dist(), color(), key(또는 keyIsDown()), <switch-case>문, for문

let mode = 1;

function setup() {
  createCanvas(450, 450);
}

function draw() {
  // millis() : 프로그램 실행 시간
  let time = millis();

  background(30);

  // color() : 색상 저장
  let normalColor = color(100, 180, 255); //파랑
  let nearColor = color(255, 100, 100); //빨강
  let pressColor = color(255, 220, 80); //노랑

  // for문 : 여러 개의 원 그리기
  for (let i = 0; i < 5; i++) {
    fill(80);
    ellipse(80 + i * 80, 330, 30, 30);
  }

  // dist() : 마우스와 화면 중앙의 거리 계산
  let d = dist(mouseX, mouseY, width/2, height/2);

  // if - else if - else문
  if (mouseIsPressed) {
    fill(pressColor);
  } else if (d < 100) {
    fill(nearColor);
  } else {
    fill(normalColor);
  }

  // mode에 따라 원의 크기 변경
  if (mode == 1) {
    ellipse(225, 225, 100, 100);
  } else if (mode == 2) {
    ellipse(225, 225, 150, 150);
  } else {
    ellipse(225, 225, 200, 200);
  }

  // keyIsPressed + switch-case문
  if (keyIsPressed) {
    switch (key) {
      case '1':
        mode = 1;
        break;

      case '2':
        mode = 2;
        break;

      case '3':
        mode = 3;
        break;
    }
  }

  // 실행 시간 표시
  fill(255);
  textSize(16);
  text("실행 시간 : " + int(time) + " ms", 20, 30);

  text("중앙과 마우스 거리 : " + d, 20, 55);
  text("현재 모드 : " + mode, 20, 80);

  text("1, 2, 3 키 : 원 크기 변경", 20, 110);
  text("마우스를 원 가까이 이동 : 빨간색", 20, 135);
  text("마우스 클릭 : 노란색", 20, 160);
}