/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} icon
 * @property {string} color
 */

/**
 * @typedef {Object} SkillGroup
 * @property {string} titleKey
 * @property {Skill[]} items
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  { titleKey: "skills.group.languages", items: [
    { name: "JavaScript", icon: "simple-icons:javascript", color: "#f7df1e" },
    { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178c6" },
    { name: "Rust", icon: "simple-icons:rust", color: "#ffffff" },
    { name: "Go", icon: "simple-icons:go", color: "#00add8" },
    { name: "Python", icon: "simple-icons:python", color: "#3776ab" },
    { name: "Dart", icon: "simple-icons:dart", color: "#0175c2" },
  ]},
  { titleKey: "skills.group.frontend", items: [
    { name: "Vue", icon: "simple-icons:vuedotjs", color: "#42b883" },
    { name: "Nuxt", icon: "simple-icons:nuxt", color: "#00dc82" },
    { name: "React", icon: "simple-icons:react", color: "#61dafb" },
    { name: "Astro", icon: "simple-icons:astro", color: "#ffffff" },
    { name: "Tailwind", icon: "simple-icons:tailwindcss", color: "#38bdf8" },
  ]},
  { titleKey: "skills.group.backend", items: [
    { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#5fa04e" },
    { name: "Bun", icon: "simple-icons:bun", color: "#fbf0df" },
    { name: "Nest.js", icon: "simple-icons:nestjs", color: "#e0234e" },
    { name: "Gin", icon: "simple-icons:gin", color: "#008ecf" },
    { name: "gRPC", icon: "lucide:network", color: "#94e2d5" },
  ]},
  { titleKey: "skills.group.data", items: [
    { name: "PostgreSQL", icon: "simple-icons:postgresql", color: "#4169e1" },
    { name: "PostGIS", icon: "lucide:database", color: "#94e2d5" },
    { name: "Redis", icon: "simple-icons:redis", color: "#ff4438" },
    { name: "Prisma", icon: "simple-icons:prisma", color: "#ffffff" },
  ]},
  { titleKey: "skills.group.crossplatform", items: [
    { name: "Flutter", icon: "simple-icons:flutter", color: "#02569b" },
    { name: "Tauri", icon: "simple-icons:tauri", color: "#ffc131" },
    { name: "Electron", icon: "simple-icons:electron", color: "#47848f" },
  ]},
  { titleKey: "skills.group.geo", items: [
    { name: "Leaflet", icon: "simple-icons:leaflet", color: "#199900" },
    { name: "OpenLayers", icon: "lucide:layers", color: "#94e2d5" },
    { name: "Mapbox", icon: "simple-icons:mapbox", color: "#4264fb" },
    { name: "GeoServer", icon: "lucide:server", color: "#94e2d5" },
  ]},
  { titleKey: "skills.group.devops", items: [
    { name: "Docker", icon: "simple-icons:docker", color: "#2496ed" },
    { name: "Kubernetes", icon: "simple-icons:kubernetes", color: "#326ce5" },
    { name: "Helm", icon: "simple-icons:helm", color: "#4f9fd6" },
    { name: "ArgoCD", icon: "simple-icons:argo", color: "#ef7b4d" },
    { name: "GitHub Actions", icon: "simple-icons:githubactions", color: "#2088ff" },
    { name: "Hetzner", icon: "simple-icons:hetzner", color: "#d50c2d" },
  ]},
  { titleKey: "skills.group.security", items: [
    { name: "OAuth", icon: "lucide:key-round", color: "#94e2d5" },
    { name: "Keycloak", icon: "simple-icons:keycloak", color: "#ffffff" },
    { name: "JWT", icon: "simple-icons:jsonwebtokens", color: "#ffffff" },
  ]},
];
