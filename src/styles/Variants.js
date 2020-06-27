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
