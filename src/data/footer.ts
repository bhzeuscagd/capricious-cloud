// src/data/footer.ts
// Datos del footer y modals legales

export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'twitter' | 'linkedin' | 'github';
}

export interface TechSpec {
  label: string;
  value: string;
}

export interface FooterData {
  statusBadge: string;
  statusText: string;
  ctaText: string;
  ctaLink: string;
  socialLinks: SocialLink[];
  techSpecs: TechSpec[];
  copyright: string;
  location: string;
}

export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface ModalData {
  badge: string;
  title: string;
  lastUpdate: string;
  sections: LegalSection[];
}

// ============================================
// FOOTER DATA
// ============================================

export const footerData: FooterData = {
  // Status badge
  statusBadge: '/// Estado del Sistema',
  statusText: 'DISPONIBLE Q1 2025',

  // CTA
  ctaText: 'Conéctate',
  ctaLink: 'mailto:bhzeuscagd@gmail.com',

  // Social Links
  socialLinks: [
    {
      name: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      icon: 'instagram'
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/tu-usuario',
      icon: 'twitter'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-usuario',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: 'github'
    }
  ],

  // Tech Specs
  techSpecs: [
    { label: 'Build', value: 'v.2.4.0' },
    { label: 'OS', value: 'CachyOS / Linux' },
    { label: 'Stack', value: 'Astro + React' },
    { label: 'Timezone', value: 'GMT-5' }
  ],

  // Copyright
  copyright: '© 2025 CAGD',
  location: 'BUCARAMANGA, COL'
};

// ============================================
// PRIVACY POLICY DATA
// ============================================

export const privacyPolicyData: ModalData = {
  badge: 'LEGAL.DOC // 01',
  title: 'Política de Privacidad',
  lastUpdate: 'Enero 2025',
  sections: [
    {
      title: '1. Información que Recopilamos',
      content: [
        'Este sitio web recopila únicamente la información que proporcionas voluntariamente a través del formulario de contacto, incluyendo:',
        '• Nombre completo',
        '• Dirección de correo electrónico',
        '• Servicio de interés',
        '• Mensaje o consulta'
      ]
    },
    {
      title: '2. Uso de la Información',
      content: [
        'La información recopilada se utiliza exclusivamente para:',
        '• Responder a tus consultas y solicitudes',
        '• Proporcionar los servicios solicitados',
        '• Mejorar la experiencia del usuario'
      ]
    },
    {
      title: '3. Cookies y Tecnologías de Seguimiento',
      content: 'Este sitio no utiliza cookies de seguimiento ni herramientas de análisis de terceros que recopilen datos personales.'
    },
    {
      title: '4. Compartir Información',
      content: 'No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento explícito.'
    },
    {
      title: '5. Seguridad',
      content: 'Implementamos medidas de seguridad apropiadas para proteger tu información contra acceso no autorizado, alteración o destrucción.'
    },
    {
      title: '6. Tus Derechos',
      content: [
        'Tienes derecho a:',
        '• Acceder a tu información personal',
        '• Solicitar corrección de datos inexactos',
        '• Solicitar eliminación de tu información'
      ]
    },
    {
      title: '7. Contacto',
      content: 'Para cualquier consulta sobre esta política, contacta a: bhzeuscagd@gmail.com'
    }
  ]
};

// ============================================
// TERMS OF USE DATA
// ============================================

export const termsOfUseData: ModalData = {
  badge: 'LEGAL.DOC // 02',
  title: 'Términos de Uso',
  lastUpdate: 'Enero 2025',
  sections: [
    {
      title: '1. Aceptación de Términos',
      content: 'Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos de uso y todas las leyes y regulaciones aplicables.'
    },
    {
      title: '2. Uso del Sitio',
      content: [
        'Este sitio es proporcionado para uso personal y comercial legítimo. No puedes:',
        '• Utilizar el sitio para fines ilegales',
        '• Intentar acceder a áreas restringidas',
        '• Interferir con el funcionamiento del sitio',
        '• Recopilar información de otros usuarios'
      ]
    },
    {
      title: '3. Propiedad Intelectual',
      content: 'El contenido, diseño y código de este sitio están protegidos por derechos de autor. El uso no autorizado está prohibido, salvo lo permitido por la Licencia MIT.'
    },
    {
      title: '4. Servicios Ofrecidos',
      content: 'Los servicios de diseño y desarrollo se proporcionan según los términos acordados en contratos individuales. Este sitio sirve como portafolio y punto de contacto inicial.'
    },
    {
      title: '5. Enlaces Externos',
      content: 'Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido o prácticas de privacidad de dichos sitios.'
    },
    {
      title: '6. Limitación de Responsabilidad',
      content: 'El sitio se proporciona "tal cual". No garantizamos que esté libre de errores o interrupciones. No seremos responsables de daños derivados del uso del sitio.'
    },
    {
      title: '7. Modificaciones',
      content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al publicarse en el sitio.'
    },
    {
      title: '8. Contacto',
      content: 'Para preguntas sobre estos términos: bhzeuscagd@gmail.com'
    }
  ]
};

// ============================================
// MIT LICENSE DATA
// ============================================

export const mitLicenseData: ModalData = {
  badge: 'LEGAL.DOC // 03',
  title: 'Licencia MIT',
  lastUpdate: 'Copyright (c) 2025 CAGD',
  sections: [
    {
      title: 'Permisos',
      content: 'Se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:'
    },
    {
      title: 'Condiciones',
      content: 'El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.'
    },
    {
      title: 'Limitación de Responsabilidad',
      content: 'EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.'
    },
    {
      title: 'Código Fuente',
      content: 'El código fuente de este proyecto está disponible en GitHub bajo esta licencia. Siéntete libre de explorar, aprender y construir sobre él.'
    }
  ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Obtiene un social link por nombre
 */
export function getSocialLink(name: string): SocialLink | undefined {
  return footerData.socialLinks.find(link => 
    link.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Formatea el contenido de una sección
 */
export function formatSectionContent(content: string | string[]): string[] {
  if (Array.isArray(content)) {
    return content;
  }
  return [content];
}