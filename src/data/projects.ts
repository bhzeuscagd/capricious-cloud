// data/projects.js
// Datos de proyectos con información extraída de GitHub

export const projects = [
  {
    id: 1,
    figure: 'FIG. 01',
    title: 'CronoAnime',
    year: '2024',
    description: 'PWA para organizar y seguir series de anime con calendarios personalizados, registro de episodios y notificaciones push.',
    alt: 'Captura de pantalla de CronoAnime mostrando calendario de series',
    image: '../public/images/projects/CronoSeries.webp',
    tagStyle: 'tag-red',
    
    // Links
    demoUrl: 'https://cronoanime.vercel.app', // Cambiar cuando despliegues
    githubUrl: 'https://github.com/bhzeuscagd/CronoAnime',
    
    // Tech stack
    stack: ['JavaScript', 'PWA', 'Service Workers', 'LocalStorage API'],
    
    // Features destacados
    features: [
      'Calendario personalizado de series',
      'Registro de episodios vistos',
      'Notificaciones push',
      'Funciona offline (PWA)'
    ]
  },
  
  {
    id: 2,
    figure: 'FIG. 02',
    title: 'Space Project',
    year: '2024',
    description: 'Página web espacial construida con Astro, optimizada para rendimiento y SEO con diseño moderno y responsivo.',
    alt: 'Vista del proyecto Space con diseño espacial',
    image: '../public/images/projects/space.webp',
    tagStyle: 'tag-black',
    
    demoUrl: 'https://space-project.vercel.app',
    githubUrl: 'https://github.com/bhzeuscagd/space-project',
    
    stack: ['Astro', 'CSS3', 'JavaScript'],
    
    features: [
      'Framework Astro 4.0+',
      'Optimización de imágenes',
      'SEO optimizado',
      'Diseño responsivo'
    ]
  },
  
  {
    id: 3,
    figure: 'FIG. 03',
    title: 'Conference Ticket Generator',
    year: '2024',
    description: 'Generador interactivo de boletos para conferencias con upload de fotos y previsualización en tiempo real.',
    alt: 'Interfaz del generador de tickets',
    image: '../public/images/projects/tickets.webp',
    tagStyle: 'tag-paper',
    
    demoUrl: 'https://conference-ticket-gen.vercel.app',
    githubUrl: 'https://github.com/bhzeuscagd/conference-ticket-generator',
    
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    
    features: [
      'Upload de imágenes',
      'Previsualización en tiempo real',
      'Diseño personalizable',
      'Exportación de ticket'
    ]
  },
  
  {
    id: 4,
    figure: 'FIG. 04',
    title: 'Capricious Cloud',
    year: '2024',
    description: 'Sitio web minimalista construido con Astro, enfocado en performance y experiencia de usuario fluida.',
    alt: 'Diseño minimalista de Capricious Cloud',
    image: '../public/images/projects/portfolio.webp',
    tagStyle: 'tag-black',
    
    demoUrl: 'https://capricious-cloud.vercel.app',
    githubUrl: 'https://github.com/bhzeuscagd/capricious-cloud',
    
    stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
    
    features: [
      'Arquitectura de componentes',
      'Fast Refresh',
      'Static Site Generation',
      'TypeScript support'
    ]
  },
  
  {
    id: 5,
    figure: 'FIG. 05',
    title: 'Blog Preview Card',
    year: '2024',
    description: 'Componente de tarjeta de blog con HTML semántico y CSS moderno. Challenge de Frontend Mentor.',
    alt: 'Tarjeta de preview de blog',
    image: '../public/images/projects/card.webp',
    tagStyle: 'tag-paper',
    
    demoUrl: 'https://blog-preview-card.vercel.app',
    githubUrl: 'https://github.com/bhzeuscagd/blog-preview-card-main',
    
    stack: ['HTML5', 'CSS3', 'Flexbox'],
    
    features: [
      'HTML semántico',
      'CSS Grid y Flexbox',
      'Responsive design',
      'Accesibilidad WCAG'
    ]
  }
];

// Función helper para generar datos de proyecto desde GitHub README
// Puedes usar esto para actualizar automáticamente desde la API de GitHub
export async function fetchProjectData(username: string, repoName: string) {
  try {
    // Obtener info del repositorio
    const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    const repoData = await repoResponse.json();
    
    // Obtener README
    const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
      headers: { 'Accept': 'application/vnd.github.v3.raw' }
    });
    const readmeContent = await readmeResponse.text();
    
    return {
      title: repoData.name,
      description: repoData.description || 'Sin descripción',
      stars: repoData.stargazers_count,
      language: repoData.language,
      topics: repoData.topics || [],
      lastUpdate: repoData.updated_at,
      readme: readmeContent
    };
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}