// 7주차: 버튼과 가변저항으로 LED와 DC모터 제어
// 교재 키트: 버튼 D2, 가변저항 A1, LED D6, DC모터 D9/D10
// 버튼: 정지 -> 낮은 출력 -> 높은 출력

#define BUTTON 2
#define POT A1
#define LED 6
#define MOTOR_FWD 9
#define MOTOR_BWD 10

int outputPins[] = { LED, MOTOR_FWD, MOTOR_BWD };
int ledLevels[] = { 0, 80, 255 };
int mode = 0;
int prevButton = HIGH;
int buttonState = HIGH;
unsigned long lastButtonMillis = 0;

void setup() {
  pinMode(BUTTON, INPUT);
  pinMode(POT, INPUT);
  for (int i = 0; i < 3; i++) {
    pinMode(outputPins[i], OUTPUT);
  }
  outputControl(0, ledLevels[0]);
}

void loop() {
  unsigned long now = millis();
  int reading = digitalRead(BUTTON);
  int value = readAverage(POT);

  // 버튼 신호가 30ms 동안 유지되면 눌림으로 판단
  if (reading != prevButton) {
    lastButtonMillis = now;
  }
  if (now - lastButtonMillis >= 30 && reading != buttonState) {
    buttonState = reading;
    if (buttonState == LOW) {
      mode++;
      if (mode > 2) {
        mode = 0;
      }
    }
  }
  prevButton = reading;

  switch (mode) {
    case 0:
      // LED와 모터 끄기
      outputControl(0, ledLevels[0]);
      break;

    case 1:
      // LED는 약하게, 가변저항으로 모터 출력 0~127 조절
      outputControl(value / 8, ledLevels[1]);
      break;

    case 2:
      // LED는 강하게, 가변저항으로 모터 출력 0~255 조절
      outputControl(value / 4, ledLevels[2]);
      break;
  }
}

// 유형2: 모터 방향과 출력, LED 밝기를 함께 설정
void outputControl(int speed, int brightness) {
  analogWrite(MOTOR_BWD, 0);
  analogWrite(MOTOR_FWD, speed);
  analogWrite(LED, brightness);
}

// 유형4: 가변저항을 8번 읽어 평균을 구한다.
int readAverage(int pin) {
  int sum = 0;
  for (int i = 0; i < 8; i++) {
    sum += analogRead(pin);
  }
  return sum / 8;
}
