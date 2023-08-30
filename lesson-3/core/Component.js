// export class Component {
//     constructor(options = {}) {
//         const { 
//             tagName,
//             className,
//             html = {
//                  position : null,
//                  text:null 
//             },
//             textContent,
//             children=[],
//             events =[],
//             ...attrs 
//         } = options;

//         const element = document.createElement(tagName);
//         element.className = className;

//         const hasHTML = html.position && html.text;

//         hasHTML && element.insertAdjacentHTML(html.position , html.text);
//         if(textContent) element.textContent = textContent;

//         for(let key in attrs){
//             const value = attrs[key];
//             element[key] = value;
//         }
//         console.log('[events]', events);
//         for(const event of events){
//             element.addEventListener(event.type, event.action)
//         }

//         children && element.append(...children)

//         console.log('[attrs]', attrs);

//         return element;
//     }   

// }
