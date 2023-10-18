export const getElementByClassName = (node, cn) => {
  return [...node.children].filter((el) => el.className === cn)[0];
};
