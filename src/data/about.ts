// src/data/about.ts
// Datos de la sección "Sobre Mí"

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
  highlighted: boolean;
  special: boolean;
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
  // Título principal de la sección
  title: {
    label: 'Perfil',
    main: 'Lógica',
    conjunction: '&',
    subtitle: 'Magia.'
  },

  // Imagen de perfil
  image: {
    src: 'https://avatars.githubusercontent.com/u/222774338?s=400&u=6fc80ab46aa948d0bd080a3f5a1dfba21d1ae42a&v=4',
    alt: 'Espacio de trabajo creativo y minimalista',
    figure: 'Fig. 04',
    caption: 'Workspace'
  },

  // Biografía (párrafos)
  bio: [
    {
      text: 'Hola, soy Andrés. Mi trabajo habita en la intersección exacta donde el código estricto se encuentra con el diseño expresivo. No veo diferencia entre escribir un componente en React y diseñar su interfaz en Figma; ambos son actos de arquitectura.',
      hasDropCap: true // Letra capital en el primer párrafo
    },
    {
      text: 'Como usuario diario de <strong class="highlight">CachyOS</strong> y Linux, valoro la eficiencia. Traslado esa filosofía a la web: sitios rápidos, accesibles y brutalmente honestos.',
      hasDropCap: false
    }
  ],

  // Lista de servicios
  services: [
    'UI/UX Design',
    'Design Systems',
    'Frontend Dev',
    'Creative Direction'
  ],

  // Stack tecnológico
  techStack: [
    { name: 'React', highlighted: false, special: false },
    { name: 'Astro', highlighted: true, special: false }, // highlighted = fondo negro
    { name: 'Tailwind', highlighted: false, special: false },
    { name: 'TypeScript', highlighted: false, special: false },
    { name: 'Figma', highlighted: false, special: true }, // special = borde rojo
    { name: 'Linux', highlighted: false, special: false }
  ],

  // Cita final
  quote: {
    text: 'La simplicidad es la máxima sofisticación.',
    author: 'Leonardo da Vinci'
  }
};

// ============================================
// VARIANTES OPCIONALES - Para A/B Testing
// ============================================

export const aboutDataVariants = {
  // Versión más técnica
  technical: {
    ...aboutData,
    bio: [
      {
        text: 'Desarrollador full-stack con enfoque en arquitectura frontend. Especializado en crear sistemas de diseño escalables y componentes reutilizables que funcionan en producción.',
        hasDropCap: true
      },
      {
        text: 'Mi stack principal incluye <strong class="highlight">React</strong>, TypeScript y Tailwind. Creo en el código limpio, la documentación exhaustiva y las pruebas automatizadas.',
        hasDropCap: false
      }
    ]
  },

  // Versión más creativa
  creative: {
    ...aboutData,
    bio: [
      {
        text: 'Diseñador que programa y programador que diseña. Me fascina el punto donde la estética se encuentra con la funcionalidad, donde cada píxel tiene un propósito y cada línea de código cuenta una historia.',
        hasDropCap: true
      },
      {
        text: 'Inspirado por el diseño suizo, el brutalismo digital y la filosofía <strong class="highlight">UNIX</strong>. Creo interfaces que respiran, sistemas que escalan y experiencias que perduran.',
        hasDropCap: false
      }
    ]
  }
};

// ============================================
// HELPERS - Funciones Auxiliares
// ============================================

/**
 * Obtiene los items del tech stack destacados
 */
export function getFeaturedTech(): TechItem[] {
  return aboutData.techStack.filter(tech => tech.highlighted || tech.special);
}

/**
 * Cuenta total de tecnologías
 */
export function getTechCount(): number {
  return aboutData.techStack.length;
}

/**
 * Obtiene servicios como string separado por comas
 */
export function getServicesString(): string {
  return aboutData.services.join(', ');
}

/**
 * Obtiene bio completa como texto plano (sin HTML)
 */
export function getPlainBio(): string {
  return aboutData.bio
    .map(p => p.text.replace(/<[^>]*>/g, ''))
    .join(' ');
}