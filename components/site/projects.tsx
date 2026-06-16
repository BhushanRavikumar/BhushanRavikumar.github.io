"use client";

import type { ReactNode } from "react";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import { useDialog } from "@/components/site/dialog-provider";
import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/lib/portfolio-data";

// Plain-text summaries for the carousel cards (Gallery4 descriptions are
// strings; the rich JSX summaries live in the detail modals).
const BLURBS: Record<string, string> = {
  dyno: "Designed and fabricated a dynamometer rig with rapid prototyping and embedded hardware to validate data-driven engine-control algorithms, tightening the workflow for repeatable efficiency data.",
  mmwave:
    "End-to-end Python system on Raspberry Pi pairing mmWave radar with point-cloud preprocessing for real-time, privacy-preserving fall detection — headless Linux service plus AWS IoT/MQTT.",
  haptic:
    "A haptic teleoperation rig with simulated 0–500 ms delay variance. Across 30+ trials, task failures jumped 67% at 200 ms variance, mapping the failure cliff for precision teleoperation.",
  multirobot:
    "ROS + Gazebo simulation combining YOLO v5 perception, inverse-kinematics pick-and-place, and Anytime Repairing A* with MPC navigation — reaching a 78% navigation success rate.",
  segmentation:
    "Tuned the FasterSeg architecture and augmented the Cityscapes dataset for autonomous-driving scene parsing — cutting training time 15% while reaching a 69.78 mIoU.",
  cfrp: "Researched CFRP materials and structural mechanics in ANSYS for the LEO environment, and designed a 3D-printed deployment mechanism for reliable satellite stowage and unfurling.",
  jetpack:
    "A modified Jetpack Joyride in Pygame as a controls testbed for LQR, Dynamic Programming, and Feedback Linearization controllers — benchmarking tracking, control effort, and avoidance.",
  dpf: "A 1D Ricardo WAVE model of a Kirloskar TV-1 diesel engine quantifying how a DPF and FAME biodiesel blends affect CO, HC, and NOx — finding DPF + B20 yields the lowest combined emissions.",
  pokemon:
    "A faithful turn-based Pokemon battle simulator (800+ Pokemon, 600+ moves) pitting Minimax and Alpha-Beta agents with a multi-factor heuristic against greedy baselines.",
};

// Fallback imagery for projects without a still image (videos-only or no media).
const FALLBACK_IMAGES: Record<string, string> = {
  multirobot:
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  cfrp: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  jetpack:
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  pokemon:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

function toItems(projects: Project[]): Gallery4Item[] {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    description: BLURBS[p.id] ?? "",
    href: "#projects",
    image: p.image?.src ?? FALLBACK_IMAGES[p.id] ?? "",
  }));
}

export function Projects() {
  const { openDialog } = useDialog();

  const detailById = new Map<string, ReactNode>(
    [...featuredProjects, ...otherProjects].map((p) => [p.id, p.detail]),
  );

  const onItemClick = (item: Gallery4Item) => {
    const detail = detailById.get(item.id);
    if (detail) openDialog(detail);
  };

  return (
    <section id="projects" style={{ scrollMarginTop: 90 }}>
      <Gallery4
        title="Featured Projects"
        description="Selected work across robotics, embedded systems, and test engineering. Tap a card for the full breakdown — highlights, media, and source."
        items={toItems(featuredProjects)}
        onItemClick={onItemClick}
      />
      <Gallery4
        title="Other Projects"
        description="More research and engineering projects spanning controls, computer vision, aerospace, powertrain simulation, and game AI."
        items={toItems(otherProjects)}
        onItemClick={onItemClick}
      />
    </section>
  );
}
