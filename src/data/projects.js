export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    tagline: "Full-featured online shopping experience",
    image: "/src/assets/images/project1.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    category: "Full Stack",
    
    detailed: {
      description: `A comprehensive e-commerce platform that allows users to browse products, add items to cart, 
      and complete purchases securely. Features include user authentication, product management, order tracking, 
      and payment integration with Stripe.`,
      
      features: [
        "User authentication and authorization with JWT",
        "Product catalog with search and filter functionality",
        "Shopping cart and wishlist management",
        "Secure payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for product and order management",
        "Responsive design for all devices"
      ],
      
      challenges: [
        {
          problem: "Implementing secure payment processing",
          solution: "Integrated Stripe API with proper error handling and webhook implementation for payment confirmation"
        },
        {
          problem: "Managing complex state across components",
          solution: "Utilized Redux Toolkit for efficient state management and Redux Persist for cart persistence"
        },
        {
          problem: "Optimizing image loading and performance",
          solution: "Implemented lazy loading, image compression, and CDN integration for faster load times"
        }
      ],
      
      improvements: [
        "Add product recommendations using machine learning",
        "Implement real-time inventory management",
        "Add multi-language support",
        "Integrate social media sharing features"
      ],
      
      links: {
        live: "https://your-project-live-link.com",
        github: "https://github.com/yourusername/project-repo",
      }
    }
  },
  {
    id: 2,
    name: "Task Management System",
    tagline: "Organize your work efficiently",
    image: "/src/assets/images/project2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    category: "Full Stack",
    
    detailed: {
      description: `A real-time collaborative task management application that helps teams organize, 
      track, and complete projects efficiently. Features include drag-and-drop task boards, real-time 
      updates, and team collaboration tools.`,
      
      features: [
        "Drag-and-drop Kanban boards",
        "Real-time collaboration using Socket.io",
        "Task assignment and deadline management",
        "Team chat and comments",
        "File attachments and rich text editor",
        "Progress tracking and analytics"
      ],
      
      challenges: [
        {
          problem: "Implementing real-time synchronization across multiple users",
          solution: "Used Socket.io for bi-directional communication and optimistic UI updates for better UX"
        },
        {
          problem: "Handling complex drag-and-drop functionality",
          solution: "Implemented react-beautiful-dnd library with custom animations and state management"
        }
      ],
      
      improvements: [
        "Add calendar view for task scheduling",
        "Implement notification system",
        "Add time tracking features",
        "Create mobile app version"
      ],
      
      links: {
        live: "https://your-project-live-link.com",
        github: "https://github.com/yourusername/project-repo",
      }
    }
  },
  {
    id: 3,
    name: "Social Media Dashboard",
    tagline: "Analytics and insights at your fingertips",
    image: "/src/assets/images/project3.jpg",
    technologies: ["React", "Chart.js", "Node.js", "Express", "PostgreSQL"],
    category: "Full Stack",
    
    detailed: {
      description: `A comprehensive dashboard for managing and analyzing social media presence across 
      multiple platforms. Provides insights, analytics, and post scheduling capabilities.`,
      
      features: [
        "Multi-platform social media integration",
        "Real-time analytics and reporting",
        "Post scheduling and automation",
        "Engagement metrics and trends",
        "Interactive charts and graphs",
        "Export reports in multiple formats"
      ],
      
      challenges: [
        {
          problem: "Integrating multiple social media APIs",
          solution: "Created a unified API layer that abstracts different platform APIs with consistent error handling"
        },
        {
          problem: "Visualizing complex data sets",
          solution: "Used Chart.js with custom configurations and implemented data aggregation on the backend"
        }
      ],
      
      improvements: [
        "Add AI-powered content suggestions",
        "Implement competitor analysis features",
        "Add sentiment analysis for comments",
        "Create automated reporting system"
      ],
      
      links: {
        live: "https://your-project-live-link.com",
        github: "https://github.com/yourusername/project-repo",
      }
    }
  }
];