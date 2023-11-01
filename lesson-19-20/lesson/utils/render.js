export const render = (node, newChildren) => {
  [...node.children].forEach((child) => {
    child.remove();
  });

  node.append(...newChildren);
};
