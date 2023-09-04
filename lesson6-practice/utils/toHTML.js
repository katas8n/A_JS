import { Button } from "../components/Button";

export function tasksToHTML(tasks, taskManager, doneManager) {
  removeDOM(taskManager);

  if (doneManager.children) {
    removeDOM(doneManager);
  }

  for (const task of tasks) {
    if (!task.hasDone) {
      const element = toHTML({
        tagName: "div",
        className: "task",
        id: task.id,
        html: {
          position: "afterbegin",
          content: `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                `,
        },
      });

      const deleteBTN = toHTML(
        new Button({
          className: "--delete",
          events: {
            click: (e) => {
              const deletedTask = tasks.filter((el) => {
                return el.id !== e.target.parentElement.id;
              });

              tasks = deletedTask;

              tasksToHTML(deletedTask, taskManager, doneManager);
            },
          },
          textContent: "Delete",
        })
      );

      const doneBTN = toHTML(
        new Button({
          className: "--done",
          events: {
            click: (e) => {
              const id = e.target.parentElement.id;

              const targetTask = tasks.filter((el, i) => id === el.id);

              targetTask[0].hasDone = true;

              tasksToHTML(tasks, taskManager, doneManager);
              console.log("[tasks]", tasks);
            },
          },
          textContent: "Done",
        })
      );

      element.append(deleteBTN, doneBTN);
      taskManager.append(element);
    } else {
      const element = toHTML({
        tagName: "div",
        className: "task",
        id: task.id,
        html: {
          position: "afterbegin",
          content: `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                `,
        },
      });

      doneManager.append(element);
    }
  }
}

function removeDOM(node) {
  [...node.children].forEach((el) => {
    el.remove();
  });
}

function toHTML({ tagName, className, id, html, textContent, events }) {
  const element = document.createElement(tagName);
  className ? (element.className = className) : null;
  id ? (element.id = id) : null;
  textContent ? (element.textContent = textContent) : null;

  html && element.insertAdjacentHTML(html.position, html.content);

  if (events) {
    for (const event in events) {
      const action = events[event];
      element.addEventListener(event, action);
    }
  }

  return element;
}
