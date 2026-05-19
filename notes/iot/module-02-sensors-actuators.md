# Module 2: The Physical Layer - Sensors & Actuators

## 1. Introduction
In Module 1, we learned that sensors are the "eyes and ears" of an IoT system, while actuators are the "muscles". In this module, we will zoom in on the physical layer. How exactly does a microcontroller understand the physical world? The answer lies in **voltage**. 

Microcontrollers cannot feel heat or see light. They can only measure electricity. Therefore, every sensor in the world is simply a device that converts a physical property (like heat, light, or pressure) into an electrical voltage. 

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the critical difference between **Analog** and **Digital** signals.
- Know how common sensors (PIR, Ultrasonic, DHT11) and actuators (Relays, Buzzers) operate.
- Understand hardware fundamentals like breadboarding and pull-up resistors.
- Build a dual-sensor edge-computing system: A Motion Detection Alarm.

---

## 3. Core Concepts: Analog vs. Digital Signals

Before wiring any sensor, you must know what "language" it speaks. All sensors output data as either an Analog or a Digital signal.

### Digital Signals (The Binary World)
A digital signal has only two states: **HIGH (1)** or **LOW (0)**. 
- In a 5V system, HIGH usually means 5 Volts, and LOW means 0 Volts.
- *Analogy*: A light switch. It is either completely ON or completely OFF.
- *Sensors*: Push buttons, PIR (Motion) sensors, Magnetic Door switches.

### Analog Signals (The Continuous World)
An analog signal can be any value between a minimum and maximum range.
- Instead of just 0V or 5V, an analog signal could be 1.2V, 3.7V, or 4.9V. 
- *Analogy*: A volume dial on a radio. You can turn it smoothly from 0 to 10.
- *Sensors*: LDR (Light Dependent Resistors), Soil Moisture sensors, Potentiometers.

> [!IMPORTANT]
> **The ADC (Analog to Digital Converter)**  
> Microcontrollers process binary (1s and 0s). They cannot directly understand 3.7 Volts. To solve this, microcontrollers have built-in ADCs. An ADC takes an analog voltage and converts it into a digital number (e.g., 0V = 0, 5V = 1023). When wiring an analog sensor, you MUST plug it into a specific "Analog In" pin (like `A0`).

---

## 4. Hardware Understanding: Breadboards & Resistors

To build prototypes, engineers use **Breadboards**. 

A breadboard is a plastic board with holes. Underneath the holes are metal clips that connect certain holes together.
- **Power Rails**: The long red (+) and blue/black (-) lines on the edges. All holes in the red line are connected horizontally. Used to distribute power.
- **Terminal Strips**: The middle sections. Holes are connected vertically in rows of 5. Used to connect components together without soldering.

### The Pull-up / Pull-down Resistor (Avoiding Floating States)
Imagine a push button connected to a digital pin. When pressed, it connects the pin to 5V (HIGH). But what happens when it's NOT pressed? The pin is connected to *nothing*. 

In electronics, "nothing" does not mean 0V. An unconnected pin acts like an antenna, picking up static electricity from the air, rapidly flipping between HIGH and LOW. This is called a **Floating State**.
To fix this, we use a resistor to "pull" the pin down to Ground (0V) when the button isn't pressed.

---

## 5. Industrial Use Cases of Common Sensors & Hardware Spotlights

### Hardware Spotlight: PIR (Passive Infrared) Sensor
![PIR Sensor Module](/iot/images/m2-pir-sensor.png)
*The HC-SR501 PIR Sensor. Notice the three pins: VCC (5V Power), OUT (Digital Signal), and GND (Ground). The white dome is a Fresnel lens that widens the detection angle.*

1. **PIR (Passive Infrared) Sensor**: 
   - *How it works*: Detects infrared radiation emitted by body heat. 
   - *Real-world*: Security systems, automatic sliding doors, energy-saving office lights.
2. **Ultrasonic Sensor (HC-SR04)**:
   - *How it works*: Emits a high-frequency sound pulse and measures how long it takes for the echo to bounce back, calculating distance.
   - *Real-world*: Car reversing sensors, industrial liquid level measurement in silos.
3. **Relay Module (Actuator)**:
   - *How it works*: An electromagnetic switch. A tiny 5V signal from a microcontroller turns on an electromagnet, which pulls a heavy-duty switch closed, allowing 220V AC mains power to flow.
   - *Real-world*: Smart plugs, automated industrial pumps, HVAC control systems.

---

## 6. Interview-Style Conceptual Questions

1. **Why can't you connect an LDR (Light Sensor) to a Digital Pin?**
   *Answer: An LDR outputs a varying voltage depending on light intensity (Analog). A digital pin can only read HIGH or LOW. It would just read "HIGH" for almost all light levels, losing the gradient data.*
2. **You want to turn on a 220V water heater using an Arduino. How do you do this safely?**
   *Answer: You must use a Relay or a Solid State Relay (SSR). The Arduino operates at 5V DC and will explode if exposed to 220V AC. The relay acts as an electrically isolated switch.*

---

## 7. Practical Project: Smart Motion Detection Alarm

Let's build a practical Edge-Computing device: An alarm system that sounds a buzzer when motion is detected, but *only* if the object is closer than 50 cm. 

### Working Principle
We will combine a PIR Sensor (Digital) and an Ultrasonic Sensor (Digital Timing) with a Buzzer (Actuator). The microcontroller will run logic: `IF motion == true AND distance < 50cm THEN trigger_alarm()`.

### Required Components
- 1x Microcontroller (Arduino Uno/ESP32)
- 1x PIR Motion Sensor
- 1x HC-SR04 Ultrasonic Sensor
- 1x Active Buzzer
- Breadboard & Jumper Wires

### Circuit Connection Explanation & Visual Layout
![Smart Alarm Breadboard Wiring](/iot/images/m2-wiring.png)
*Visual Connection Flow: Arduino 5V and GND power the breadboard rails. The PIR and Ultrasonic sensors draw power from these rails. The sensor signal pins go back to the Arduino's Digital inputs. The Arduino Digital pin 8 drives the buzzer.*

1. **Power**: Connect 5V and GND from Arduino to the breadboard power rails.
2. **PIR Sensor**: VCC to 5V, GND to GND, OUT to Arduino Digital Pin `2`.
3. **Ultrasonic Sensor**: VCC to 5V, GND to GND, TRIG to Digital Pin `9`, ECHO to Digital Pin `10`.
4. **Buzzer**: Positive leg to Digital Pin `8`, Negative leg to GND.

### Step-by-Step Code Implementation

```cpp
// Define Pins
const int pirPin = 2;
const int trigPin = 9;
const int echoPin = 10;
const int buzzerPin = 8;

void setup() {
  Serial.begin(9600);
  
  // Set Pin Modes
  pinMode(pirPin, INPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  
  Serial.println("Alarm System Initializing...");
  delay(5000); // Give the PIR sensor 5 seconds to calibrate to room temp
  Serial.println("System Active.");
}

void loop() {
  // 1. Read the PIR Sensor
  int motionDetected = digitalRead(pirPin);
  
  // 2. Measure Distance using Ultrasonic
  // Send a 10 microsecond pulse
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read how long the echo took
  long duration = pulseIn(echoPin, HIGH);
  
  // Convert time to distance in cm (Speed of sound = 343m/s)
  int distanceCm = duration * 0.034 / 2;
  
  // 3. Processing Logic (Edge Computing)
  if (motionDetected == HIGH && distanceCm < 50 && distanceCm > 0) {
    Serial.println("INTRUDER ALERT! Proximity: " + String(distanceCm) + "cm");
    digitalWrite(buzzerPin, HIGH); // Turn on Alarm
    delay(2000);                   // Sound for 2 seconds
  } else {
    digitalWrite(buzzerPin, LOW);  // Turn off Alarm
  }
  
  delay(100); // Short delay for stability
}
```

### Code Explanation
- `pulseIn(echoPin, HIGH)`: This is a special function. It waits for the `echoPin` to go HIGH, starts a stopwatch, and stops the stopwatch when it goes LOW. This gives us the exact time the sound wave spent in the air.
- `distanceCm = duration * 0.034 / 2`: Sound travels at 0.034 cm per microsecond. We divide by 2 because the sound wave traveled to the object AND back.

### Visual Troubleshooting
![Reversed Polarity Error](/iot/images/m2-troubleshooting.png)
*CRITICAL ERROR: Reversed Polarity. The red VCC wire is connected to Ground, and the black GND wire is connected to 5V. Doing this will instantly destroy the sensor, cause it to smoke, or even permanently damage the Arduino's voltage regulator. ALWAYS double-check red and black wires before plugging in USB power.*

- **False Alarms**: PIR sensors are very sensitive. Ensure it is not pointing at a window (sunlight contains infrared) or a heater.
- **Distance reads 0 or negatives**: Check the TRIG and ECHO wiring. If they are swapped, the `pulseIn` function will timeout.
- **Sensor getting extremely hot**: Unplug it immediately! You have reversed VCC and GND (as seen in the image above).

### Future Improvements
Right now, the alarm only sounds locally. If you are not home, you won't hear it. In the upcoming modules, we will replace the Arduino with an ESP32 Wi-Fi chip to send a push notification to your phone when the alarm triggers.

---
**[End of Module 2]**
