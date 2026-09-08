
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardHover = {
  y: -12,
  scale: 1.025,
  rotateX: 3,
  rotateY: -3,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const floating = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const iconHover = {
  scale: 1.12,
  rotate: 5,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
};

export const arrowHover = {
  x: 6,
  transition: {
    duration: 0.25,
  },
};


export const perspectiveCardIn = {
  hidden: {
    opacity: 0,
    rotateX: -25,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const card3DTiltHover = {
  scale: 1.03,
  rotateX: 6,
  rotateY: -6,
  z: 50,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};

export const floating3DDepth = {
  y: [0, -16, 0],
  rotateZ: [0, 1.5, -1.5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const layerParallaxChild = {
  hidden: { opacity: 0, z: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    z: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const flipIn3D = {
  hidden: {
    opacity: 0,
    rotateY: 90,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroOrbFloat3D = {
  y: [0, -22, 0],
  x: [0, 12, 0],
  rotate: [0, 8, -8, 0],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  },
};