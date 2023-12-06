export const render = (node:HTMLElement ,children : HTMLElement[] , newData: HTMLElement |  HTMLElement[]): void => {
    children.forEach((child) => {
        child.remove();
    })

    if(Array.isArray(newData)) return node.append(...newData);

    node.append(newData);
}