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
    { category: "Wingspan", value: "24 m", description: "Ultra-lightweight high-aspect-ratio carbon composite airframe." },
    { category: "Payload Capacity", value: "8 kg", description: "Standardized quick-swap modular payload bay for persistent sensing and communications." }
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

export interface PlatformFamilyMember {
  name: string;
  tagline: string;
  description: string;
  role: string;
  image: string;
}

export const PLATFORM_FAMILY: PlatformFamilyMember[] = [
  {
    name: "GARUDA",
    tagline: "Persistent Sovereign Loiter",
    description: "Flagship solar-electric stratospheric platform engineered for continuous long-duration observation and strategic atmospheric monitoring.",
    role: "STRATOSPHERIC PERSISTENCE",
    image: "/haps-aircraft.jpg",
  },
  {
    name: "PUSHPAK",
    tagline: "Stratospheric Communications Node",
    description: "Airborne pseudo-satellite relay bridging 5G broadband connectivity and tactical mesh communications across vast regional footprints.",
    role: "TELECOM & SECURE RELAY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBelNbIbGWGsaPKAC2IGDyNuLQtaEKLlRpr2KNcantqsoa4dBIhtvS7_uNdqOI6ctB3diW4Bha2LqpyVAI430iYUh8S7iIAfRqeBaj9yFZTz-avylorSIc1L6b5yTNZbZjH9jmnPI8Al_U7iLzpHZOcdiL6QOrbHKcaALaW345puD2kZhmNpo9Lrq0bQ52S0s--XS5EKYvvdWCmkSBiQTTXaCLx9a1KS9zI-lUjdA8AZ0U57emaYBIVY_WAVWKLWoBgZyUfPeP6qeQ",
  },
  {
    name: "VAYU",
    tagline: "High-Resolution Earth Observation",
    description: "Persistent multi-spectral optical and thermal sensing platform delivering real-time aerial intelligence along critical frontiers.",
    role: "PERSISTENT ISR & SENSING",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IXBvpQW5iJvY_MSLP_JsPeBE1c1YpPNEnqVsYmJ6iXl8zwqXxIxJG-SgxV0VoE3WnuGKmX7x7EvwtrPjKVgaL4kwGv-XzuVjf0Y4y0gk8DvgB51r8ATkDxkHsX7DqsQ2EwG7RmpUBBMpnUPHnYAQHZndrqV3U4gL_MDl5qsG38-nVEi3Bu8So3UWYgBfcMzh6hpDLaneIPRhXnCgiF10WHtx44sE2HxaLfM5EcrjcojDk3vjimbKUu5XxwMe2H5j6STQbjGq_FQ",
  },
  {
    name: "VARUNA",
    tagline: "Maritime Domain Awareness",
    description: "Wide-area maritime surveillance platform tracking open-ocean corridors, dark vessel incursions, and Exclusive Economic Zones.",
    role: "MARITIME SECURITY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCScxT3-_XFQGmnhXU0CPidEG810ep51gMgTGQvvvhicx7O0YHpTQNca49CmfplUpQ4V28YoXTsuHseUdjoFY7s_2WtETfSMRx4fOwLdvEkbUHCV-X2N70C4cLhxKw5PfYg9rtvVYXdEzvbbw-Ou9u3EPjrCEuQ2NIFQbPV6eN8zzI81NgynDxCgqa7KI-Xe6w34ogGsSBbThSECwN-sLVnTqfANWW_jT_0T_kGzTHrNOjNT5of9QFwV9kgk-PsvYzYuBj5VKV2cf0",
  },
  {
    name: "MARUT",
    tagline: "Rapid Tactical Surge Platform",
    description: "Fast-mobilizing autonomous aerial platform designed for tactical crisis surge, dynamic situational awareness, and disaster relief.",
    role: "TACTICAL SURGE & CRISIS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Wtrfa8obxadyVdEaTn9OF3ZRf__6ta1ex9YQIXo-ERLQf_EGyndwn84VArDq-ESpbRdchohsZlFk3oTlincxlFqgKSvWlQ2zVS0Ky6mL97f_zYK6fPEqJh5PgNyvHWFjjW0fJ2j9TdkQMm6nTJW5pA-Kn9r9h5elg9L1tP5ei_f9D7og8u3ElJ6lIk_shVf_2Q4iCnk8ZThNQTTmMgHW03rcdtig6xowKQz1fSjQDQg6-1tK9tvKHRcNXJZH27vLy3FCO5onIxE",
  },
];

export const PLATFORMS: Platform[] = [HAPS_PLATFORM];
