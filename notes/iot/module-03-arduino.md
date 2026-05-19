# Module 3: Microcontroller Fundamentals (The Brain)

## 1. Introduction
We have sensors to collect data and actuators to perform physical tasks. But how do we connect them? If an LDR (Light Sensor) detects that it is dark, how does a streetlight know it should turn on? 

This logic is executed by a **Microcontroller**. A microcontroller is essentially a tiny, self-contained computer on a single chip. It contains a processor (CPU), memory (RAM & Flash), and programmable Input/Output pins (GPIO). In this module, we will explore the architecture of these chips using the world's most popular educational platform: **The Arduino**.

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the architecture of a microcontroller (CPU, Memory, GPIO).
- Master the difference between Digital I/O, Analog In (ADC), and PWM (Fake Analog Out).
- Understand the C++ logic flow: `setup()`, `loop()`, and conditionals.
- Build a Smart Street Light system that automatically fades LEDs based on ambient sunlight.

---

## 3. Core Concepts: The Anatomy of a Microcontroller

While there are thousands of microcontrollers (AVR, ARM, PIC), they all share a similar architecture. Let's look at the Arduino Uno (which uses the ATmega328P chip):

1. **The Processor (CPU)**: The brain. It executes your C++ code instructions. The Arduino Uno runs at 16 MHz, meaning it can execute 16 million instructions per second. (Your laptop runs at ~3 GHz, nearly 200 times faster, but for IoT, 16 MHz is plenty!).
2. **Flash Memory (Hard Drive)**: Where your code is permanently stored. Even if you unplug the battery, the code remains. 
3. **SRAM (RAM)**: Temporary memory used to store variables while the code is running. If power is lost, this memory is wiped.
4. **GPIO (General Purpose Input/Output) Pins**: The physical metal legs on the chip where you connect your sensors and actuators.

### Hardware Spotlight: Arduino Uno Pinout
![Arduino Uno Pinout](/iot/images/m3-arduino-pinout.png)
*Notice the digital pins on the top right (0-13), the analog pins on the bottom right (A0-A5), and the power distribution pins on the bottom left (5V, 3.3V, GND).*

### The Three Types of GPIO Pins

Understanding these three pin types is the most important skill in IoT hardware:

#### 1. Digital I/O (Input / Output)
Can only be `HIGH` (5V) or `LOW` (0V). 
- *Input*: Reading a push button.
- *Output*: Turning a Relay ON or OFF.

#### 2. Analog In (ADC - Analog to Digital Converter)
Can read voltages between 0V and 5V and convert them to a number. On a 10-bit ADC (like Arduino), 0V = `0` and 5V = `1023`.
- *Input*: Reading a temperature sensor or a volume knob.

#### 3. PWM (Pulse Width Modulation)
Microcontrollers cannot output a true analog voltage (like 2.5V). They can only output 0V or 5V. So how do we dim an LED or control the speed of a motor? We use **PWM**.
PWM rapidly turns a Digital pin HIGH and LOW thousands of times a second. 
- If it is HIGH 50% of the time and LOW 50% of the time, the *average* voltage is 2.5V. To the human eye, an LED looks 50% as bright!
- *Output*: Dimming lights, controlling servo motor angles, adjusting DC motor speeds.

---

## 4. Software Understanding: The C++ Logic Flow

IoT code is not like writing a web app or a Python script that runs once and exits. IoT code is designed to run **forever**. 

### The Infinite Loop
```cpp
void setup() {
  // 1. Initialization. Runs ONCE on boot.
  // Set pin modes, start Serial monitors, connect to Wi-Fi.
}

void loop() {
  // 2. The Engine. Runs FOREVER, thousands of times a second.
  // Read sensors -> Make decision -> Trigger Actuator.
}
```

### Conditionals (`if` / `else`)
This is where the "Brain" makes decisions.
```cpp
int lightLevel = analogRead(A0); // Read the LDR (0 to 1023)

if (lightLevel < 300) {
    // It is dark outside
    digitalWrite(LED_PIN, HIGH); // Turn street light ON
} else {
    // It is bright outside
    digitalWrite(LED_PIN, LOW);  // Turn street light OFF
}
```

---

## 5. Practical Engineering Insights

- **Don't fry your board**: A single GPIO pin on an Arduino can only supply about **20mA to 40mA** of current. This is barely enough to light a standard 5mm LED. If you connect a DC Motor directly to a pin, it will draw too much current and **destroy the microcontroller permanently**. Always use a Motor Driver or a Transistor to control heavy loads!
- **Debouncing**: In the real world, when you press a mechanical button, the metal contacts bounce against each other microscopically. The microcontroller is so fast it reads this as the button being pressed 50 times in a millisecond. In software, you must write "debounce" logic (a small delay) to ignore the microscopic bounces.

---

## 6. Interview-Style Conceptual Questions

1. **How do you output 2.5V from a microcontroller that only has 0V and 5V logic?**
   *Answer: By using Pulse Width Modulation (PWM). You switch the 5V pin ON and OFF very rapidly with a 50% duty cycle, resulting in an average output of 2.5V.*
2. **What happens if your `loop()` function finishes executing the last line of code?**
   *Answer: It immediately jumps back up to the first line of the `loop()` function and runs again, continuously.*
3. **If a sensor outputs an analog signal, can you plug it into Pin 2 (a standard Digital pin)?**
   *Answer: No. You must plug it into an Analog In pin (like A0) which is connected to the chip's internal ADC (Analog to Digital Converter). Pin 2 would only read HIGH or LOW.*

---

## 7. Practical Project: Smart Street Lights

City streetlights that remain on at full brightness all night waste massive amounts of electricity. Let's build a smart system that dynamically fades the streetlights ON as the sun sets, and fades them OFF as the sun rises.

### Working Principle
We will use an LDR (Light Dependent Resistor) to measure ambient sunlight. We will plug this into an Analog pin (A0). Based on the 0-1023 value, we will use a PWM pin (Pin 9) to dynamically fade an LED.

### Required Components
- 1x Microcontroller (Arduino Uno)
- 1x LDR (Photoresistor)
- 1x 10k Ohm Resistor (for the LDR voltage divider)
- 1x LED & 220 Ohm Resistor (for the LED)

### Circuit Connection & Breadboard Visual
![LDR Voltage Divider Circuit](/iot/images/m3-ldr-wiring.png)
*Visual Connection Flow: Notice how the LDR and the 10k resistor share a row on the breadboard. The Analog A0 pin connects exactly at this junction to measure the voltage drop!*

1. **LDR Circuit (Voltage Divider)**: 
   - Connect one leg of the LDR to 5V.
   - Connect the other leg of the LDR to Analog Pin `A0`.
   - Also connect that same `A0` leg to a 10k resistor, and connect the other end of the 10k resistor to GND.
   *(Why? An LDR changes resistance, not voltage. The microcontroller can only read voltage. This "Voltage Divider" circuit converts the changing resistance into a changing voltage).*
2. **LED Circuit**:
   - Connect Pin `9` (which supports PWM, marked with a `~`) to the 220 Ohm resistor.
   - Connect the resistor to the long leg (+) of the LED. Connect the short leg (-) to GND.

### Step-by-Step Code Implementation

```cpp
// Define Pins
const int ldrPin = A0;   // Analog Input pin
const int ledPin = 9;    // PWM Output pin (Notice the ~ symbol on your board)

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  // Note: Analog pins (A0-A5) are inputs by default, pinMode is optional here.
}

void loop() {
  // 1. Read the analog value from LDR (0 to 1023)
  int lightLevel = analogRead(ldrPin);
  
  // 2. Print data for debugging
  Serial.print("Sunlight Level: ");
  Serial.println(lightLevel);
  
  // 3. The Logic (Mapping the ranges)
  // The map() function translates one range to another.
  // Our LDR reads 0 (Dark) to 1023 (Bright).
  // PWM requires a value from 0 (Off) to 255 (Full Brightness).
  
  // We want the opposite effect: If sunlight is Bright (1023), LED is Off (0).
  // If sunlight is Dark (0), LED is Full Brightness (255).
  int pwmValue = map(lightLevel, 0, 1023, 255, 0);
  
  // Constrain ensures the value never accidentally goes below 0 or above 255
  pwmValue = constrain(pwmValue, 0, 255);
  
  // 4. Trigger Actuator
  // Using analogWrite() invokes the PWM hardware!
  analogWrite(ledPin, pwmValue);
  
  delay(100); // Small delay for stability
}
```

### Code Explanation
- `map(value, fromLow, fromHigh, toLow, toHigh)`: This is an incredibly powerful IoT math function. It scales ranges. If the sunlight is at 512 (50%), the map function automatically calculates that the PWM value should be 127 (50% brightness). 
- `analogWrite(pin, value)`: This is how we output PWM. The `value` must be between 0 and 255. `255` means the pin is HIGH 100% of the time. `127` means it is HIGH 50% of the time, resulting in a dim LED.

### Visual Troubleshooting: PWM Failure
![PWM Troubleshooting](/iot/images/m3-pwm-troubleshoot.png)
*ERROR: The LED is connected to Pin 4. Pin 4 does NOT have a `~` symbol next to it. It cannot do PWM! If you run `analogWrite(4, 127)`, the Arduino will just default to turning the pin completely OFF or completely ON. Always check for the `~` symbol for PWM.*

### Real-World Application
In a real city, you wouldn't wire a 5V LED. The PWM signal from the microcontroller would go into a heavy-duty **Triac Dimmer Circuit** capable of smoothly dimming 220V AC halogen or high-power LED street lamps.

---
**[End of Module 3]**
