"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const render = (node, children, newData) => {
    children.forEach((child) => {
        child.remove();
    });
    if (Array.isArray(newData))
        return node.append(...newData);
    node.append(newData);
};
exports.render = render;
