

export interface Project {
  id: number;
  figure: string;
  tagStyle: string;
  title: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    figure: 'FIG. 01',
    tagStyle: 'tag-red',
    title: 'Lumina Fashion',
    year: '2024',
    description: 'E-Commerce Design & Dev',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
    alt: 'Lumina Fashion - Plataforma de moda digital',
    link: '#'
  },
  {
    id: 2,
    figure: 'FIG. 02',
    tagStyle: 'tag-black',
    title: 'CachyOS System',
    year: '2023',
    description: 'Documentation & Branding',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    alt: 'CachyOS System - Documentación de sistema operativo',
    link: '#'
  },
  {
    id: 3,
    figure: 'FIG. 03',
    tagStyle: 'tag-paper',
    title: 'CachyOS System',
    year: '2023',
    description: 'Documentation & Branding',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    alt: 'CachyOS System - Documentación de sistema operativo',
    link: '#'
  }
];