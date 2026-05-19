import path from "path";

export type IotChapter = {
  id: string;
  title: string;
  markdownFile?: string;
};

export const iotChapters: IotChapter[] = [
  { id: "ch0", title: "Course Outline" },
  {
    id: "ch1",
    title: "Introduction to IoT",
    markdownFile: "module-01-introduction.md",
  },
  {
    id: "ch2",
    title: "Sensors & Actuators",
    markdownFile: "module-02-sensors-actuators.md",
  },
  {
    id: "ch3",
    title: "Microcontrollers (Arduino)",
    markdownFile: "module-03-arduino.md",
  },
  {
    id: "ch4",
    title: "Advanced Controllers (ESP32)",
    markdownFile: "module-04-esp32.md",
  },
  {
    id: "ch5",
    title: "Communication Protocols",
    markdownFile: "module-05-protocols.md",
  },
  {
    id: "ch6",
    title: "Cloud Integration",
    markdownFile: "module-06-cloud.md",
  },
  {
    id: "ch7",
    title: "Data Analytics",
    markdownFile: "module-07-analytics.md",
  },
  {
    id: "ch8",
    title: "Smart Home Automation",
    markdownFile: "module-08-smart-automation.md",
  },
  {
    id: "ch9",
    title: "Industrial IoT & Security",
    markdownFile: "module-09-iiot-security.md",
  },
  {
    id: "ch10",
    title: "Capstone Projects",
    markdownFile: "module-10-capstone.md",
  },
];

export const iotNotesDir = path.join(process.cwd(), "notes", "iot");

export function getIotChapter(chapterId: string) {
  return iotChapters.find((chapter) => chapter.id === chapterId);
}
