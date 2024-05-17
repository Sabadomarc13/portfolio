import Image from "next/image";

import HomePage from "@/app/component/Home";
import { SideBar } from "@/app/component/SideBar";
export default function Home() {
  return (
    <div className="px-10 py-9 w-full">
      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-3xl">Research</h1>
        <span className="text-2xl underline underline-offset-8 text-center">Embedded IoT Room Temperature Controller with Fuzzy Logic</span>
        <div className="flex gap-5 flex-col">
          <p className="text-justify indent-8">
            Our research focuses on the development of an Embedded Internet of
            Things (IoT) Room Temperature Controller leveraging fuzzy logic to
            enhance efficiency and user comfort. This system integrates sensors,
            microcontrollers, and wireless communication modules to continuously
            monitor and regulate the room temperature. Unlike traditional on/off
            thermostats, our controller employs fuzzy logic algorithms, which
            allow for more nuanced decision-making. This enables the system to
            adjust heating and cooling outputs gradually, maintaining a stable
            and comfortable environment while optimizing energy consumption.
          </p>
          <span className="text-justify indent-8">
            By incorporating IoT capabilities, our temperature controller can be  
            accessed and managed remotely via smartphones or other connected
            devices. This connectivity allows for real-time monitoring and
            adjustments, providing users with greater control over their
            environment. Additionally, data collected from the system can be
            analyzed to improve performance over time, learning user preferences
            and adapting to seasonal changes. The combination of fuzzy logic and
            IoT technology in our temperature controller represents a
            significant advancement in smart home automation, offering a more
            intelligent, efficient, and user-friendly solution for maintaining
            optimal indoor climates.
          </span>
        </div>
      </div>
    </div>
  );
}
