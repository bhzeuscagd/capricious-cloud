export interface Experience {
  period: string;
  datetime: string;
  title: string;
  company: string;
  location: string;
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    period: 'Actualidad',
    datetime: '2024-01',
    title: 'Frontend Developer Freelance',
    company: 'Independiente',
    location: 'Remoto / Colombia',
    isCurrent: true
    // Justificación: Engloba todo tu trabajo actual y aprendizaje autodidacta.
  },
  {
    period: 'Late 2024',
    datetime: '2024-11',
    title: 'Lead UI Engineer (Astro)',
    company: 'Project: Ticket Generator',
    location: 'GitHub',
    isCurrent: false
    // Justificación: Tu proyecto del generador de tickets. Suena técnico y específico.
  },
  {
    period: '2024',
    datetime: '2024-08',
    title: 'Open Source Contributor',
    company: 'Linux / Hyprland Configs',
    location: 'Open Source',
    isCurrent: false
    // Justificación: Tu experiencia configurando Hyprland demuestra dominio de sistemas y scripting.
  },
  {
    period: '2024',
    datetime: '2024-05',
    title: 'Game UI & Asset Developer',
    company: 'Personal Game Projects',
    location: 'Unity / Cocos',
    isCurrent: false
    // Justificación: Tus experimentos con Unity/Cocos y extracción de assets demuestran lógica compleja.
  },
  {
    period: '2023 - 2024',
    datetime: '2023-12',
    title: 'Creative Designer & Illustrator',
    company: 'Personal Studio',
    location: 'Remoto',
    isCurrent: false
    // Justificación: Tu Manhwa y arte. Para un Frontend, tener ojo de diseñador es un gran plus.
  },
  {
    period: '2022 - 2023',
    datetime: '2022-01',
    title: 'Junior Web Developer (Training)',
    company: 'Self-Taught / Bootcamps',
    location: 'Remoto',
    isCurrent: false
    // Justificación: Muestra tu periodo de formación intensiva en HTML/CSS/JS.
  }
];