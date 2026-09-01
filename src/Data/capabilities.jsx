export const capabilities = [
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description:
      'Creating fluid, adaptive interfaces that provide an optimal viewing experience across a wide range of devices, from mobile phones to large desktop monitors.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="12" height="10" rx="1" />
        <path d="M6 13v3a1 1 0 0 0 1 1h8" />
        <rect x="15" y="7" width="7" height="13" rx="1" />
      </svg>
    ),
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description:
      'Tuning web applications for maximum speed and efficiency. Implementing lazy loading, code splitting, and caching strategies to ensure fast load times.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 12l4-4" />
        <path d="M6 12a6 6 0 0 1 6-6" />
      </svg>
    ),
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    description:
      'Designing robust frontend architectures using modern frameworks like React. Building reusable component libraries and managing complex application state.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l-7 12h14L12 2z" />
        <path d="M12 14v8" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
];
export const valueProps = [
  {
    title: 'Technical Reliability',
    description:
      'I focus on writing clean, readable code and sticking to best practices. I build modular components that are easy to maintain and grow, helping keep codebases organized as projects scale.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Design Sensitivity',
    description:
      'I pay close attention to design details like spacing, typography, and responsive layouts. I aim to translate wireframes and Figma designs into accurate, polished user interfaces that match the intended vision',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export const offerings = [
  {
    title: 'Frontend Development',
    description:
      'Building robust, scalable user interfaces using modern HTML, CSS, and JavaScript. Focus on performance optimization and semantic architecture.',
    tag: 'Scalable Interfaces —',
    gridClass: 'col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
      </svg>
    ),
  },
  {
    title: 'React Development',
    description:
      'Developing single-page applications with React. Implementing state management, hook-based architecture, and highly reusable component libraries.',
    tag: 'Reusable Components —',
    gridClass: 'col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description:
      'Crafting fluid layouts that adapt seamlessly to any device. Utilizing mobile-first methodologies and advanced CSS grid/flexbox techniques.',
    tag: 'Mobile-First —',
    gridClass: 'col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="12" height="10" rx="1" />
        <rect x="15" y="7" width="7" height="13" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Website Redesign',
    description:
      'Auditing and overhauling legacy codebases. Modernizing user interfaces and improving UX flows to meet current accessibility standards and design trends.',
    tag: 'Modernizing UI/UX —',
    gridClass: 'col-span-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description:
      'Engineered for conversion. Lightning-fast load times, semantic structure for SEO, and engaging micro-interactions.',
    tag: 'High-Converting —',
    gridClass: 'col-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-2 1.26-2l-4.26-4.26s-1.29.55-2 1.26z" />
        <path d="M12 15l-3-3 7.35-7.35c.78-.78 2.05-.78 2.83 0v0c.78.78.78 2.05 0 2.83L12 15z" />
      </svg>
    ),
  },
];

export const projects = [
  {
    id: 'currency',
    title: 'FX-Currency',
    description:
      'A sleek, dark-themed currency converter web app built for a hackathon. It fetches real-time and historical exchange rates from the Frankfurter API and presents them in a modern, minimal UI.',
    tags: ['HTML', 'CSS', 'Javascript'],
    category: 'JavaScript',
    image: './currency.webp',
    featured: true,
    liveUrl: 'https://m28755.github.io/CURRENCY-CONVERTER/',
    githubUrl: 'https://github.com/M28755',
  },
  {
    id: 'coffee',
    title: 'Modern Coffee Shop',
    description:
      'The design system is built to evoke the sensory experience of a high-end specialty coffee house. It targets a discerning audience that values artisanal quality and slow-living rituals. The brand personality is sophisticated yet approachable, blending modern minimalism with a warm, cozy atmosphere.',
    tags: ['HTML','CSS', 'JavaScript'],
    category: 'JavaScript',
    image: './coffee-shop.webp',
    featured: false,
    demoUrl: 'https://offee-shop.netlify.app/',
  },
  {
    id: 'lulu dishes',
    title: 'Lulu dishes',
    description:
      'Authentic Swahili Flavors, Made with Love. A modern, mobile-first, responsive web application for Lulus Delish, a family-friendly coastal Swahili restaurant located along Narok Road, Majengo, Mombasa, Kenya.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    category: 'Javascript',
    image: './lulu.webp',
    featured: false,
    demoUrl: 'https://lulu-s-dishes.vercel.app/',
  },
  {
    id: 'Cardiovascular Health',
    title: 'Cardiovascular Health',
    description:
      'An immersive digital presence featuring custom WebGL scroll animations and a bespoke reservation management system.',
    tags: ['HTML', 'Css', 'Javascript'],
    category: 'HTML/CSS',
    image: './cardiac.webp',
    featured: false,
    demoUrl: '#',
  },

];