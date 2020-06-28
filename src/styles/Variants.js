export const toFullWidth = {
  visible: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    width: 0,
  },
};

export const fromLeft = {
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.7,
    },
  },
  hidden: {
    x: "-100vh",
  },
};

export const loadvariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

export const box = {
  visible: (x) => ({
    y: [0, -50],
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: [x],
      yoyo: "Infinity",
      ease: "circOut",
    },
  }),
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

export const text = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      yoyo: "Infinity",
    },
  },
  hidden: {
    opacity: 0,
  },
};
