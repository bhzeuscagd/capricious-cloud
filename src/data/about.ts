// src/data/about.ts
// Datos de la sección "Sobre Mí" - Versión Full Stack / Product Designer

export interface AboutTitle {
  label: string;
  main: string;
  conjunction: string;
  subtitle: string;
}

export interface AboutImage {
  src: string;
  alt: string;
  figure: string;
  caption: string;
}

export interface BioParagraph {
  text: string;
  hasDropCap: boolean;
}

export interface TechItem {
  name: string;
  highlighted: boolean; // Para destacar tu tecnología principal (Astro)
  special: boolean;     // Para destacar herramientas de diseño (Figma)
}

export interface Quote {
  text: string;
  author: string;
}

export interface AboutData {
  title: AboutTitle;
  image: AboutImage;
  bio: BioParagraph[];
  services: string[];
  techStack: TechItem[];
  quote: Quote;
}

// ============================================
// ABOUT DATA - Configuración Principal
// ============================================

export const aboutData: AboutData = {
  // Título: Refleja el equilibrio entre Código (Frontend/Back) y Visual (UI)
  title: {
    label: 'Perfil',
    main: 'Logica',
    conjunction: '&',
    subtitle: 'Magia.'
  },

  // Imagen de perfil
  image: {
    src: 'https://avatars.githubusercontent.com/u/222774338?s=400&u=6fc80ab46aa948d0bd080a3f5a1dfba21d1ae42a&v=4',
    alt: 'Setup de desarrollo minimalista con Linux',
    figure: 'Fig. 01',
    caption: 'Dev Environment'
  },

  // Biografía: Aquí unimos todas tus habilidades en una narrativa coherente
  bio: [
    {
      text: 'Hola, soy Celso. Desarrollo soluciones web completas, entendiendo que una web profesional nace en el diseño y vive en el servidor. Mi flujo de trabajo conecta la creatividad de <strong>Figma</strong> con la lógica robusta de <strong>PHP</strong> y bases de datos.',
      hasDropCap: true
    },
    {
      text: 'Me especializo en construir interfaces modernas y rápidas usando <strong class="highlight">Astro</strong> y React. No solo maqueto; arquitecto la experiencia completa para que sea visualmente impactante y técnicamente escalable.',
      hasDropCap: false
    }
  ],

  // Lista de servicios: Cubre todo lo que pediste
  services: [
    'Web Development',    // Engloba todo
    'UI/UX Design',       // Figma
    'Database Arch',      // SQL/DB
    'Full Stack Logic'    // PHP + JS
  ],

  // Stack tecnológico: Lo más importante primero
  techStack: [
    { name: 'Astro', highlighted: true, special: false },   // Tu fuerte actual
    { name: 'React', highlighted: false, special: false },  // Estándar de industria
    { name: 'Figma', highlighted: false, special: true },   // Tu lado de diseño (borde rojo)
    { name: 'PHP', highlighted: false, special: false },    // Backend clásico/robusto
    { name: 'SQL', highlighted: false, special: false },    // Bases de datos
    { name: 'Linux', highlighted: false, special: false }   // Tu sistema base
  ],

  // Cita: Enfocada en la funcionalidad (Steve Jobs es un clásico para esto)
  quote: {
    text: 'El diseño no es solo cómo se ve y cómo se siente. El diseño es cómo funciona.',
    author: 'Steve Jobs'
  }
};

// ============================================
// VARIANTES OPCIONALES - Estrategia
// ============================================

export const aboutDataVariants = {
  // Versión "Ingeniero": Enfatiza PHP, Datos y Rendimiento
  technical: {
    ...aboutData,
    title: { label: 'Rol', main: 'System', conjunction: '&', subtitle: 'Web.' },
    bio: [
      {
        text: 'Desarrollador web enfocado en rendimiento y estructura de datos. Combino la velocidad del frontend moderno con la estabilidad de gestores de base de datos relacionales.',
        hasDropCap: true
      },
      {
        text: 'Desde consultas <strong>SQL</strong> optimizadas hasta hidratación parcial en <strong class="highlight">Astro</strong>. Mi objetivo es crear aplicaciones web seguras, rápidas y fáciles de mantener.',
        hasDropCap: false
      }
    ]
  },

  // Versión "Visual": Enfatiza Figma, UI y UX
  creative: {
    ...aboutData,
    title: { label: 'Rol', main: 'Pixel', conjunction: '&', subtitle: 'Code.' },
    bio: [
      {
        text: 'Transformo prototipos de Figma en código vivo. Mi proceso borra la línea entre diseñador y desarrollador, asegurando que la visión visual llegue intacta al navegador.',
        hasDropCap: true
      },
      {
        text: 'Creo interfaces responsivas y accesibles. Uso la tecnología no como un fin, sino como una herramienta para contar historias visuales a través de la web.',
        hasDropCap: false
      }
    ]
  }
};

// ============================================
// HELPERS - Funciones Auxiliares (Sin cambios)
// ============================================

export function getFeaturedTech(): TechItem[] {
  return aboutData.techStack.filter(tech => tech.highlighted || tech.special);
}

export function getTechCount(): number {
  return aboutData.techStack.length;
}

export function getServicesString(): string {
  return aboutData.services.join(', ');
}

export function getPlainBio(): string {
  return aboutData.bio
    .map(p => p.text.replace(/<[^>]*>/g, ''))
    .join(' ');
}