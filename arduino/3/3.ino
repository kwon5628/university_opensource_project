int leds[] = {6, 7, 8};

// 함수유형2: 매개변수 O, 반환값 X
void ledControl(int pin, int state) {
  digitalWrite(pin, state);
}

// 함수유형4: 매개변수 O, 반환값 O
int getDelay(int num) {
  return num * 200;
}

void setup() {
  for (int i = 0; i < 3; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < 3; i++) {
    ledControl(leds[i], HIGH);
    delay(getDelay(i + 1));

    ledControl(leds[i], LOW);
    delay(200);
  }
}