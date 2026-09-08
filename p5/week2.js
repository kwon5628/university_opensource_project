//점, 선, 원, 사각형, 문자열, 원호, 색상,
// mouseX, mouseY, sin(), 회전운동, random(), constrain()

function setup() {
  createCanvas(400, 400); //출력 화면 크기 (가로, 세로)
  //width는 캔버스 가로, height는 캔버스 세로길이로 가용가능
  background(200); // 배경색을 200으로 설정
  //초당 몇 번 반복하는지
  frameRate(60);
  /* 점과 선의 굵기 */
  strokeWeight(2); 
  /* 외각선 색상(r, g, b) */
  let r = 128, g = 128, b = 128;
  stroke(r, g, b);
  /* 내부 색상(r, g, b) */
  fill(135, 206, 235);
  /* 문자 크기 */
  textSize(25);
  /* 사각형 좌표 중심으로 변경 */
  rectMode(CENTER);

  /***************** 구간 나누기 *********************/
  /* 선  (시작x, y, 종료x, y) */
  line(width/2, 0, width/2, height); 
  line(0, height/2, width, height/2); 
 
  /***************** 기본도형 *********************/
//   /* 점 (x, y) */
//   point(10, 10); 
//   point(10, 20); 

//   /* 원 (중심x, y, 폭, 높이) */
//   ellipse(width/8, height/10, 40, 40); 

//   /* 사각형 (좌상x, y, 폭, 높이) */
//   rect(width*2/8, height/10, 40, 40);
//   /* 문자열 가운데 정렬(가로, 세로) */
//   textAlign(CENTER, CENTER);
//   /* 문자 표현(숫자or문자, x, y) -> 좌표가 문자열의 중심이 됨됨 */
//   text('Hello', width*5/12, 30);

//   /* 원호(중심x, y, 가로, 세로, 범위시작, 범위끝) */
//   arc(width/8, height*2/8, 100, 100, radians(45), PI);

//   print(r, g, b);
//   console.log(r, g, b);
  
}

let theta1 = 0.0, theta2=0.0;
let x=0.0, y=0.0, velocity=10.0;

function draw() {
  stroke(255, 255, 255);
  // 1. 마우스 따라 선 그리기
  line(pmouseX, pmouseY, mouseX, mouseY);

  // // 2. 마우스 따라 점 찍기
  // strokeWeight(random(0, 50));
  // stroke(random(0, 255), random(0, 255), random(0, 255));
  // point(mouseX, mouseY);

  
  // // 3. sin() 원의 상하진동, 크기 조정
  // rect(width*3/4, height/4, width/2, height/2);
  // y = height/4 + height/4 * sin(theta1);
  // let r1 = 15 + 15*sin(theta1);
  // ellipse(width*3/4, y-15, r1, r1);
  // theta1 += 0.1;

  // // 4. 회전 운동
  // rect(width*3/4, height/4, width/2, height/2);
  // let r2=height*1.5/8;
  // x = width*3/4 + r2 * cos(theta2);
  // y = height/4 + r2 * sin(theta2);
  // ellipse(x, y, 30, 30);
  // theta2 += 0.05;

  // // 5. constrain(값, 최소, 최대) -> 불규칙한 움직임 구현
  // x += random(-velocity, velocity);
  // y += random(-velocity, velocity);
  // ellipse(x, y, 30, 30);
  // x = constrain(x, 0, width);
  // y = constrain(y, 0, height);

}
