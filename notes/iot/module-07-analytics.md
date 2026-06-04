# Module 7: IoT Data Analytics & Machine Learning

## 1. Introduction
In Module 6, we successfully pushed our sensor data into a cloud database. We now have 10,000 temperature and humidity data points. But data sitting in a database is useless on its own. 

**Data only has value when it is converted into Actionable Intelligence.**

This is where IoT Data Analytics comes in. How do we take massive datasets and use them to save a company money, prevent a machine from breaking, or optimize crop yields? In this module, we will explore Rule Engines, Edge Analytics, and the intersection of IoT and Machine Learning (ML).

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the difference between descriptive, predictive, and prescriptive analytics.
- Learn how Cloud Rule Engines automate complex tasks without human intervention.
- Understand how Machine Learning is applied to IoT (Anomaly Detection).
- Build a Smart Irrigation System that uses rule-based analytics to optimize water usage.

---

## 3. Core Concepts: The Analytics Ladder

When a business deploys an IoT system, they generally progress through four stages of analytics maturity:

### 1. Descriptive Analytics (What happened?)
- *Example*: A dashboard showing the soil moisture was 20% yesterday. 
- This is basic reporting. It is useful, but a human still has to look at the graph and decide what it means.

### 2. Diagnostic Analytics (Why did it happen?)
- *Example*: Cross-referencing the soil moisture graph with the cloud weather API graph to realize the soil dried out because the temperature spiked to 40°C.

### 3. Predictive Analytics (What will happen?)
- *Example*: Using Machine Learning algorithms on the last 5 years of soil data to predict that, based on current trends, the soil will reach critical dryness in exactly 48 hours.

### 4. Prescriptive Analytics (What should we do?)
- *Example*: The AI not only predicts the dryness but automatically turns on the irrigation system for exactly 14 minutes to restore optimal moisture, while sending a report to the farmer.

---

## 4. Software Focus: Cloud Rule Engines

You do not always need complex AI. Most industrial IoT automation is powered by **Rule Engines**.

A Rule Engine is a cloud-based software component that constantly evaluates incoming telemetry against a set of `IF / THEN` statements.

**Example of a Complex Cloud Rule:**
> `IF` (Moisture < 30%) `AND` (Weather Forecast == "No Rain") `AND` (Time of Day == "Night") `THEN` (Trigger Relay_1) `AND` (Send SMS Alert).

*Why do this in the Cloud instead of on the ESP32?*
Because the ESP32 doesn't know the Weather Forecast. It only knows its local sensor. The Cloud integrates multiple data sources (Sensor data + Web APIs + Timezones) to make highly intelligent decisions.

---

## 5. Machine Learning at the Edge (TinyML)

Sending thousands of data points to the cloud per second for AI analysis is expensive. A massive trend in IoT is **TinyML**—running Machine Learning models directly on the microcontroller.

- **Anomaly Detection**: Imagine a vibration sensor on a factory motor. Instead of streaming raw vibration data to AWS, you train a neural network to recognize the "normal" vibration pattern. You upload this trained model to the ESP32. 
- The ESP32 processes the vibrations locally (Edge Computing). It only sends a message to the cloud if the ML model detects an *anomaly* (a weird vibration that usually means the motor is breaking).

---

## 6. Interview-Style Conceptual Questions

1. **What is the main advantage of Edge Analytics (TinyML) over Cloud Analytics?**
   *Answer: Reduced latency (decisions are made instantly without internet delays), significantly reduced bandwidth costs, and improved privacy (raw data never leaves the device).*
2. **If a Cloud Rule Engine triggers an actuator, but the Wi-Fi goes down, what happens?**
   *Answer: The system fails. This is a critical design flaw. Life-critical safety rules (like shutting down an overheating boiler) MUST be hardcoded onto the local microcontroller. The Cloud should only handle optimization rules, not safety rules.*

---

## 7. Practical Project: Smart Agriculture & Irrigation Analytics

We will build a Smart Irrigation node. An ESP32 will read soil moisture. Instead of just "turning on a pump when it's dry," we will implement a local rule engine that evaluates thresholds, prevents overwatering by implementing "soak delays", and pushes analytical data to the serial monitor/cloud.

### Hardware Spotlight: Soil Moisture Sensor
![Placeholder: Soil Moisture Sensor](/iot/images/placeholder-m7-sensor.png)
*A Capacitive Soil Moisture Sensor. Unlike cheap resistive sensors that corrode in water within weeks, capacitive sensors measure changes in capacitance to determine moisture, lasting for years in harsh soil.*

### Required Components
- 1x ESP32 Development Board
- 1x Capacitive Soil Moisture Sensor (Analog)
- 1x 5V Relay Module (to control a water pump)
- 1x Mini Submersible Water Pump (Optional, for real testing)

### Circuit Connection & Breadboard Visual
![Placeholder: Smart Irrigation Wiring](/iot/images/placeholder-m7-wiring.png)
*Visual Connection Flow: The Moisture sensor outputs an analog voltage to ESP32 Pin 34. Based on the local Rule Engine, the ESP32 sends a digital HIGH signal to Pin 2, triggering the Relay to power the high-current water pump.*

- **Moisture Sensor**: VCC to `3.3V`, GND to `GND`, AOUT to ESP32 Analog Pin `34`.
- **Relay**: IN to ESP32 Digital Pin `2`, VCC to `5V`, GND to `GND`.

### Step-by-Step Code Implementation

```cpp
// Define Pins
const int moisturePin = 34;
const int pumpRelayPin = 2;

// Analytics Thresholds (Derived from historical data)
const int DRY_THRESHOLD = 30;     // Below 30% is too dry
const int OPTIMAL_MOISTURE = 65;  // Stop watering at 65%

// State tracking for our local rule engine
bool isWatering = false;
unsigned long wateringStartTime = 0;
const unsigned long MAX_WATERING_TIME = 10000; // 10 seconds max to prevent flooding

void setup() {
  Serial.begin(115200);
  pinMode(pumpRelayPin, OUTPUT);
  digitalWrite(pumpRelayPin, LOW); // Ensure pump is OFF
  
  Serial.println("Smart Irrigation Analytics System Booting...");
}

void loop() {
  // 1. Data Collection (Read Analog ADC)
  int rawADC = analogRead(moisturePin); // ESP32 ADC is 12-bit (0 to 4095)
  
  // 2. Data Transformation (Convert raw voltage to Percentage)
  // Note: Capacitive sensors read HIGHER values when DRY. 
  // You must calibrate these numbers (2000 = Wet water, 4000 = Bone dry air)
  int moisturePercent = map(rawADC, 4000, 2000, 0, 100);
  moisturePercent = constrain(moisturePercent, 0, 100);
  
  // 3. Descriptive Analytics Output
  Serial.print("Current Moisture Level: ");
  Serial.print(moisturePercent);
  Serial.println("%");

  // 4. Prescriptive Analytics (The Local Rule Engine)
  
  // RULE 1: If soil is dry, and we aren't already watering, start watering.
  if (moisturePercent < DRY_THRESHOLD && !isWatering) {
    Serial.println("ACTION: Soil critically dry. Triggering Irrigation.");
    digitalWrite(pumpRelayPin, HIGH); // Turn ON pump
    isWatering = true;
    wateringStartTime = millis();
  }
  
  // RULE 2: If we are watering, check if we reached optimal levels
  if (isWatering) {
    if (moisturePercent >= OPTIMAL_MOISTURE) {
      Serial.println("ACTION: Optimal moisture reached. Stopping Irrigation.");
      digitalWrite(pumpRelayPin, LOW); // Turn OFF pump
      isWatering = false;
    }
    
    // RULE 3: Failsafe / Anomaly Detection
    // If the pump has been running for 10 seconds and the soil is STILL dry,
    // the water tank is probably empty, or the sensor is broken!
    if (millis() - wateringStartTime > MAX_WATERING_TIME) {
      Serial.println("ANOMALY DETECTED: Pump timeout! Possible empty tank or broken pipe.");
      digitalWrite(pumpRelayPin, LOW); // EMERGENCY SHUTOFF
      isWatering = false;
      // In a full system, you would send an MQTT Alert to the farmer here!
      delay(60000); // Wait a minute before trying again
    }
  }

  // Delay before next reading (Edge computing optimization)
  delay(2000);
}
```

### Code Explanation & Data Flow
1. **Calibration**: The `map()` function is used to transform raw electrical ADC values (e.g., `3450`) into a human-readable percentage (`42%`). This is the first step of data analytics.
2. **The Local Rule Engine**: Instead of simple `IF/ELSE`, we track the *state* of the system using `isWatering`. This allows us to apply complex logic across multiple loops.
3. **Anomaly Failsafe**: This is critical engineering. Pumps burn out if they run without water. By tracking `wateringStartTime`, the microcontroller actively predicts a hardware failure (an empty tank) if the moisture doesn't rise within 10 seconds, safely shutting down the system and averting disaster.

### Visual Troubleshooting: The Dry Pump Failsafe
![Placeholder: Pump Timeout Error](/iot/images/placeholder-m7-troubleshooting.png)
*If the soil moisture does not rise after 10 seconds of pumping, the rule engine detects an anomaly (e.g. empty water tank) and executes an EMERGENCY SHUTOFF to prevent the pump motor from burning out.*

---
**[End of Module 7]**
