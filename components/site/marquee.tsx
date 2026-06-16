import * as React from "react";

const ROW_ONE = [
  "Robotics",
  "Embedded Systems",
  "Computer Vision",
  "System V&V",
  "Test Engineering",
  "Mechatronics",
];

const ROW_TWO = [
  "Python",
  "C++",
  "ROS",
  "PyTorch",
  "LabVIEW",
  "SolidWorks",
  "ANSYS",
  "OpenCV",
];

function Track({ items }: { items: string[] }) {
  // Render the content twice for a seamless -50% loop (matches the original
  // script that duplicated `innerHTML`).
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track">
      {doubled.map((label, i) => (
        <React.Fragment key={i}>
          <span>{label}</span>
          <span className="dot">✦</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <Track items={ROW_ONE} />
      </div>
      <div className="marquee marquee--reverse">
        <Track items={ROW_TWO} />
      </div>
    </section>
  );
}
