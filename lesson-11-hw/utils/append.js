export const append = (target, element) => {
  target.append(element);
};

export const prepend = (target, element) => {
  target.prepend(element);
};

export const appendMany = (target, elements) => {
  target.append(...elements);
};
