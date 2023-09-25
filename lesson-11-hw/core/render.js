export const render = (currentNode) => {
  [...currentNode.children].forEach((el) => {
    el.remove();
  });
};
