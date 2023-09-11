export const append = (component, distPoint) => {
  distPoint.append(component);
};

export const render = (newComponent, node) => {
  [...node.children].forEach((el) => {
    el.remove();
  });

  node.append(newComponent);
};
