import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Internet of Things (IoT) | openCSE",
  description:
    "Beginner-friendly IoT course notes: sensors, Arduino, ESP32, MQTT, cloud, and industrial projects for openCSE",
};

export default function IotLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem5-iot-root min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
