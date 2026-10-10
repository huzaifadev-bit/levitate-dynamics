export interface PlatformSpec {
  category: string;
  value: string;
  description: string;
}

export interface PlatformCapability {
  title: string;
  description: string;
}

export interface PlatformMission {
  title: string;
  context: string;
  impact: string;
}

export interface Platform {
  slug: string;
  name: string;
  designation: string;
  badge: string;
  headline: string;
  tagline: string;
  summary: string;
  image: string;
  overview: string[];
  capabilities: PlatformCapability[];
  specifications: PlatformSpec[];
  missions: PlatformMission[];
  technology: {
    title: string;
    description: string;
  }[];
}

export const HAPS_PLATFORM: Platform = {
  slug: "haps",
  name: "LEVITATE HAPS",
  designation: "High-Altitude Pseudo-Satellite / Perpetual Loiter",
  badge: "FLAGSHIP AIRCRAFT",
  headline: "Perpetual Stratospheric Loiter.",
  tagline: "A long-endurance high-altitude platform designed for persistent aerial intelligence, communication, surveillance, and remote sensing applications.",
  summary: "A long-endurance high-altitude platform designed for persistent aerial intelligence, communication, surveillance, and remote sensing applications.",
  image: "/haps-aircraft.jpg",
  overview: [
    "Levitate Dynamics' flagship sovereign High Altitude Pseudo-Satellite (HAPS) operates in the stratosphere — high above civilian air traffic, adverse tropospheric weather fronts, and jet-stream turbulence.",
    "Engineered with an ultra-high aspect ratio carbon-composite airframe and integrated solar harvesting arrays, the platform generates daylight energy to power high-efficiency brushless propulsion while charging onboard energy storage for continuous station-keeping.",
    "Featuring standardized quick-swap modular payload bays, the aircraft delivers persistent intelligence, surveillance, reconnaissance (ISR), sovereign telecommunications, and maritime domain awareness."
  ],
  capabilities: [
    {
      title: "Perpetual Stratospheric Flight",
      description: "Optimized solar energy harvesting and onboard storage enable continuous day-night station-keeping without refueling."
    },
    {
      title: "Stratospheric Stability",
      description: "Operates in the low-wind stratospheric corridor, maintaining autonomous station-keeping over designated coordinates."
    },
    {
      title: "Autonomous Flight Software",
      description: "Proprietary real-time software manages dynamic energy balancing, wind vector compensation, and fail-safe recovery protocols."
    },
    {
      title: "Standardized Modular Payloads",
      description: "Quick-swap 8 kg payload bays with standardized interfaces support EO/IR sensors, communications arrays, and radar."
    }
  ],
  specifications: [
    { category: "Wingspan", value: "~24 m", description: "Fixed-wing HAPS class; ultra-high aspect ratio carbon-composite airframe." },
    { category: "Max Takeoff Weight", value: "~110 – 120 kg", description: "Total mass including composite airframe, payload, and power architecture." },
    { category: "Cruise Altitude", value: "59,000 – 72,000 ft", description: "Stratospheric cruise corridor above weather storms and commercial air traffic." },
    { category: "Minimum Endurance", value: "72+ hours", description: "Solar-augmented perpetual flight with continuous day/night recharge." },
    { category: "Cruise Speed", value: "~20 – 35 km/h", description: "Mission-dependent stratospheric loiter speed for persistent coverage." },
    { category: "Payload Capacity", value: "Up to ~12 kg", description: "Modular dual-sensor bay designed for hyperspectral and EO/IR imaging systems." },
    { category: "Power System", value: "Solar + Li-ion", description: "Upper-wing solar arrays paired with high-density battery energy storage." },
    { category: "Comms Range", value: "BVLOS Capable", description: "Beyond Visual Line of Sight via satellite and stratospheric mesh relay." },
    { category: "Radar Signature", value: "Low-RCS", description: "Stealth composite airframe engineered for sensitive defense operations." }
  ],
  missions: [
    {
      title: "Border & Sovereign Defense",
      context: "Continuous 24/7 observation along international frontiers without orbital revisit gaps or line-of-sight radar obstructions.",
      impact: "Provides early warning and persistent live high-definition optical/thermal feeds directly to ground operational commands."
    },
    {
      title: "Telecommunications & 5G Relay",
      context: "Airborne pseudo-orbital cell tower projecting up to 40,000 km² broadband and emergency tactical coverage.",
      impact: "Delivers low-latency (<10ms) connectivity directly to standard user handsets and defense radios in remote regions."
    },
    {
      title: "Maritime Domain Awareness",
      context: "Expansive oceanic surveillance tracking non-transponding dark vessels, shipping choke points, and Exclusive Economic Zones.",
      impact: "Protects sovereign maritime borders across expansive water envelopes without requiring expensive naval vessel patrols."
    },
    {
      title: "Disaster Reconnaissance & Crisis Response",
      context: "Rapid deployment over disaster zones affected by cyclones, earthquakes, or floods where ground communications have failed.",
      impact: "Enables immediate real-time situational mapping and emergency voice/data channels for first-response units."
    }
  ],
  technology: [
    {
      title: "Aero-Structural Carbon Composites",
      description: "Ultra-thin carbon-fiber laminates formulated to withstand severe ultraviolet radiation and extreme thermal cycling (-75°C to +45°C)."
    },
    {
      title: "Autonomous Energy Balance Management",
      description: "Intelligent micro-controllers optimize flight altitude, bank angles, and loiter trajectories to maximize solar harvesting angles."
    }
  ]
};

export const PLATFORMS: Platform[] = [HAPS_PLATFORM];
