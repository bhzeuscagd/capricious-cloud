// src/data/contact.ts
// Datos de la sección de contacto

export interface ContactTitle {
  main: string;
  outlined: string;
}

export interface SubmitButton {
  text: string;
  icon: string;
}

export interface ContactData {
  badge: string;
  sidebarText: string;
  title: ContactTitle;
  services: string[];
  email: string;
  emailSubject: string;
  successUrl: string;
  submitButton: SubmitButton;
}

// ============================================
// CONTACT DATA - Configuración Principal
// ============================================

export const contactData: ContactData = {
  // Badge técnico (esquina superior derecha)
  badge: 'SYS.REQ // V.25',

  // Texto vertical del sidebar (desktop only)
  sidebarText: 'Inquiry_Mode_On',

  // Título principal
  title: {
    main: 'Start',
    outlined: 'Project.' // Este texto tendrá borde outline
  },

  // Opciones del selector de servicios
  services: [
    'Diseño Web Editorial',
    'Desarrollo Frontend',
    'Sistema de Diseño',
    'Aplicación Web Completa',
    'Consultoría UX/UI',
    'Optimización de Performance',
    'Otro'
  ],

  // ⚠️ IMPORTANTE: Tu email para recibir los formularios
  email: 'bhzeuscagd@gmail.com',

  // Asunto del email que recibirás
  emailSubject: '🚀 Nuevo Proyecto - Formulario de Contacto',

  // URL de redirección después de enviar (cambia por tu página de éxito)
  //editalo para que se muestre la paginas de gracias.astro
  successUrl: '/gracias', // O '/gracias' si es relativo

  // Texto del botón de envío
  submitButton: {
    text: 'Iniciar Transmisión',
    icon: '→'
  }
};

// ============================================
// FORMSUBMIT CONFIGURATION GUIDE
// ============================================

/**
 * CONFIGURACIÓN DE FORMSUBMIT.CO
 * 
 * Este componente usa FormSubmit (https://formsubmit.co/) para enviar emails
 * sin necesidad de backend. Es GRATUITO y muy simple.
 * 
 * PASOS PARA CONFIGURAR:
 * 
 * 1. PRIMERA VEZ - ACTIVAR TU EMAIL:
 *    - Completa el formulario en tu sitio web
 *    - FormSubmit enviará un email de confirmación a bhzeuscagd@gmail.com
 *    - Haz clic en el link de activación en ese email
 *    - ¡Listo! Ya funcionará automáticamente
 * 
 * 2. PERSONALIZAR EMAILS:
 *    El email que recibirás contendrá:
 *    - Nombre: [valor del campo "Nombre"]
 *    - Email: [valor del campo "Email"]
 *    - Servicio: [valor seleccionado]
 *    - Mensaje: [texto del brief]
 *    - Fecha y hora del envío
 * 
 * 3. CONFIGURACIONES AVANZADAS (opcional):
 *    Puedes agregar campos ocultos adicionales al formulario:
 *    
 *    - Captcha: <input type="hidden" name="_captcha" value="true" />
 *    - CC (copia): <input type="hidden" name="_cc" value="otro@email.com" />
 *    - Auto-respuesta: <input type="hidden" name="_autoresponse" value="Gracias por contactar..." />
 * 
 * 4. PÁGINA DE ÉXITO PERSONALIZADA:
 *    - Cambia `successUrl` arriba para redirigir a tu página de agradecimiento
 *    - Ejemplo: '/gracias' o 'https://tudominio.com/gracias'
 * 
 * 5. SPAM PROTECTION:
 *    FormSubmit incluye protección anti-spam automática.
 *    Si recibes spam, activa captcha cambiando:
 *    name="_captcha" value="true"
 * 
 * DOCUMENTACIÓN COMPLETA:
 * https://formsubmit.co/documentation
 */

// ============================================
// ALTERNATIVE EMAIL SERVICES
// ============================================

/**
 * Si prefieres otros servicios de formularios:
 * 
 * 1. EMAILJS (https://www.emailjs.com/)
 *    - 200 emails/mes gratis
 *    - Más personalizable
 *    - Requiere JavaScript
 * 
 * 2. NETLIFY FORMS (https://www.netlify.com/products/forms/)
 *    - 100 submissions/mes gratis
 *    - Integración perfecta si usas Netlify
 *    - Solo agregar atributo `netlify` al form
 * 
 * 3. WEB3FORMS (https://web3forms.com/)
 *    - 250 submissions/mes gratis
 *    - Similar a FormSubmit
 *    - Sin confirmación de email
 * 
 * 4. GETFORM (https://getform.io/)
 *    - 50 submissions/mes gratis
 *    - Dashboard con estadísticas
 */

// ============================================
// EMAIL TEMPLATE - Lo que recibirás
// ============================================

/**
 * EJEMPLO DEL EMAIL QUE RECIBIRÁS:
 * 
 * De: FormSubmit <noreply@formsubmit.co>
 * Para: bhzeuscagd@gmail.com
 * Asunto: 🚀 Nuevo Proyecto - Formulario de Contacto
 * 
 * ┌─────────────────────────────────────────┐
 * │  Nuevo Mensaje del Formulario          │
 * ├─────────────────────────────────────────┤
 * │                                         │
 * │  Nombre: Juan Pérez                     │
 * │  Email: juan@ejemplo.com                │
 * │  Servicio: Desarrollo Frontend          │
 * │                                         │
 * │  Mensaje:                               │
 * │  Necesito un sitio web para mi startup │
 * │  de tecnología. Presupuesto de $5000.   │
 * │  Timeline: 2 meses.                     │
 * │                                         │
 * │  Fecha: 25 Dic 2024, 10:30 AM          │
 * └─────────────────────────────────────────┘
 */

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitiza input del usuario (previene XSS)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Formatea el mensaje para el email
 */
export function formatEmailMessage(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}): string {
  return `
Nuevo mensaje de contacto:

Nombre: ${sanitizeInput(data.name)}
Email: ${sanitizeInput(data.email)}
Servicio: ${sanitizeInput(data.service)}

Mensaje:
${sanitizeInput(data.message)}
  `.trim();
}