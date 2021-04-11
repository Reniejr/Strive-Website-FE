export const percentStyle = (percent) => {
  if (percent <= 50) {
    return "red";
  }
  if (percent >= 51 && percent <= 70) {
    return "yellow";
  }
  if (percent >= 71 || percent === 100) {
    return "#00ff84";
  }
};
