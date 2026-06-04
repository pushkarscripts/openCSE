# Module 4: Advanced Controllers & Connectivity (ESP32)

## 1. Introduction
The Arduino Uno we explored in Module 3 is an excellent tool for learning hardware logic. However, it is missing the one thing required for the "Internet of Things": **The Internet**.

While you can buy physical Wi-Fi attachments for an Arduino, industry engineers use System-on-a-Chip (SoC) microcontrollers that have Wi-Fi and Bluetooth built directly into the silicon. The undisputed kings of this domain are the **ESP8266 (NodeMCU)** and its big brother, the **ESP32**. 

In this module, we will transition from standalone edge devices to fully connected network nodes.

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the architecture of modern Wi-Fi microcontrollers (ESP32).
- Learn why power management and "Deep Sleep" are the most critical skills for IoT engineers.
- Understand the basics of Web Servers and IP Addresses in a local network.
- Build a Wi-Fi-enabled Web Server to remotely control physical appliances.

---

## 3. Core Concepts: The ESP32 Architecture

The ESP32 is a beast compared to the Arduino Uno. Let's look at the specs:
- **Processor**: Dual-Core running at 240 MHz (Arduino has a Single-Core at 16 MHz).
- **Memory**: 520 KB RAM (Arduino has 2 KB).
- **Connectivity**: Built-in 2.4 GHz Wi-Fi and Bluetooth Low Energy (BLE).
- **Hardware Peripherals**: Capacitive touch sensors, built-in Hall Effect (magnetic) sensor.

### Hardware Spotlight: ESP32 Pinout
![ESP32 Development Board](/iot/images/m4-esp32-pinout.png)
*The 38-pin ESP32 Development Board. Notice the gold Wi-Fi/Bluetooth antenna trace at the top. The pins support advanced features like hardware PWM, multiple ADCs, and capacitive touch.*

### Why Dual-Core Matters
In an IoT system, the microcontroller has to juggle two very stressful jobs:
1. Running the physics/logic of reading sensors and controlling actuators.
2. Maintaining a constant, stable Wi-Fi connection with a router and parsing heavy network traffic (TCP/IP).
On a single-core chip, if your code takes 2 seconds to calculate a math problem, the Wi-Fi connection will drop because the processor stopped paying attention to the router. With a dual-core ESP32, Core 0 handles the Wi-Fi stack in the background, while Core 1 executes your sensor code.

---

## 4. Hardware Focus: Power Management & Deep Sleep

Imagine a smart agricultural soil sensor placed in a remote field. It runs on a small Li-Po battery. 

If you leave an ESP32 powered on and connected to Wi-Fi continuously, it draws about **150mA to 240mA** of current. A standard 2000mAh battery will die in **8 hours**. This is a catastrophic failure for an IoT product.

### The Solution: Deep Sleep
In Deep Sleep mode, the ESP32 shuts down its Wi-Fi, its Bluetooth, and its main Dual-Core processor. It only leaves a microscopic "RTC (Real-Time Clock)" processor running. 
In this state, power consumption drops from 240mA to **0.01mA (10 Microamps)**.

**The Professional IoT Workflow:**
1. Wake up from Deep Sleep.
2. Read the soil moisture sensor (Takes 100 milliseconds).
3. Connect to Wi-Fi (Takes 2 seconds).
4. Send data to the Cloud (Takes 500 milliseconds).
5. Go back to Deep Sleep for 1 hour.

Using this architecture, that same 2000mAh battery will last **over 3 years** instead of 8 hours!

---

## 5. Network Basics: IP Addresses & Local Servers

Before we connect to the Cloud in Module 6, we must understand Local Networks (LAN).

When your ESP32 connects to your home Wi-Fi router, the router assigns it an **IP Address** (e.g., `192.168.1.105`). This is the chip's "phone number" on your network.
If you type that IP address into the web browser of your laptop (which is connected to the same router), your laptop will "call" the ESP32.

If the ESP32 is running **Web Server** code, it will answer the call and send back a webpage (HTML). This allows you to build a UI to control the hardware!

---

## 6. Interview-Style Conceptual Questions

1. **You want to build a wearable fitness tracker that lasts for weeks on a coin-cell battery. Why shouldn't you use standard Wi-Fi?**
   *Answer: Wi-Fi requires high power to maintain a connection. You should use Bluetooth Low Energy (BLE), which is specifically designed for ultra-low power short-range communication.*
2. **If your ESP32's IP address is `192.168.0.50`, can your friend in another country type that into their browser to turn on your lights?**
   *Answer: No. `192.168.x.x` is a Local IP Address, only accessible to devices connected to your specific home router. To allow global access, you need Port Forwarding or a Cloud IoT Platform (covered in later modules).*

---

## 7. Practical Project: Local Web Server for Appliance Control

We are going to turn the ESP32 into a Web Server. When you visit its IP address on your phone, you will see a webpage with an "ON/OFF" button. Tapping the button will wirelessly toggle an LED or Relay connected to the ESP32.

### Required Components
- 1x ESP32 Development Board
- 1x LED & 220 Ohm Resistor (or a 5V Relay Module to control a real lamp)
- Home Wi-Fi Network

### Visual Output: The Phone UI
![Smartphone Web UI](/iot/images/m4-web-ui.png)
*This is the HTML interface we will build. It is served directly from the ESP32's memory to your phone's browser.*

### Circuit Connection & Breadboard Visual
![ESP32 Relay Wiring](/iot/images/m4-relay-wiring.png)
*Visual Connection Flow: The ESP32's 5V (VIN) pin powers the Relay module. Digital Pin 2 sends a HIGH/LOW signal to the Relay's IN pin, magnetically throwing the high-voltage switch.*

- Connect the LED's positive leg (or Relay's IN pin) to ESP32 Pin `2`.
- Connect the negative leg (or Relay's GND pin) to ESP32 `GND`.
*(If using a Relay, also connect VCC to the `VIN` or `5V` pin).*

### Step-by-Step Code Implementation

> [!WARNING]  
> You must install the "ESP32 Board Manager" in your Arduino IDE to compile this code. Replace the SSID and Password with your home Wi-Fi details.

```cpp
#include <WiFi.h>
#include <WebServer.h>

// Replace with your network credentials
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

// Create a WebServer object listening on standard HTTP port 80
WebServer server(80);

const int relayPin = 2; // Pin connected to LED/Relay
bool relayState = false; // Keep track of whether it's ON or OFF

// HTML and CSS for our Webpage UI
// We store this as a massive string. Notice the CSS styling for a "premium" button.
const char* htmlPage = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
  <title>ESP32 Smart Home</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: 'Arial', sans-serif; text-align: center; background-color: #f4f4f9; padding-top: 50px; }
    .btn { background-color: #4CAF50; border: none; color: white; padding: 20px 40px; 
           font-size: 20px; border-radius: 8px; cursor: pointer; text-decoration: none; }
    .btn-off { background-color: #f44336; }
  </style>
</head>
<body>
  <h1>Smart Appliance Control</h1>
  <p>Status: <span id="status">UNKNOWN</span></p>
  <a href="/toggle" class="btn">TOGGLE POWER</a>
</body>
</html>
)rawliteral";

void setup() {
  Serial.begin(115200); // ESP32 uses faster serial by default
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);

  // 1. Connect to Wi-Fi
  Serial.print("Connecting to Wi-Fi");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  // Print the IP Address assigned by the router
  Serial.println("\nConnected!");
  Serial.print("Visit this IP in your browser: http://");
  Serial.println(WiFi.localIP());

  // 2. Define Web Server Routes
  // What to do when user visits the main page "/"
  server.on("/", []() {
    server.send(200, "text/html", htmlPage); // Send the HTML string!
  });

  // What to do when user clicks the toggle button and goes to "/toggle"
  server.on("/toggle", []() {
    relayState = !relayState; // Flip the boolean state
    digitalWrite(relayPin, relayState ? HIGH : LOW); // Update the physical pin
    
    // Redirect the user back to the main page immediately
    server.sendHeader("Location", "/");
    server.send(303); 
  });

  // 3. Start the server
  server.begin();
  Serial.println("HTTP Server Started.");
}

void loop() {
  // 4. Listen for incoming client connections constantly
  server.handleClient();
}
```

### Code Explanation & Data Flow
1. **`WiFi.begin()`**: The ESP32's radio turns on and negotiates an encrypted connection with your home router.
2. **`server.on("/", ...)`**: We set up "Routes". When your phone asks for the root directory (`/`), the ESP32 replies with an HTTP `200 OK` code and transmits the `htmlPage` string. Your phone's browser renders this HTML into a visual button.
3. **`server.on("/toggle", ...)`**: When you tap the button on your phone, your browser makes a request to `http://[IP_ADDRESS]/toggle`. The ESP32 receives this, flips the voltage on Pin 2 (turning the Relay on), and tells your phone to redirect back to the home page. 

### Testing & Troubleshooting
- **Cannot connect to Wi-Fi**: The ESP32 *only* supports **2.4 GHz** Wi-Fi networks. It cannot see or connect to 5 GHz networks. Ensure your router is broadcasting a 2.4 GHz band.
- **Serial Monitor shows garbage**: Make sure the baud rate in the bottom right corner of the Serial Monitor is set to `115200` to match the code.

### Future Improvements
This system works beautifully, but it has a fatal flaw: The web interface is trapped inside the ESP32. If you want 50 devices, you have to type 50 different IP addresses into your browser. In the coming modules, we will decouple the UI from the device, using MQTT to send data to a centralized Cloud Dashboard.

---
**[End of Module 4]**
