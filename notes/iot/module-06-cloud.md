# Module 6: Cloud Integration & IoT Platforms

## 1. Introduction
In Module 5, we learned how to send data from an ESP32 to an MQTT Broker. However, an MQTT Broker does not *save* the data. It just acts as a postman, delivering messages to active listeners. 

If you are a farmer trying to figure out why your crop died last month, a live MQTT stream won't help you. You need **Historical Data**. You need databases, graphs, and cloud platforms. 

In this module, we move from the Edge (Microcontrollers) to the Cloud (Servers). We will learn how to permanently store our sensor data in databases and visualize it using industry-standard IoT platforms.

---

## 2. Learning Objectives
By the end of this module, you will:
- Understand the role of an IoT Cloud Platform (ThingSpeak, AWS IoT, Blynk).
- Master REST APIs and understand the difference between HTTP GET and POST.
- Understand JSON (JavaScript Object Notation), the universal language of cloud data.
- Build a complete, cloud-connected Weather Monitoring Station.

---

## 3. Core Concepts: IoT Platforms & Databases

Building a secure database from scratch (like SQL or MongoDB) and exposing it securely to the internet is difficult. To speed up development, engineers use **IoT Cloud Platforms**.

These platforms provide:
1. **Data Ingestion**: Secure APIs to receive data from millions of devices simultaneously.
2. **Time-Series Databases**: Databases specifically optimized to store timestamped sensor data (e.g., "Temp was 25C at 10:04 AM", "Temp was 26C at 10:05 AM").
3. **Visualization**: Built-in drag-and-drop graphs and gauges.

### Popular IoT Platforms
- **ThingSpeak (by MathWorks)**: Highly academic and engineering-focused. Excellent for data logging and math analysis (integrates with MATLAB).
- **Blynk**: Highly consumer-focused. Excellent for creating mobile apps to control smart home devices visually.
- **AWS IoT Core / Azure IoT Hub**: Enterprise-focused. Used by massive companies (like Tesla or Philips) to manage millions of devices. Incredibly powerful but highly complex to set up.

---

## 4. Software Focus: APIs & JSON

How does an ESP32 actually hand the data over to the Cloud database? It uses an **API** (Application Programming Interface).

### HTTP GET vs. POST
When interacting with a REST API, you use standard HTTP methods:
- **GET Request**: "Hey Cloud, what is the current status of the living room light?" (Used to *read* data).
- **POST Request**: "Hey Cloud, save this new temperature reading into your database." (Used to *write* data).

### JSON (JavaScript Object Notation)
When you POST data to a modern cloud, you don't just send the raw number `25`. The cloud won't know what `25` means. You send a structured text format called JSON.

An ESP32 formatting temperature and humidity into JSON looks like this:
```json
{
  "device_id": "ESP_Station_1",
  "temperature": 25.4,
  "humidity": 60,
  "timestamp": "2023-10-25T14:30:00Z"
}
```

---

## 5. Practical Engineering Insights

- **Data Hoarding**: An ESP32 reading a sensor every second will generate **86,400 database rows** per day. For 1,000 devices, that's 86 million rows a day! Your cloud server will crash, and your AWS bill will bankrupt you. **Rule of Thumb**: Only send data to the cloud when the data *changes significantly*, or aggregate it locally and send an average every 15 minutes.
- **API Keys**: When you create a ThingSpeak account, you get an API Key (a long string of random letters). This is your password. If you upload your ESP32 code to GitHub with the API Key inside it, hackers will steal it and spam your database. Always keep API keys secret!

---

## 6. Interview-Style Conceptual Questions

1. **Why use a Time-Series Database (like InfluxDB) instead of a standard SQL database for IoT?**
   *Answer: IoT data is exclusively timestamp-based. Time-series databases are optimized to ingest massive amounts of timestamped data very quickly and query it efficiently (e.g., "Give me the average temperature over the last 30 days").*
2. **What is the difference between an API and a User Interface (UI)?**
   *Answer: A UI is built for humans to look at and click (like a website). An API is built for machines (like an ESP32) to send raw data to a server in a structured format.*

---

## 7. Practical Project: Global Weather Monitoring Station

We will build a professional weather station. An ESP32 will read temperature and humidity from a DHT11 sensor. It will then make an HTTP API call to **ThingSpeak**, permanently storing the data in a cloud database and plotting it on a live graph accessible from anywhere in the world.

### Hardware Spotlight: DHT11 Sensor
![DHT11 Sensor](/iot/images/m6-dht11-sensor.png)
*The DHT11 is a basic, ultra-low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin.*

### Required Components
- 1x ESP32 Development Board
- 1x DHT11 Temperature & Humidity Sensor
- 1x ThingSpeak Account (Free)

### Cloud Setup & Visual UI (ThingSpeak)
![ThingSpeak Dashboard](/iot/images/m6-thingspeak-ui.png)
*Visual Output: This is the ThingSpeak dashboard we are building. The ESP32 will push data to the Cloud, and ThingSpeak will automatically render these historical line graphs.*

1. Go to thingspeak.com and create a free account.
2. Click **New Channel**. Name it "Weather Station".
3. Enable **Field 1** (name it "Temperature") and **Field 2** (name it "Humidity").
4. Save the channel. Go to the "API Keys" tab and copy your **Write API Key**.

### Circuit Connection
- **DHT11 VCC** to ESP32 `3.3V`
- **DHT11 GND** to ESP32 `GND`
- **DHT11 DATA** to ESP32 Pin `4`

### Step-by-Step Code Implementation

> [!TIP]
> Install the `DHT sensor library` by Adafruit in your Arduino IDE.

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// Wi-Fi Credentials
const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";

// ThingSpeak API Settings
String apiKey = "YOUR_THINGSPEAK_WRITE_API_KEY"; 
const char* serverName = "http://api.thingspeak.com/update";

// Sensor Settings
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// Timer variables (We only want to send data every 15 seconds)
unsigned long lastTime = 0;
unsigned long timerDelay = 15000;

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while(WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("\nConnected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Edge Computing Rule: Don't spam the cloud. Only run every 15 seconds.
  if ((millis() - lastTime) > timerDelay) {
    
    // 1. Read Sensor Data
    float temp = dht.readTemperature();
    float hum = dht.readHumidity();
    
    // Check if the reading failed
    if (isnan(temp) || isnan(hum)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
    }
    
    Serial.println("Temp: " + String(temp) + "°C | Humidity: " + String(hum) + "%");

    // 2. Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      
      // 3. Construct the API URL
      // ThingSpeak uses a simple URL parameter structure for GET requests:
      // http://api.thingspeak.com/update?api_key=XYZ&field1=25&field2=60
      String serverPath = serverName + "?api_key=" + apiKey + "&field1=" + String(temp) + "&field2=" + String(hum);
      
      // 4. Make the HTTP Request
      http.begin(client, serverPath.c_str());
      
      // Send HTTP GET request
      int httpResponseCode = http.GET();
      
      if (httpResponseCode > 0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode); // 200 means OK!
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    
    // Reset timer
    lastTime = millis();
  }
}
```

### Code Explanation & Data Flow
1. **Local Timing**: We use `millis()`, which returns the number of milliseconds since the board booted up. By checking `millis() - lastTime`, we create a non-blocking 15-second timer. This allows the ESP32 to theoretically do other things (like checking a motion sensor) while waiting to send data to the cloud.
2. **String Construction**: We dynamically build a URL string by appending our sensor variables (`temp` and `hum`) onto the ThingSpeak API URL.
3. **HTTP GET**: `http.GET()` executes the network request. The ESP32 reaches out to the ThingSpeak server in America, hands over the URL string, and waits for a response. A response code of `200` means the server successfully saved the data!

### Result
Go to your ThingSpeak Dashboard. You will see two beautiful line graphs actively plotting your room's temperature and humidity over time. You can view this webpage from anywhere on Earth, proving your device is fully integrated into the IoT ecosystem!

---
**[End of Module 6]**
