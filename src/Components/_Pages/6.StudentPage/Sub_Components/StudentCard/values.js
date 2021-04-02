export const flipStyle = (isFlip) => {
  let style = {};
  if (isFlip) {
    style = {
      transform: "translate(-50%, -50%) rotateY(180deg)",
      top: "50%",
      left: "50%",
    };
  } else {
    style = {
      transform: "translate(-50%, -50%)",
      top: "50%",
      left: "50%",
    };
  }
  return style;
};
