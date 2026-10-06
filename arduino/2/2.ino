// 입력부품 : 푸시버튼
// 출력부품 : LED
// 사용 문법 : if문, millis(), switch-case문, for문

#define BUTTON 2
#define LED 6

int mode = 0;
int prevButton = HIGH;

bool ledState = false;

unsigned long previousMillis = 0;
unsigned long lastButtonMillis = 0;

const unsigned long interval = 500;

void setup() {
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);

  Serial.begin(9600);

  // for문 : 시작할 때 LED 3번 점멸
  for (int i = 0; i < 3; i++) {
    digitalWrite(LED, HIGH);
    delay(200);

    digitalWrite(LED, LOW);
    delay(200);
  }
}

void loop() {

  int buttonState = digitalRead(BUTTON);

  // if문 + millis()
  // 버튼이 눌렸을 때 한 번만 동작
  if (buttonState == 0 &&
      prevButton == 1 &&
      millis() - lastButtonMillis >= 200) {

    mode++;

    // mode가 2를 넘으면 다시 0
    if (mode > 2) {
      mode = 0;
    }

    lastButtonMillis = millis();

    Serial.print("mode : ");
    Serial.println(mode);
  }

  prevButton = buttonState;


  // switch-case문
  switch (mode) {

    // 0 : LED 끄기
    case 0:
      digitalWrite(LED, LOW);
      ledState = false;
      break;


    // 1 : LED 켜기
    case 1:
      digitalWrite(LED, HIGH);
      ledState = true;
      break;


    // 2 : LED 0.5초 간격 점멸
    case 2:

      // millis()를 이용한 반복
      if (millis() - previousMillis >= interval) {

        previousMillis = millis();

        ledState = !ledState;

        digitalWrite(LED, ledState);
      }

      break;
  }
}