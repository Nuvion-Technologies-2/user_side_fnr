// Common animation variants for reuse throughout the application

// Fade in animation from bottom
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  // Container with staggered children animations
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  // Zoom in animation
  export const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };
  
  // Slide in from left
  export const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };
  
  // Slide in from right
  export const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };
  
  // Hover animations
  export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
  // Page transitions
  export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };
  
  // Rotating animation
  export const rotate360 = {
    animate: { 
      rotate: 360,
      transition: { duration: 15, ease: "linear", repeat: Infinity }
    }
  };