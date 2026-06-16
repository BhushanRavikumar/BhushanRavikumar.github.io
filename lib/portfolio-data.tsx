import * as React from "react";
import {
  DialogHeadLogo,
  DialogHeadThumb,
  DialogHero,
  Carousel,
  Chips,
  GithubLink,
} from "@/components/site/dialog-parts";

/* =========================================================
   Experience
   ========================================================= */

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  logo: string;
  summary: React.ReactNode;
  detail: React.ReactNode;
};

export const experiences: Experience[] = [
  {
    id: "bracco",
    company: "Bracco Medical Technologies",
    role: "System Test Engineer · Minneapolis, MN",
    dates: "May 2025 – Present",
    logo: "/assets/Bracco%20Logo.png",
    summary: (
      <>
        Lead system integration, characterization, and V&amp;V testing of complex
        electromechanical subsystems. Authored 60+ risk-based test protocols (~20%
        of program coverage), built PyQt and LabVIEW automation that cut
        manufacturing test time by 40%, and debugged PID motor-control firmware to
        bring actuator performance within spec.
      </>
    ),
    detail: (
      <>
        <DialogHeadLogo
          logo="/assets/Bracco%20Logo.png"
          title="Bracco Medical Technologies"
          role="System Test Engineer · Minneapolis, MN"
          dates="May 2025 – Present"
        />
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Execute system integration, characterization, and V&amp;V testing of complex electromechanical subsystems using lab test equipment and DAQ-based measurement systems.</li>
            <li>Authored <strong>60+ risk-based system &amp; software V&amp;V protocols</strong> — about 20% of total program coverage for the platform.</li>
            <li>Developed PyQt and Tkinter GUIs for manufacturing teams to automate test workflows, reducing manufacturing test time by <strong>40%</strong>.</li>
            <li>Designed custom electromechanical fixtures in SolidWorks; built Python, LabVIEW, and microcontroller-based tools that reduced test execution time by <strong>35%</strong>.</li>
            <li>Led Design of Experiments for safety-critical actuator subsystems and supported acceptance criteria development for performance verification.</li>
            <li>Conducted Gage R&amp;R studies to validate measurement system capability for high-risk subsystem testing.</li>
            <li>Built a closed-loop reliability rig for HALT-style testing to generate lifecycle data for next-generation requirements.</li>
            <li>Debugged and optimized PID-based motor-control firmware to resolve stability issues and bring performance within spec.</li>
            <li>Defined and updated system requirements based on trends observed from ad-hoc testing and characterization data.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "PyQt", "Tkinter", "LabVIEW", "SolidWorks", "DAQ", "Microcontrollers", "Jama Connect", "Jira"]} />
        </section>
      </>
    ),
  },
  {
    id: "ambient",
    company: "Ambient Intelligence",
    role: "R&D Engineer · Minneapolis, MN",
    dates: "Aug 2024 – May 2025",
    logo: "/assets/ambientintelligence_logo.jfif",
    summary: (
      <>
        Architected the Python system software for an mmWave-based fall-detection
        device on Raspberry Pi — point-cloud preprocessing, real-time detection,
        AWS IoT/MQTT integration, and headless Linux service management. Drove the
        device from prototype through 3D-printed enclosures and healthcare-aligned
        validation.
      </>
    ),
    detail: (
      <>
        <DialogHeadLogo
          logo="/assets/ambientintelligence_logo.jfif"
          title="Ambient Intelligence"
          role="R&D Engineer · Minneapolis, MN"
          dates="Aug 2024 – May 2025"
        />
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Architected the system software in Python for a fall-detection device, integrating mmWave sensors with Raspberry Pi for real-time data processing.</li>
            <li>Developed point-cloud preprocessing and detection algorithms for accurate fall detection in clinical environments.</li>
            <li>Led product development from prototype to testing — including 3D-printed enclosures and regulatory-aligned device validation — ensuring reliability, durability, and healthcare compliance.</li>
            <li>Configured the Linux environment for headless operation and automated service management, ensuring reliable device uptime.</li>
            <li>Integrated the device with AWS IoT via MQTT for telemetry and remote management.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "Raspberry Pi", "mmWave Sensors", "AWS IoT", "MQTT", "Linux (headless)", "3D Printing", "Point-cloud Processing"]} />
        </section>
      </>
    ),
  },
  {
    id: "umn",
    company: "University of Minnesota",
    role: "Research Assistant · Minneapolis, MN",
    dates: "Jan 2025 – May 2025",
    logo: "/assets/University%20of%20Minnesota%20logo.jfif",
    summary: (
      <>
        Designed and fabricated a UAV-engine dynamometer test bench using rapid
        prototyping and embedded hardware to validate data-driven control
        algorithms. Tightened the data-collection workflow to improve
        repeatability of efficiency measurements.
      </>
    ),
    detail: (
      <>
        <DialogHeadLogo
          logo="/assets/University%20of%20Minnesota%20logo.jfif"
          title="University of Minnesota"
          role="Research Assistant · Minneapolis, MN"
          dates="Jan 2025 – May 2025"
        />
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Designed and fabricated a UAV-engine dynamometer test bench using rapid prototyping and embedded hardware to validate data-driven control algorithms.</li>
            <li>Improved the mechanical setup and data-collection workflow to increase repeatability and reliability of engine-efficiency measurements.</li>
            <li>Worked in a research lab environment, collaborating with graduate researchers on experimental setup and methodology.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["SolidWorks", "Embedded C", "MATLAB", "Rapid Prototyping", "DAQ"]} />
        </section>
      </>
    ),
  },
  {
    id: "kpmg",
    company: "KPMG",
    role: "Associate Analyst · Bangalore, India",
    dates: "Jul 2022 – Aug 2023",
    logo: "/assets/kpmg_logo.jfif",
    summary: (
      <>
        Analyzed large-scale trade data for Carrier Corp and Stellantis, surfacing
        $10.4M in cost savings via favorable tariff identification. Streamlined
        Python/VBA data pipelines and introduced a standardized reporting
        structure that cut process time by 15%.
      </>
    ),
    detail: (
      <>
        <DialogHeadLogo
          logo="/assets/kpmg_logo.jfif"
          title="KPMG"
          role="Associate Analyst · Bangalore, India"
          dates="Jul 2022 – Aug 2023"
        />
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Analyzed large-scale trade data for <strong>Carrier Corp</strong> and <strong>Stellantis</strong>, achieving <strong>$10.4M in cost savings</strong> by identifying favorable tariff rates and reducing import duties.</li>
            <li>Led a cross-functional initiative to streamline data pipelines using Python and Excel/VBA.</li>
            <li>Introduced a standardized reporting structure that reduced overall process time by <strong>15%</strong>.</li>
            <li>Partnered with stakeholders across trade, finance, and operations to translate data insights into actionable savings.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "Excel / VBA", "SQL", "Data Pipelines", "Stakeholder Management"]} />
        </section>
      </>
    ),
  },
  {
    id: "moog",
    company: "Moog Inc.",
    role: "Mechanical Engineer Intern · Bangalore, India",
    dates: "Sept 2021 – Dec 2021",
    logo: "/assets/Moog%20logo.jfif",
    summary: (
      <>
        Ran qualification &amp; acceptance testing on the Geared Rotary Motor for
        the Comac C919 aircraft. Built MATLAB-driven custom test paths and
        configured the inboard aileron servo endurance rig — improving test
        accuracy by 10%.
      </>
    ),
    detail: (
      <>
        <DialogHeadLogo
          logo="/assets/Moog%20logo.jfif"
          title="Moog Inc."
          role="Mechanical Engineer Intern · Bangalore, India"
          dates="Sept 2021 – Dec 2021"
        />
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Conducted rigorous Qualification &amp; Acceptance testing for the Geared Rotary Motor deployed in the <strong>Comac C919 aircraft</strong>.</li>
            <li>Built MATLAB-driven custom test paths for various rigs, streamlining testing and improving downstream data analysis.</li>
            <li>Managed execution of the Inboard Aileron Servo Control endurance test, configuring test equipment to deliver a <strong>10% improvement in test accuracy</strong>.</li>
            <li>Collaborated with senior engineers on aerospace-grade component validation and reporting.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["MATLAB", "Test Rig Configuration", "DAQ", "Aerospace Components"]} />
        </section>
      </>
    ),
  },
];

/* =========================================================
   Projects
   ========================================================= */

export type Project = {
  id: string;
  number: string;
  title: string;
  tags: string[];
  summary: React.ReactNode;
  thumbVariant: 1 | 2 | 3;
  image?: { src: string; alt: string };
  detail: React.ReactNode;
};

export const featuredProjects: Project[] = [
  {
    id: "dyno",
    number: "01",
    title: "UAV-Engine Dynamometer Test Bench",
    tags: ["Hardware", "Test Bench"],
    thumbVariant: 1,
    image: { src: "/assets/Test_bench_assembly_1.png", alt: "UAV-engine dynamometer test bench" },
    summary: (
      <>
        Designed and fabricated a dynamometer rig with rapid prototyping and
        embedded hardware to validate data-driven engine-control algorithms.
        Tightened the measurement workflow for repeatable efficiency data.
      </>
    ),
    detail: (
      <>
        <Carousel
          slides={[
            { type: "image", src: "/assets/Test_bench_assembly_1.png", alt: "UAV-engine dynamometer test bench — overall assembly view" },
            { type: "image", src: "/assets/Test_bench_assembly_2.png", alt: "UAV-engine dynamometer test bench — alternate assembly view" },
            { type: "video", src: "/assets/Test_bench_assembly_video.mp4", label: "Assembly walkthrough video" },
            { type: "video", src: "/assets/Test%20bench%20video%202.mp4", label: "Test bench secondary video" },
          ]}
        />
        <DialogHeadThumb variant={1} label="01" title="UAV-Engine Dynamometer Test Bench" tags={["Hardware", "Test Bench", "Research"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>Designed and built a UAV-engine dynamometer test bench at the University of Minnesota to validate data-driven control algorithms. End-to-end mechanical fabrication paired with embedded data acquisition for closed-loop engine experiments.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Designed a dynamometer test rig for UAV piston engines using rapid-prototyping techniques.</li>
            <li>Embedded hardware with microcontroller + DAQ for real-time engine measurements.</li>
            <li>Validated data-driven engine-control algorithms in closed-loop conditions.</li>
            <li>Tightened the mechanical setup and measurement workflow to maximize repeatability.</li>
            <li>Improved the reliability of engine-efficiency data feeding the control-algorithm research.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["SolidWorks", "Embedded C", "Microcontrollers", "DAQ", "MATLAB", "Rapid Prototyping"]} />
        </section>
      </>
    ),
  },
  {
    id: "mmwave",
    number: "02",
    title: "mmWave Fall-Detection Device",
    tags: ["Embedded", "IoT"],
    thumbVariant: 2,
    image: { src: "/assets/mmwave%20radar%20-%201.jpeg", alt: "mmWave radar fall-detection prototype" },
    summary: (
      <>
        End-to-end Python system on Raspberry Pi pairing mmWave sensors with
        point-cloud preprocessing for real-time fall detection. Headless Linux
        service management and AWS IoT/MQTT pipeline, validated through
        healthcare-aligned device testing.
      </>
    ),
    detail: (
      <>
        <Carousel
          slides={[
            { type: "image", src: "/assets/mmwave%20radar%20-%201.jpeg", alt: "mmWave radar fall-detection prototype" },
            { type: "image", src: "/assets/mmwave%20radar%20-%202.jpeg", alt: "mmWave radar fall-detection prototype — alternate view" },
          ]}
        />
        <DialogHeadThumb variant={2} label="02" title="mmWave Fall-Detection Device" tags={["Embedded", "IoT", "Healthcare"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>A production-targeted fall-detection device built at Ambient Intelligence using mmWave radar instead of cameras. Privacy-preserving real-time detection from raw point-cloud data, validated through healthcare-aligned testing — taken from prototype to deployable product.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Architected the end-to-end <strong>Python system software</strong> on Raspberry Pi.</li>
            <li>Built a point-cloud preprocessing pipeline tuned for mmWave radar input.</li>
            <li>Developed real-time fall-detection algorithms validated in clinical environments.</li>
            <li>Configured <strong>headless Linux</strong> with automated service management for uninterrupted device uptime.</li>
            <li>Integrated with <strong>AWS IoT via MQTT</strong> for telemetry, alerts, and remote management.</li>
            <li>Drove product development from prototype to validation, including 3D-printed enclosures.</li>
            <li>Healthcare-compliant device validation (durability, reliability, regulatory alignment).</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "Raspberry Pi", "mmWave Radar", "Point-cloud Processing", "Linux (headless)", "AWS IoT", "MQTT", "3D Printing"]} />
        </section>
      </>
    ),
  },
  {
    id: "haptic",
    number: "03",
    title: "HapticTelegraph: Variable-Delay Surgical Teleoperation",
    tags: ["Robotics", "Haptics"],
    thumbVariant: 3,
    image: { src: "/assets/HapticTelegraph3Dmodel.png", alt: "Haptic Telegraph 3D model" },
    summary: (
      <>
        Built a haptic teleoperation system with simulated 0–500 ms delay variance
        using Python and embedded hardware. Across 30+ trials in 5 conditions,
        found task failures jumped 67% at 200 ms variance — mapping critical
        thresholds for precision teleoperation.
      </>
    ),
    detail: (
      <>
        <DialogHero src="/assets/HapticTelegraph3Dmodel.png" alt="3D model of the Haptic Telegraph rig — two servos, two load cells, and a Teensy microcontroller" />
        <DialogHeadThumb variant={3} label="03" title="HapticTelegraph: Variable-Delay Surgical Teleoperation" tags={["Robotics", "Haptics", "Research"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>A research project (ME 8284 — Intermediate Robotics with Medical Applications, University of Minnesota) investigating how variable network delay impacts surgical teleoperation. A hardware-in-the-loop platform simulates 0–500 ms latency variance to map the failure thresholds of a haptic surgical interface — informing safety margins for next-generation telesurgery systems.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Embedded lead — built the Teensy 4.0 firmware pipeline that read both load cells and drove the two hobby servos in real time.</li>
            <li>Implemented the UDP loopback link in Python, injecting Gaussian-sampled latency to simulate unstable internet connections.</li>
            <li>Simulated <strong>0–500 ms</strong> variable network delay across the operator–manipulator link.</li>
            <li>Ran <strong>30+ trials across 5 latency conditions</strong> to evaluate operator response, force smoothness, and task success.</li>
            <li>Found task failures jumped <strong>67%</strong> at 200 ms variance — quantifying the failure cliff for precision teleoperation.</li>
            <li>Completion time peaked at <strong>0.3 s latency</strong>, identifying the operating envelope for surgical-grade workflows.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "C / Arduino", "Teensy 4.0", "HX711 Load Cells", "UDP / Serial", "Real-time Control", "Statistical Analysis"]} />
        </section>
        <GithubLink href="https://github.com/ceidahl98/ME8284GroupEmber" label="Source code on GitHub" />
      </>
    ),
  },
];

export const otherProjects: Project[] = [
  {
    id: "multirobot",
    number: "04",
    title: "Multi-Robot Warehouse Simulation",
    tags: ["ROS", "Computer Vision"],
    thumbVariant: 1,
    summary: (
      <>
        ROS + Gazebo simulation combining YOLO v5 for perception, DH parameters
        and inverse kinematics for pick-and-place, and Anytime Repairing A* with
        Model Predictive Control for pallet-truck navigation — hitting a 78%
        navigation success rate.
      </>
    ),
    detail: (
      <>
        <DialogHeadThumb variant={1} label="04" title="Multi-Robot Warehouse Simulation" tags={["ROS", "Computer Vision", "Path Planning"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>A ROS + Gazebo simulation of a warehouse staffed by collaborative robots. Combines computer vision, manipulator control, and motion planning to handle pick-and-place tasks alongside autonomous pallet-truck navigation.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Built a custom simulation package in <strong>ROS</strong> with Gazebo physics for multi-robot scenarios.</li>
            <li>Integrated <strong>YOLO v5</strong> for real-time object perception of warehouse parts.</li>
            <li>Used <strong>DH parameters</strong> for forward kinematics and Inverse Kinematics solvers for pick-and-place manipulation.</li>
            <li>Combined <strong>Anytime Repairing A*</strong> with Model Predictive Control for pallet-truck navigation under dynamic constraints.</li>
            <li>Achieved a <strong>78% navigation success rate</strong> across simulated layouts and obstacle configurations.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["ROS", "Gazebo", "YOLO v5", "OpenCV", "Python", "Inverse Kinematics", "MPC", "A* Planner"]} />
        </section>
      </>
    ),
  },
  {
    id: "segmentation",
    number: "05",
    title: "Semantic Segmentation for Urban Driving",
    tags: ["Deep Learning", "TensorFlow"],
    thumbVariant: 2,
    image: { src: "/assets/Cityscapes%20segmented%20images.png", alt: "Semantic segmentation output on Cityscapes dataset" },
    summary: (
      <>
        Tuned the FasterSeg architecture and augmented the Cityscapes dataset for
        autonomous-driving scene parsing — shrinking training time by 15% while
        reaching a 69.78 mean Intersection-over-Union (mIoU).
      </>
    ),
    detail: (
      <>
        <DialogHero src="/assets/Cityscapes%20segmented%20images.png" alt="FasterSeg semantic segmentation output on the Cityscapes dataset" />
        <DialogHeadThumb variant={2} label="05" title="Semantic Segmentation for Urban Driving" tags={["Deep Learning", "Computer Vision", "Autonomous Driving"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>Optimized the <strong>FasterSeg</strong> architecture for semantic segmentation of urban driving scenes. Tuned the model and augmented the Cityscapes dataset to improve both training efficiency and accuracy for autonomous-driving perception.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Studied and optimized the FasterSeg architecture for autonomous-driving scene parsing.</li>
            <li>Augmented the <strong>Cityscapes dataset</strong> with custom samples to improve coverage on urban edge cases.</li>
            <li>Implemented and trained the model in <strong>TensorFlow</strong> with hyper-parameter tuning of the training pipeline.</li>
            <li>Reduced training period by <strong>15%</strong> while improving categorical accuracy.</li>
            <li>Achieved a mean Intersection-over-Union (<strong>mIoU = 69.78</strong>) on the validation set.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["TensorFlow", "Python", "FasterSeg", "Cityscapes", "Data Augmentation", "GPU Training"]} />
        </section>
        <GithubLink href="https://github.com/BhushanRavikumar/FasterSeg-Implementation-trained-on-Cityscapes-dataset-Tensorflow-" label="Source code on GitHub" />
      </>
    ),
  },
  {
    id: "cfrp",
    number: "06",
    title: "CFRP Deployable Structure for LEO Satellites",
    tags: ["Aerospace", "ANSYS"],
    thumbVariant: 3,
    summary: (
      <>
        Researched CFRP materials, fabrication, and structural mechanics in ANSYS
        for the LEO environment. Designed a 3D-printed deployment mechanism for
        reliable, integrated satellite stowage and unfurling.
      </>
    ),
    detail: (
      <>
        <DialogHeadThumb variant={3} label="06" title="CFRP Deployable Structure for LEO Satellites" tags={["Aerospace", "FEA", "Materials"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>Bachelor&rsquo;s thesis at PES University researching deployable <strong>CFRP</strong> structures for low-earth-orbit satellites. Combined materials research, ANSYS structural analysis, and 3D-printed deployment mechanisms to meet the demands of the LEO environment.</p>
        </section>
        <section className="dialog-section">
          <h3>Highlights</h3>
          <ul>
            <li>Researched CFRP material properties, fabrication techniques, and structural mechanics.</li>
            <li>Performed <strong>ANSYS finite-element analysis</strong> to validate structural behavior under LEO conditions.</li>
            <li>Designed innovative deployment mechanisms with 3D-printed components for reliability.</li>
            <li>Ensured seamless integration with satellite platforms within strict stowage constraints.</li>
            <li>Met stringent space-environment requirements (vibration, thermal, vacuum considerations).</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["ANSYS", "SolidWorks", "CFRP Materials", "FEA", "3D Printing", "Aerospace Design"]} />
        </section>
      </>
    ),
  },
  {
    id: "jetpack",
    number: "07",
    title: "Advanced Control Strategies for Jetpack Joyride",
    tags: ["Control Systems", "Python"],
    thumbVariant: 1,
    summary: (
      <>
        Built a modified Jetpack Joyride in Pygame as a controls testbed and
        implemented LQR, Dynamic Programming, and Feedback Linearization with
        adaptive gains for vertical-motion tracking and real-time obstacle
        avoidance — analyzing trade-offs across tracking, control effort, and
        avoidance.
      </>
    ),
    detail: (
      <>
        <Carousel
          slides={[
            { type: "video", src: "/assets/Jetpack_LQR_control.mp4", label: "LQR controller demo" },
            { type: "video", src: "/assets/jetpack_dynamic_programming.mp4", label: "Dynamic Programming controller demo" },
            { type: "video", src: "/assets/jetpack_feedback_linearization.mp4", label: "Feedback Linearization controller demo" },
          ]}
        />
        <DialogHeadThumb variant={1} label="07" title="Advanced Control Strategies for Jetpack Joyride" tags={["Control Systems", "Python", "Research"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>Final project for <strong>ME 8281 — Advanced Control System Design</strong> at the University of Minnesota. Built a modified version of <em>Jetpack Joyride</em> in <strong>Pygame</strong> as a real-time controls testbed, then implemented and benchmarked three advanced controllers — <strong>LQR</strong>, <strong>Dynamic Programming</strong> (value iteration), and <strong>Feedback Linearization</strong> with adaptive gains — for vertical-motion tracking and obstacle avoidance under nonlinear, randomized conditions.</p>
        </section>
        <section className="dialog-section">
          <h3>System &amp; modeling</h3>
          <ul>
            <li>Modeled the player&rsquo;s vertical motion as a discrete-time second-order state-space system (gravity vs. binary jetpack thrust) running at <strong>60 fps</strong>.</li>
            <li>Built a shared obstacle-detection &amp; path-planning layer with a <strong>400-pixel look-ahead</strong> that emits a safe reference trajectory through randomly spawned horizontal/vertical lasers and tracking rockets — reused by all three controllers for fair comparison.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Controllers implemented</h3>
          <ul>
            <li><strong>LQR</strong> — solved the discrete algebraic Riccati equation via <code>scipy.linalg.solve_discrete_are</code> and tuned <em>Q</em>/<em>R</em> weights to balance position tracking against control effort. Resulted in smooth, predictable trajectory tracking with low computational cost.</li>
            <li><strong>Dynamic Programming</strong> — value iteration over a discretized state space (<strong>50 position bins &times; 30 velocity bins</strong>, 2 actions, &gamma; = 0.95) with a cost function combining tracking error, velocity penalty, control effort, and a large obstacle-proximity penalty. Delivered the strongest obstacle avoidance through multi-step look-ahead planning.</li>
            <li><strong>Feedback Linearization</strong> — collapsed the nonlinear dynamics into an equivalent linear system via a virtual control input, then closed the loop with a <strong>PD controller</strong> whose gains adapt with obstacle proximity. Added first-order control smoothing (&alpha; = 0.7) for clean actuation. Achieved the most precise tracking with adaptive responsiveness.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Comparative analysis</h3>
          <ul>
            <li>Benchmarked the three controllers across <strong>tracking accuracy</strong>, <strong>obstacle avoidance success</strong>, <strong>control effort/smoothness</strong>, <strong>computational cost</strong>, and <strong>adaptability</strong>.</li>
            <li>LQR &mdash; best smoothness, low compute, but limited responsiveness when obstacles demand large deviations from the reference.</li>
            <li>Dynamic Programming &mdash; best obstacle avoidance via look-ahead, at the cost of heavier compute and discretization-induced jitter.</li>
            <li>Feedback Linearization &mdash; best tracking precision plus on-the-fly adaptive gains; well-suited to systems that demand both accuracy and reactivity.</li>
            <li>Mapped each method&rsquo;s sweet spot to broader application areas (robotics, autonomous vehicles, human-machine interfaces).</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "Pygame", "NumPy", "SciPy", "State-space Modeling", "LQR", "Value Iteration / DP", "Feedback Linearization", "PD Control", "Real-time Systems"]} />
        </section>
        <GithubLink href="https://github.com/BhushanRavikumar/Advanced-Control-Strategies-for-JetPack-Joyride" label="Source code on GitHub" />
      </>
    ),
  },
  {
    id: "dpf",
    number: "08",
    title: "DPF & Biodiesel Emissions Study in Ricardo WAVE",
    tags: ["Powertrain", "Simulation"],
    thumbVariant: 2,
    image: { src: "/assets/Engine%20Model%20Ricardo%20WAVE.png", alt: "Kirloskar TV-1 engine model with DPF in Ricardo WAVE" },
    summary: (
      <>
        B.Tech capstone at PES University: built and validated a 1D Ricardo WAVE
        model of a Kirloskar TV-1 diesel engine to quantify how a Diesel
        Particulate Filter and FAME biodiesel blends affect CO, HC, and NOx —
        finding that DPF + B20 delivers the lowest combined emissions.
      </>
    ),
    detail: (
      <>
        <DialogHero src="/assets/Engine%20Model%20Ricardo%20WAVE.png" alt="Kirloskar TV-1 engine model with DPF in Ricardo WAVE" />
        <DialogHeadThumb variant={2} label="08" title="DPF & Biodiesel Emissions Study in Ricardo WAVE" tags={["Powertrain", "Simulation", "Research"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>B.Tech capstone (Phase II, 2021&ndash;22) at <strong>PES University, Department of Mechanical Engineering</strong>. Built a 1D gas-dynamics model of a <strong>Kirloskar TV-1</strong> single-cylinder diesel engine in <strong>Ricardo WAVE</strong>, then quantified how a <strong>Diesel Particulate Filter (DPF)</strong> and <strong>FAME biodiesel</strong> blends affect tailpipe emissions of CO, HC, and NOx &mdash; closing a literature gap by studying both interventions together. Work was co-authored into a paper with the project&rsquo;s faculty advisor.</p>
        </section>
        <section className="dialog-section">
          <h3>Engine model &amp; validation</h3>
          <ul>
            <li>Modeled the Kirloskar TV-1 in Ricardo WAVE from full manufacturer specs &mdash; <strong>5.2 kW (7 HP)</strong>, compression ratio <strong>17.5:1</strong>, bore &times; stroke <strong>87.5 mm &times; 110 mm</strong>, 1500 rpm, spray-guided injection at <strong>220 kgf/cm&sup2;</strong>, 23&deg; BTDC.</li>
            <li>Tuned manifold/duct geometry to avoid double-counting pressure losses (discharge coefficient = 1.0, friction multipliers = 0, collinear y-junctions) so port losses stayed within the cylinder-head model.</li>
            <li>Enabled <strong>passive scalars</strong> for NO, CO, and HC and configured molecular masses to track per-species emissions through the simulation.</li>
            <li>Validated the model against published experimental data (Suyambazhahan, Kirloskar TV-1 with diesel blends) &mdash; CO, HC, and NOx trends matched the experimental curves within expected simulation tolerances.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>DPF &amp; fuel modeling</h3>
          <ul>
            <li>Modeled the <strong>DPF</strong> as Complex Y-junction entry/exit cones plus a single DPF Duct brick &mdash; <strong>ceramic carbide substrate</strong>, <strong>600 cells/in&sup2;</strong>, 0.1016 mm wall thickness, wall heat-transfer coefficient = 5.</li>
            <li>Authored fuel data files for <strong>FAME</strong>, <strong>1,4-dioxane</strong>, diesel, and ethanol &mdash; chemical composition, entropy of formation, lower heating value, density, vapor-pressure profile, and specific-heat curve for each.</li>
            <li>Generated <strong>B5 &rarr; B20 biodiesel blends</strong> via the Ricardo WAVE command-line blending tool with fractional compositions of the component fuel files.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Findings</h3>
          <ul>
            <li><strong>DPF impact</strong> at 1500 rpm vs. unfiltered exhaust: <strong>CO &darr; 10.2%</strong>, <strong>HC &darr; 14.8%</strong>, <strong>NOx &darr; 63.4%</strong>.</li>
            <li><strong>Biodiesel impact</strong> per +5% FAME (B5 &rarr; B20): <strong>CO &darr; 4.2%</strong>, <strong>NOx &uarr; 3.2%</strong>, HC change negligible &mdash; explained by the extra fuel-bound oxygen driving more complete combustion (lowering CO/HC) while raising adiabatic flame temperature (driving thermal NOx).</li>
            <li>Brake thermal efficiency held flat across blends under idealized combustion conditions.</li>
            <li>Recommended <strong>DPF + B20</strong> as the lowest combined-emissions configuration; pure biodiesel alone is not the most cost-effective route once unmodified-engine wear and fuel cost are factored in.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Ricardo WAVE", "1D Gas Dynamics", "Diesel Engines", "DPF Modeling", "Biodiesel (FAME)", "Combustion", "Emissions Analysis", "BS6 Norms", "Powertrain"]} />
        </section>
      </>
    ),
  },
  {
    id: "pokemon",
    number: "09",
    title: "Pokemon Battle Simulator with Minimax & Alpha-Beta AI Agents",
    tags: ["Game AI", "Python"],
    thumbVariant: 3,
    summary: (
      <>
        Built a faithful turn-based Pokemon battle simulator in Python (800+
        Pokemon, 600+ moves, full 18×18 type chart) and pitted Minimax and
        Alpha-Beta search agents — with a multi-factor heuristic evaluator —
        against simpler greedy baselines to study trade-offs between search depth,
        pruning, and play strength.
      </>
    ),
    detail: (
      <>
        <DialogHeadThumb variant={3} label="09" title="Pokemon Battle Simulator with Minimax & Alpha-Beta AI Agents" tags={["Game AI", "Search", "Python"]} />
        <section className="dialog-section">
          <h3>Overview</h3>
          <p>Built a faithful turn-based Pokemon battle simulator from scratch in Python and used it as a sandbox for adversarial-search agents. Implemented <strong>Minimax</strong> and <strong>Alpha-Beta</strong> with a custom multi-factor heuristic evaluator, and benchmarked them against simpler greedy baselines to study how search depth, pruning, and evaluation quality translate into play strength.</p>
        </section>
        <section className="dialog-section">
          <h3>Game &amp; systems engineering</h3>
          <ul>
            <li>Modeled a stateful turn-based combat system with <code>Pokemon</code> and <code>Trainer</code> classes, tracking <strong>20+ per-Pokemon mutable fields</strong> (HP, six stat stages, accuracy stage, status enum, sleep / confusion / bad-poison counters, recharge / charge flags, curse, flinch).</li>
            <li>Implemented correct turn ordering using <strong>move priority first, then speed</strong> (with paralysis halving and stat-stage multipliers), with a 50/50 tiebreaker &mdash; matching main-series behavior.</li>
            <li>Handled <strong>withdraw-and-resend semantics</strong> on faint and on voluntary switch, including resetting volatile conditions and stat stages while preserving non-volatile status.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>AI &amp; search</h3>
          <ul>
            <li>Implemented <strong>Minimax</strong> over discrete move choices with depth-limited rollout and a custom evaluation function.</li>
            <li>Added <strong>Alpha-Beta pruning</strong> to the same search, cutting branches whose bounds dominate the running &alpha;/&beta; interval.</li>
            <li>Designed a <strong>multi-factor heuristic evaluator</strong> combining HP differential, projected damage, status differential, stat totals, fainted-count differential, type effectiveness up to four type interactions, and an anti-repeat penalty on the previously chosen move.</li>
            <li>Built two simpler baseline agents &mdash; max-base-power <em>&quot;Greedy&quot;</em> and max-expected-damage <em>&quot;Smart-Greedy&quot;</em> &mdash; to serve as benchmarks for the search-based agents.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Data modeling</h3>
          <ul>
            <li>Designed a <strong>JSON-driven content pipeline</strong>: <strong>800+ Pokemon</strong> (<code>pokemon.json</code>), <strong>600+ moves</strong> (<code>moves.json</code>), and the complete <strong>18&times;18 type chart</strong> with both offensive and defensive lookups (<code>types.json</code>).</li>
            <li>Maintained a <code>supported_moves.csv</code> registry tracking which move effects are explicitly handled vs. fall through to default damage-only behavior.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Python implementation</h3>
          <ul>
            <li>Used <code>enum.Enum</code> for status conditions, dictionaries as lookup tables for stat-stage and accuracy multipliers, and effect-ID lists as <strong>O(1) dispatch sets</strong> for grouping moves by behavior.</li>
            <li>Loaded all game data lazily from JSON in <code>__main__</code> to keep the simulator import-clean and unit-testable.</li>
          </ul>
        </section>
        <section className="dialog-section">
          <h3>Tech &amp; tools</h3>
          <Chips items={["Python", "Minimax", "Alpha-Beta Pruning", "Heuristic Search", "Game AI", "OOP", "Enums", "JSON", "CSV"]} />
        </section>
        <GithubLink href="https://github.com/BhushanRavikumar/Pokemon_Battle_sim" label="Source code on GitHub" />
      </>
    ),
  },
];
