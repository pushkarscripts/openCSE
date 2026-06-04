# Module 5: Communication & Networking Protocols

## 1. Introduction
In Module 4, we connected an ESP32 to a local Wi-Fi router. While Wi-Fi is great for homes, what if you are building a smart collar to track a cow across a 500-acre farm? There is no Wi-Fi router in the middle of a field.

To solve different engineering problems, IoT uses many different "languages" and communication methods. In this module, we will explore how devices talk to each other across different ranges, and dive deep into **MQTT**, the undisputed industry standard protocol for IoT data transfer.

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the trade-offs between Range, Bandwidth, and Power in IoT Networking.
- Compare Short-Range (RFID, Bluetooth, Zigbee) and Long-Range (LoRaWAN, Cellular) protocols.
- Understand why HTTP is terrible for IoT, and why MQTT is better.
- Build an RFID Security System that publishes data via MQTT.

---

## 3. The Iron Triangle of IoT Communication

When choosing a communication protocol for an IoT project, you must balance three competing factors. You can generally only pick two:
1. **Long Range** (Miles/Kilometers)
2. **High Bandwidth** (Sending lots of data quickly, like video)
3. **Low Power** (Battery lasts for years)

- **Wi-Fi**: High Bandwidth, Low Range, High Power. (Great for Smart TVs).
- **Cellular (4G/5G)**: High Bandwidth, Long Range, HIGH Power. (Your phone battery dies in a day).
- **LoRaWAN**: Low Bandwidth, Long Range, Low Power. (Perfect for agricultural sensors sending 10 bytes of data per hour).
- **Bluetooth Low Energy (BLE)**: Low Bandwidth, Low Range, Low Power. (Perfect for a smartwatch).

---

## 4. Hardware Protocols: Short vs. Long Range

### Short-Range Protocols

#### Hardware Spotlight: RC522 RFID Module
![RC522 RFID Module](/iot/images/m5-rfid-sensor.png)
*The RC522 Module reads the unique serial number hidden inside blank plastic cards or blue keyfobs using near-field radio waves.*

- **RFID / NFC**: Near-Field Communication. Range is literally a few centimeters. Extremely secure. The "Tag" has no battery; it steals power wirelessly from the "Reader". *Use Case: Keycard door locks, Apple Pay.*
- **Zigbee / Thread**: Mesh networking. Range is ~10-100 meters. Instead of all devices talking to one central router (like Wi-Fi), every smart bulb talks to its neighbor, passing messages along the chain. *Use Case: Philips Hue Smart Bulbs.*

### Long-Range Protocols (LPWAN)
- **LoRaWAN**: Long Range Wide Area Network. Can transmit data up to 15 kilometers in rural areas. It uses sub-GHz radio frequencies. It is incredibly slow (often taking seconds to send a single sentence of text), but a battery can last 10 years. *Use Case: Forest fire detection sensors.*
- **NB-IoT (Narrowband IoT)**: A cellular standard. It uses existing 4G/5G cell towers but requires very little power. Requires a SIM card and a monthly subscription. *Use Case: Smart city parking meters.*

---

## 5. Application Protocols: HTTP vs. MQTT

Once the physical radio waves reach the internet, how is the data formatted?

### Why HTTP fails in IoT
In Module 4, we used HTTP (Hypertext Transfer Protocol). HTTP is a "Request/Response" protocol. Your phone *asks* for the webpage, and the server *responds*. 
- **The Problem**: It is extremely "heavy". Sending a single number like `25` (the temperature) using HTTP requires sending hundreds of bytes of "Header" text (telling the server what browser you use, what language you speak, etc.). For a battery-powered sensor on a slow LoRa connection, this is a massive waste of energy.

### The Solution: MQTT (Message Queuing Telemetry Transport)
MQTT was invented in 1999 for monitoring oil pipelines over satellite links. It is a "Publish/Subscribe" protocol. It is incredibly lightweight; the header is only 2 bytes!

#### How MQTT Works (Pub/Sub)
Instead of devices talking directly to each other, everything talks to a central server called a **Broker**.

1. **Topics**: Data is organized into folders called topics, like `home/livingroom/temperature`.
2. **Publishing**: A temperature sensor *Publishes* the number `25` to the topic `home/livingroom/temperature`.
3. **Subscribing**: Your phone app *Subscribes* to that topic.
4. **The Magic**: The moment the sensor publishes the data, the Broker instantly pushes that data to *any* device subscribed to the topic. The phone didn't have to ask for it!

### Visual Flow: MQTT Architecture
![MQTT Pub-Sub Flow](/iot/images/m5-mqtt-flow.png)
*Visual Connection Flow: Notice how the Publisher (ESP32) and the Subscriber (Phone) NEVER talk directly to each other. They only talk to the central Broker.*

---

## 6. Interview-Style Conceptual Questions

1. **You need to stream a live video feed from a drone 5 miles away. Should you use LoRaWAN?**
   *Answer: No. LoRaWAN has extremely low bandwidth (kilobits per second). Video requires megabits per second. You would need Cellular (4G/5G) or a dedicated high-frequency radio link.*
2. **In MQTT, what happens if a sensor publishes data to a topic, but the phone app is turned off?**
   *Answer: The Broker receives the data, realizes no one is currently subscribed to listen, and discards the data. (Unless you configure "Retained Messages", which tells the Broker to save the very last message sent for the next person who connects).*

---

## 7. Practical Project: RFID Security System & MQTT Publisher

We will build an industrial-style security system. Employees will scan an RFID keycard. The microcontroller will check if the card is authorized. If it is, it will trigger a relay (to unlock a door) AND publish a message via Wi-Fi/MQTT to a global cloud broker so the security team can monitor access live.

### Required Components
- 1x ESP32 Development Board
- 1x RC522 RFID Reader Module & Blank Cards/Tags
- 1x LED (Simulating a Door Lock Relay)

### Circuit Connection (SPI Protocol) & Breadboard Visual
![SPI RFID Wiring](/iot/images/m5-spi-wiring.png)
*Visual Connection Flow: SPI is a high-speed synchronous protocol requiring 4 data lines (MISO, MOSI, SCK, CS). The RC522 operates strictly at 3.3V. Connecting its VCC to 5V will instantly destroy it.*

The RC522 uses the **SPI** (Serial Peripheral Interface) protocol, which requires 4 specific pins to communicate very fast.
- **SDA (SS)** to ESP32 Pin `5`
- **SCK (Clock)** to ESP32 Pin `18`
- **MOSI** to ESP32 Pin `23`
- **MISO** to ESP32 Pin `19`
- **GND** to `GND`, **3.3V** to `3.3V` (DO NOT connect to 5V, the RC522 will fry).

### Step-by-Step Code Implementation

> [!TIP]
> You will need to install two libraries in the Arduino IDE: `MFRC522` (for the RFID reader) and `PubSubClient` (for MQTT).

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <SPI.h>
#include <MFRC522.h>

// Wi-Fi & MQTT Settings
const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";
const char* mqtt_server = "broker.hivemq.com"; // A free public MQTT broker

WiFiClient espClient;
PubSubClient client(espClient);

// RFID Settings
#define SS_PIN 5
#define RST_PIN 22
MFRC522 rfid(SS_PIN, RST_PIN);

// The authorized card ID (You will find yours in the serial monitor)
String authorizedCard = "A1 B2 C3 D4"; 
const int lockRelayPin = 2;

void setup() {
  Serial.begin(115200);
  pinMode(lockRelayPin, OUTPUT);
  
  // Initialize SPI bus and RFID reader
  SPI.begin();
  rfid.PCD_Init();
  
  // Connect Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("\nWi-Fi Connected");
  
  // Setup MQTT
  client.setServer(mqtt_server, 1883);
}

void reconnectMQTT() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP32Door-" + String(random(0xffff), HEX);
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
    } else {
      delay(5000);
    }
  }
}

void loop() {
  if (!client.connected()) { reconnectMQTT(); }
  client.loop(); // Keep MQTT connection alive

  // Check if a new RFID card is present
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  // Read the Card UID (Unique ID)
  String scannedCard = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    scannedCard += String(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    scannedCard += String(rfid.uid.uidByte[i], HEX);
  }
  scannedCard.trim();
  scannedCard.toUpperCase();

  Serial.println("Card Scanned: " + scannedCard);

  // Logic: Is it the authorized card?
  if (scannedCard == authorizedCard) {
    Serial.println("Access Granted!");
    digitalWrite(lockRelayPin, HIGH); // Unlock Door
    
    // Publish to the Cloud via MQTT!
    client.publish("factory/door1/logs", "ACCESS GRANTED - User ID: A1B2C3D4");
    
    delay(3000); // Keep unlocked for 3 seconds
    digitalWrite(lockRelayPin, LOW); // Lock Door
  } else {
    Serial.println("Access Denied!");
    client.publish("factory/door1/logs", "ACCESS DENIED - Unknown Card");
  }

  // Stop reading this specific card to prevent spamming
  rfid.PICC_HaltA();
}
```

### Code Explanation & Data Flow
1. **The Physical Layer**: When a plastic keycard nears the RC522 reader, the magnetic field powers a microchip inside the card. The chip broadcasts its Unique ID (e.g., `A1 B2 C3 D4`) via radio waves.
2. **The Local Controller**: The ESP32 receives the ID via SPI. It checks an `if` statement to see if the ID matches the database.
3. **The Application Layer (MQTT)**: If authorized, the ESP32 acts as an MQTT Publisher. It connects to `broker.hivemq.com` (a global server located in Germany) and publishes a text string to the topic `factory/door1/logs`.
4. **The Result**: Anyone in the world with an MQTT app on their phone subscribed to `factory/door1/logs` will instantly receive a push notification that the door was opened!

---
**[End of Module 5]**
